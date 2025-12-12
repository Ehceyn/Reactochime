# Vercel Deployment Fix - Static Files Issue

## Problem
JavaScript files are returning HTML instead of JS, causing "Unexpected token '<'" error.

## Solution

I've simplified the `vercel.json`. Now you need to:

### 1. Redeploy to Vercel
The updated `vercel.json` should fix the routing issue.

### 2. If it still doesn't work, try this:

**Option A: Remove vercel.json entirely (let Vercel auto-detect)**
- Delete `vercel.json`
- Vercel will auto-detect Create React App
- But API routes won't work automatically

**Option B: Add homepage to package.json**
Add this to your `package.json`:
```json
{
  "homepage": "."
}
```

Then rebuild and redeploy.

### 3. Check Build Output
Make sure your build includes:
- `/static/js/` folder with JS files
- `/static/css/` folder with CSS files
- `/index.html` with correct paths

### 4. Verify Static File Paths
The built `index.html` should have paths like:
- `/static/js/main.xxx.js` (not `/static/js/main.xxx.js` with wrong base)

## Current vercel.json
```json
{
  "rewrites": [
    {
      "source": "/api/(.*)",
      "destination": "/api/$1"
    },
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

This should work, but if static files still fail, Vercel might need the buildCommand and outputDirectory explicitly set.

## Alternative: Use Vercel's React Preset
In Vercel dashboard:
1. Go to Settings → General
2. Framework Preset: "Create React App"
3. This might override our custom config

Try redeploying first with the updated vercel.json!

