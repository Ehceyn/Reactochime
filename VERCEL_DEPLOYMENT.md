# Vercel Deployment Guide

## ✅ Yes, it will work on Vercel!

I've set up everything so your React app and API can both deploy to Vercel.

## What I've Created

1. **Vercel serverless functions** - Converted Flask API to Vercel Python functions:

   - `api/cstr_calculate.py`
   - `api/pfr_calculate.py`
   - `api/health.py`

2. **Vercel configuration** - `vercel.json` with proper routing

3. **Updated API config** - Automatically uses relative paths on Vercel

## Deployment Steps

### 1. Install Vercel CLI (if not already installed)

```bash
npm i -g vercel
```

### 2. Deploy to Vercel

```bash
# From the Reactochime root directory
vercel
```

Or connect your GitHub repo to Vercel dashboard for automatic deployments.

### 3. That's it! 🎉

The API endpoints will be available at:

- `https://your-app.vercel.app/api/cstr_calculate`
- `https://your-app.vercel.app/api/pfr_calculate`
- `https://your-app.vercel.app/api/health`

## How It Works

- **React App**: Deploys as static site (handled automatically by Vercel)
- **API Functions**: Deploy as serverless functions in `/api` folder
- **API Config**: Automatically detects production and uses relative paths

## Environment Variables (Optional)

If you want to use a separate API server instead of Vercel functions, set:

```
REACT_APP_API_URL=https://your-api-server.com
```

## Local Development

For local development, you can still use the Flask API:

```bash
# Terminal 1: Run Flask API
cd api
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python app.py

# Terminal 2: Run React app
npm start
```

The React app will automatically use `http://localhost:5000` in development mode.

## Testing After Deployment

1. Deploy to Vercel
2. Visit your app URL
3. Try calculating CSTR or PFR values
4. Check browser console for any errors

## Notes

- Vercel serverless functions have a 10-second timeout (should be fine for calculations)
- Cold starts might add ~100-200ms latency (normal for serverless)
- All calculations are stateless, perfect for serverless architecture

## Troubleshooting

If you get CORS errors:

- The serverless functions already include CORS headers
- Make sure you're using the `/api/` prefix in the URLs

If calculations fail:

- Check Vercel function logs in the dashboard
- Verify the request format matches what the functions expect
