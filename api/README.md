# Reactochime API

Flask API for CSTR and PFR reactor design calculations for first-order reactions.

## Setup

1. Create a virtual environment (recommended):
```bash
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Run the API:
```bash
python app.py
```

The API will be available at `http://localhost:5000`

## API Endpoints

### POST `/cstr_calculate`
Calculate CSTR reactor design parameters.

**Request Body:** Array of objects with:
- `rate_constant` (float): Rate constant in per hour
- `inlet_concentration` (float): Inlet concentration in kmol/m³
- `capacity` (float): Volumetric flow rate in m³/hr
- `conversion` (float): Desired conversion (0-1)
- `reactor_diameter` (float, optional): Reactor diameter in meters

**Response:** Array of result objects with:
- `conversion`: Conversion fraction
- `rate_of_reaction`: Rate of reaction at exit
- `residence_time`: Residence time in hours
- `exit_concentration`: Exit concentration in kmol/m³
- `space_time`: Space time in hours
- `space_velocity`: Space velocity in per hour
- `reactor_height`: Reactor height in meters
- `reactor_volume`: Reactor volume in m³

### POST `/pfr_calculate`
Calculate PFR reactor design parameters.

**Request/Response:** Same as CSTR endpoint

### GET `/health`
Health check endpoint.

## Example Request

```bash
curl -X POST http://localhost:5000/cstr_calculate \
  -H "Content-Type: application/json" \
  -d '[{
    "rate_constant": 0.1,
    "inlet_concentration": 1.0,
    "capacity": 10.0,
    "conversion": 0.8
  }]'
```

## Notes

- The API accepts arrays of calculations to process multiple conversions at once
- If `reactor_diameter` is not provided, the API assumes reasonable aspect ratios:
  - CSTR: H/D = 2
  - PFR: H/D = 5
- For conversion = 1.0, some values may be infinite (handled gracefully)

