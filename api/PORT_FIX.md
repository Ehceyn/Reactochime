# Port 5000 Issue - Fixed! ✅

## Problem
Port 5000 is often used by macOS AirPlay Receiver, causing Flask to fail to start.

## Solution
I've changed the default port from **5000** to **5001**.

### Updated Files:
- `api/app.py` - Now uses port 5001 (or PORT environment variable)
- `src/config/api.js` - React app now connects to port 5001

## How to Run

### Option 1: Use the new default (5001)
```bash
cd api
source venv/bin/activate
python app.py
```
API will run on `http://localhost:5001`

### Option 2: Use a custom port
```bash
PORT=3001 python app.py
```

### Option 3: Kill the process on port 5000 (if you want to use 5000)
```bash
# Find what's using port 5000
lsof -ti:5000

# Kill it (replace PID with the number from above)
kill -9 <PID>

# Or disable AirPlay Receiver:
# System Settings → General → AirDrop & Handoff → AirPlay Receiver → Off
```

## React App
The React app is already configured to use `http://localhost:5001` in development mode.

## For Vercel Deployment
This doesn't affect Vercel - it uses serverless functions, not a specific port.

