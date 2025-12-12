# Reactochime API Setup Guide

## Quick Start

### 1. Install Dependencies

```bash
cd api
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

### 2. Run the API

```bash
python app.py
```

The API will start on `http://localhost:5000`

### 3. Configure React App

The React app is already configured to use `http://localhost:5000` by default. If you need to change this:

1. Create a `.env` file in the Reactochime root directory:
```bash
REACT_APP_API_URL=http://localhost:5000
```

2. Or modify `src/config/api.js` directly

### 4. Test the API

You can test the API using curl:

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

## Deployment

### For Production Deployment

1. Update the API URL in your React app's `.env` file or `src/config/api.js`
2. Deploy the Flask API to your hosting service (PythonAnywhere, Heroku, AWS, etc.)
3. Make sure CORS is enabled (already configured in the code)

### Recommended: Use Gunicorn for Production

```bash
pip install gunicorn
gunicorn -w 4 -b 0.0.0.0:5000 app:app
```

## API Endpoints

- `POST /cstr_calculate` - Calculate CSTR reactor parameters
- `POST /pfr_calculate` - Calculate PFR reactor parameters  
- `GET /health` - Health check

## Notes

- The API processes arrays of calculations (one per conversion value)
- Reactor diameter is optional - if not provided, reasonable aspect ratios are assumed
- All calculations are for first-order reactions only

