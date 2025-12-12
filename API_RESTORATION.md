# Reactochime API Restoration - Summary

## Recommendation: Python Flask API ✅

I've chosen to create a **standalone Python Flask API** rather than rewriting everything in Next.js. Here's why:

### Why This Approach?

1. **Your React app is already functional** - It has all the UI, components, charts, and state management working
2. **Faster to implement** - Just need to restore the calculation backend
3. **Separation of concerns** - Keep calculations in Python (better for scientific computing)
4. **Easier to maintain** - Simple Flask API is easier to debug and deploy
5. **Compatible with your existing code** - The React app already expects this API structure

## What I've Built

### 1. Flask API (`/api` folder)
- ✅ `/cstr_calculate` endpoint - Calculates CSTR reactor parameters
- ✅ `/pfr_calculate` endpoint - Calculates PFR reactor parameters
- ✅ CORS enabled for React app
- ✅ Handles arrays of calculations (for multiple conversion values)
- ✅ Proper error handling

### 2. Calculations Implemented

Both CSTR and PFR calculate:
- `rate_of_reaction` - Rate of reaction at exit
- `residence_time` - Residence time in hours
- `exit_concentration` - Exit concentration (kmol/m³)
- `space_time` - Space time (hours)
- `space_velocity` - Space velocity (per hour)
- `reactor_height` - Reactor height (meters)
- `reactor_volume` - Reactor volume (m³)
- `conversion` - Conversion fraction

### 3. React App Updates
- ✅ Created `src/config/api.js` for easy API URL configuration
- ✅ Updated Dashboard to use configurable API endpoints
- ✅ Added error handling for API calls

## Quick Start

### Run the API:
```bash
cd api
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python app.py
```

### Run the React App:
```bash
npm start
```

The React app will connect to `http://localhost:5000` by default.

## API Input Format

The API expects an array of objects:
```json
[{
  "rate_constant": 0.1,        // per hour
  "inlet_concentration": 1.0,  // kmol/m³
  "capacity": 10.0,             // m³/hr (volumetric flow rate)
  "conversion": 0.8,            // 0-1
  "reactor_diameter": 2.0      // meters (optional)
}]
```

## Files Created

- `api/app.py` - Main Flask application
- `api/requirements.txt` - Python dependencies
- `api/README.md` - API documentation
- `api/SETUP.md` - Setup instructions
- `api/run.sh` - Quick start script
- `src/config/api.js` - React API configuration

## Next Steps

1. **Test locally**: Run both API and React app to verify everything works
2. **Deploy API**: Deploy to PythonAnywhere, Heroku, or your preferred hosting
3. **Update React config**: Point React app to your deployed API URL
4. **Optional**: Add reactor_diameter input to React forms if you want users to specify it

## Notes

- The API matches your existing React app's expected format
- Reactor diameter is optional - if not provided, reasonable aspect ratios are assumed (H/D = 2 for CSTR, H/D = 5 for PFR)
- All calculations are for first-order reactions only
- The API processes arrays to handle multiple conversion values (0.05 to 1.0 in 0.05 increments) as your React app does

## Need Help?

Check the detailed documentation in:
- `api/README.md` - API endpoint details
- `api/SETUP.md` - Setup and deployment guide

