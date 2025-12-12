from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import math

app = Flask(__name__)
CORS(app)  # Enable CORS for React app

def cstr_design(k, C0, capacity, XA, reactor_diameter=None):
    """
    Calculate CSTR design parameters for first-order reaction
    
    Parameters:
    k: rate constant (per hour)
    C0: inlet concentration (kmol/m³)
    capacity: volumetric flow rate (m³/hr)
    XA: desired conversion (fraction, 0-1)
    reactor_diameter: reactor diameter in meters (optional)
    
    Returns:
    Dictionary with all calculated parameters
    """
    # Exit concentration
    exit_concentration = C0 * (1 - XA)
    
    # Rate of reaction at exit (first-order: r = -k*CA)
    rate_of_reaction = k * exit_concentration
    
    # Reactor volume for CSTR (first-order reaction)
    # Material balance: F0*CA0 = F0*CA + k*CA*V
    # Solving: V = F0*XA / (k*(1-XA))
    if XA == 1.0:
        # Avoid division by zero
        reactor_volume = float('inf')
        space_time = float('inf')
        space_velocity = 0
        residence_time = float('inf')
    else:
        reactor_volume = (capacity * XA) / (k * (1 - XA))
        
        # Space time (τ = V/F0)
        space_time = reactor_volume / capacity
        
        # Space velocity (1/τ = F0/V)
        space_velocity = capacity / reactor_volume
        
        # Residence time (for CSTR, residence time = space time)
        residence_time = space_time
    
    # Reactor height calculation
    if reactor_diameter is not None and reactor_diameter > 0:
        # Assuming cylindrical reactor: V = π*(D/2)²*H
        # H = V / (π*(D/2)²)
        cross_sectional_area = math.pi * (reactor_diameter / 2) ** 2
        reactor_height = reactor_volume / cross_sectional_area if reactor_volume != float('inf') else float('inf')
    else:
        # If diameter not provided, we need to assume a value or calculate from aspect ratio
        # For now, we'll set it to None or calculate assuming a reasonable aspect ratio
        # Assuming H/D = 2 (common for CSTR)
        if reactor_volume != float('inf'):
            # D = (4V/(π*H))^0.5, with H/D = 2, so H = 2D
            # V = π*D²*H/4 = π*D²*2D/4 = π*D³/2
            # D = (2V/π)^(1/3)
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

def pfr_design(k, C0, capacity, XA, reactor_diameter=None):
    """
    Calculate PFR design parameters for first-order reaction
    
    Parameters:
    k: rate constant (per hour)
    C0: inlet concentration (kmol/m³)
    capacity: volumetric flow rate (m³/hr)
    XA: desired conversion (fraction, 0-1)
    reactor_diameter: reactor diameter in meters (optional)
    
    Returns:
    Dictionary with all calculated parameters
    """
    # Exit concentration
    exit_concentration = C0 * (1 - XA)
    
    # Rate of reaction at exit (first-order: r = -k*CA)
    rate_of_reaction = k * exit_concentration
    
    # Reactor volume for PFR: V = (F0/k) * ln(1/(1-XA))
    # For first-order: V = (F0/k) * ln(C0/CA)
    if XA == 1.0:
        # Avoid division by zero
        reactor_volume = float('inf')
        space_time = float('inf')
        space_velocity = 0
        residence_time = float('inf')
    else:
        reactor_volume = (capacity / k) * math.log(1 / (1 - XA))
        
        # Space time (τ = V/F0)
        space_time = reactor_volume / capacity
        
        # Space velocity (1/τ = F0/V)
        space_velocity = capacity / reactor_volume
        
        # Residence time (for PFR, residence time = space time)
        residence_time = space_time
    
    # Reactor height calculation
    if reactor_diameter is not None and reactor_diameter > 0:
        # Assuming cylindrical reactor: V = π*(D/2)²*H
        # H = V / (π*(D/2)²)
        cross_sectional_area = math.pi * (reactor_diameter / 2) ** 2
        reactor_height = reactor_volume / cross_sectional_area if reactor_volume != float('inf') else float('inf')
    else:
        # If diameter not provided, assume reasonable aspect ratio
        # For PFR, typically longer (H/D = 5-10), let's use H/D = 5
        if reactor_volume != float('inf'):
            # V = π*D²*H/4, with H/D = 5, so H = 5D
            # V = π*D²*5D/4 = 5π*D³/4
            # D = (4V/(5π))^(1/3)
            assumed_diameter = (4 * reactor_volume / (5 * math.pi)) ** (1/3)
            reactor_height = 5 * assumed_diameter
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

@app.route('/cstr_calculate', methods=['POST'])
def cstr_route():
    """
    CSTR calculation endpoint
    Expects JSON array of objects with:
    - rate_constant: float
    - inlet_concentration: float
    - capacity: float (volumetric flow rate in m³/hr)
    - conversion: float (0-1)
    - reactor_diameter: float (optional, in meters)
    """
    try:
        data = request.get_json()
        
        if not isinstance(data, list):
            return jsonify({'error': 'Expected array of calculation objects'}), 400
        
        results = []
        for item in data:
            k = float(item.get('rate_constant', 0))
            C0 = float(item.get('inlet_concentration', 0))
            capacity = float(item.get('capacity', 0))
            XA = float(item.get('conversion', 0))
            reactor_diameter = item.get('reactor_diameter')  # Optional
            
            if reactor_diameter is not None:
                reactor_diameter = float(reactor_diameter)
            
            result = cstr_design(k, C0, capacity, XA, reactor_diameter)
            results.append(result)
        
        return jsonify(results)
    
    except Exception as e:
        return jsonify({'error': str(e)}), 400

@app.route('/pfr_calculate', methods=['POST'])
def pfr_route():
    """
    PFR calculation endpoint
    Expects JSON array of objects with:
    - rate_constant: float
    - inlet_concentration: float
    - capacity: float (volumetric flow rate in m³/hr)
    - conversion: float (0-1)
    - reactor_diameter: float (optional, in meters)
    """
    try:
        data = request.get_json()
        
        if not isinstance(data, list):
            return jsonify({'error': 'Expected array of calculation objects'}), 400
        
        results = []
        for item in data:
            k = float(item.get('rate_constant', 0))
            C0 = float(item.get('inlet_concentration', 0))
            capacity = float(item.get('capacity', 0))
            XA = float(item.get('conversion', 0))
            reactor_diameter = item.get('reactor_diameter')  # Optional
            
            if reactor_diameter is not None:
                reactor_diameter = float(reactor_diameter)
            
            result = pfr_design(k, C0, capacity, XA, reactor_diameter)
            results.append(result)
        
        return jsonify(results)
    
    except Exception as e:
        return jsonify({'error': str(e)}), 400

@app.route('/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({'status': 'healthy', 'message': 'Reactochime API is running'})

if __name__ == '__main__':
    import os
    port = int(os.environ.get('PORT', 5001))  # Use 5001 as default instead of 5000
    app.run(debug=True, host='0.0.0.0', port=port)

