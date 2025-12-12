from http.server import BaseHTTPRequestHandler
import json
import math

class handler(BaseHTTPRequestHandler):
    def do_POST(self):
        content_length = int(self.headers.get('Content-Length', 0))
        post_data = self.rfile.read(content_length)
        
        try:
            data = json.loads(post_data.decode('utf-8'))
            
            if not isinstance(data, list):
                self.send_response(400)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(json.dumps({'error': 'Expected array of calculation objects'}).encode())
                return
            
            results = []
            for item in data:
                k = float(item.get('rate_constant', 0))
                C0 = float(item.get('inlet_concentration', 0))
                capacity = float(item.get('capacity', 0))
                XA = float(item.get('conversion', 0))
                reactor_diameter = item.get('reactor_diameter')
                
                if reactor_diameter is not None:
                    reactor_diameter = float(reactor_diameter)
                
                result = self.cstr_design(k, C0, capacity, XA, reactor_diameter)
                results.append(result)
            
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps(results).encode())
        
        except Exception as e:
            self.send_response(400)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps({'error': str(e)}).encode())
    
    def cstr_design(self, k, C0, capacity, XA, reactor_diameter=None):
        """Calculate CSTR design parameters for first-order reaction"""
        # Exit concentration
        exit_concentration = C0 * (1 - XA)
        
        # Rate of reaction at exit (first-order: r = -k*CA)
        rate_of_reaction = k * exit_concentration
        
        # Reactor volume for CSTR (first-order reaction)
        if XA == 1.0:
            reactor_volume = float('inf')
            space_time = float('inf')
            space_velocity = 0
            residence_time = float('inf')
        else:
            reactor_volume = (capacity * XA) / (k * (1 - XA))
            space_time = reactor_volume / capacity
            space_velocity = capacity / reactor_volume
            residence_time = space_time
        
        # Reactor height calculation
        if reactor_diameter is not None and reactor_diameter > 0:
            cross_sectional_area = math.pi * (reactor_diameter / 2) ** 2
            reactor_height = reactor_volume / cross_sectional_area if reactor_volume != float('inf') else float('inf')
        else:
            if reactor_volume != float('inf'):
                assumed_diameter = (2 * reactor_volume / math.pi) ** (1/3)
                reactor_height = 2 * assumed_diameter
            else:
                reactor_height = float('inf')
        
        return {
            'conversion': XA,
            'rate_of_reaction': float(rate_of_reaction),
            'residence_time': float(residence_time) if residence_time != float('inf') else None,
            'exit_concentration': float(exit_concentration),
            'space_time': float(space_time) if space_time != float('inf') else None,
            'space_velocity': float(space_velocity) if space_velocity != 0 else None,
            'reactor_height': float(reactor_height) if reactor_height != float('inf') else None,
            'reactor_volume': float(reactor_volume) if reactor_volume != float('inf') else None,
        }

