# Vercel Deployment Checklist ✅

## What Should Work Automatically

✅ **React App** - Should build and deploy automatically  
✅ **Python Functions** - Vercel auto-detects Python files in `/api` folder  
✅ **API Routing** - Configured in `vercel.json`  
✅ **API Config** - Automatically uses relative paths in production

## Quick Verification Steps

### 1. Check Deployment Status

- Go to your Vercel dashboard
- Check if the deployment succeeded
- Look for any build errors

### 2. Test the API Endpoints

Visit these URLs in your browser or use curl:

```bash
# Health check
https://your-app.vercel.app/api/health

# Should return: {"status":"healthy","message":"Reactochime API is running"}
```

### 3. Test the React App

1. Visit your Vercel app URL
2. Try calculating CSTR or PFR values
3. Check browser console (F12) for any errors

### 4. Check Function Logs

In Vercel dashboard:

- Go to your project → Functions tab
- Check if Python functions are listed:
  - `/api/cstr_calculate`
  - `/api/pfr_calculate`
  - `/api/health`

## Common Issues & Fixes

### Issue: Functions not found (404)

**Fix:** Make sure Python files are in `/api` folder (not `/api/app.py`)

### Issue: Build fails

**Fix:** Check build logs in Vercel dashboard for specific errors

### Issue: CORS errors

**Fix:** Already handled in the Python functions (CORS headers included)

### Issue: Functions timeout

**Fix:** Calculations are fast, but if needed, increase timeout in Vercel settings

## What You DON'T Need to Do

❌ No environment variables needed (unless you want custom API URL)  
❌ No special Vercel settings required  
❌ No Python runtime configuration needed (auto-detected)  
❌ No build commands to add (already in vercel.json)

## If Something Doesn't Work

1. **Check Vercel Function Logs:**

   - Dashboard → Your Project → Functions → View Logs

2. **Test API directly:**

   ```bash
   curl -X POST https://your-app.vercel.app/api/cstr_calculate \
     -H "Content-Type: application/json" \
     -d '[{"rate_constant": 0.1, "inlet_concentration": 1.0, "capacity": 10.0, "conversion": 0.8}]'
   ```

3. **Check Browser Console:**
   - Open DevTools (F12)
   - Look for network errors or CORS issues

## Expected Behavior

✅ React app loads  
✅ API endpoints respond  
✅ Calculations work  
✅ Charts display

If all these work, you're good to go! 🎉
