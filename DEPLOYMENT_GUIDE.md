# 🚀 Complete Deployment Guide - TREESO NATURA

This guide shows how to deploy your website to GitHub Pages (frontend) and a free backend hosting service.

## Architecture Overview

```
┌─────────────────────┐         ┌──────────────────────┐
│   GitHub Pages      │         │   Backend API        │
│   (Static Files)    │ ◄────► │   (C# ASP.NET Core)  │
│                     │  HTTPS  │                      │
│ - HTML/CSS/JS       │         │ - Authentication     │
│ - Images/Assets     │         │ - Database (SQLite)  │
└─────────────────────┘         └──────────────────────┘
```

## Part 1: Deploy Backend (Choose One FREE Option)

### 🎯 Option A: Railway.app (Easiest - Recommended)

1. **Sign up at Railway.app**
   - Go to https://railway.app
   - Sign up with GitHub (FREE $5/month credit)

2. **Create New Project**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Connect your GitHub account
   - Select your repository

3. **Configure Service**
   - Railway will auto-detect .NET
   - Click on your service
   - Go to "Settings" → "Environment"
   - Add environment variable:
     ```
     ASPNETCORE_ENVIRONMENT=Production
     ```

4. **Get Your API URL**
   - Go to "Settings" → "Networking"
   - Click "Generate Domain"
   - Copy your URL (e.g., `https://your-app.railway.app`)

5. **Update CORS**
   - Before deploying, update `Backend/TreesoNaturaAPI/Program.cs`
   - Replace `.WithOrigins(...)` with your GitHub Pages URL

### 🎯 Option B: Render.com

1. **Sign up at Render.com**
   - Go to https://render.com
   - Sign up with GitHub (FREE tier available)

2. **Create Web Service**
   - Click "New +" → "Web Service"
   - Connect your repository
   - Configure:
     - **Name**: treesonatura-api
     - **Environment**: Docker
     - **Region**: Choose closest to you
     - **Branch**: main
     - **Build Command**: `dotnet publish Backend/TreesoNaturaAPI/TreesoNaturaAPI.csproj -c Release -o out`
     - **Start Command**: `cd out && dotnet TreesoNaturaAPI.dll`

3. **Get Your API URL**
   - After deployment, copy the URL (e.g., `https://treesonatura-api.onrender.com`)

### 🎯 Option C: Azure App Service

1. **Install Azure CLI**
   - Download from https://aka.ms/installazurecliwindows

2. **Login to Azure**
   ```bash
   az login
   ```

3. **Create Resource Group**
   ```bash
   az group create --name TreesoNatura --location eastus
   ```

4. **Deploy App**
   ```bash
   cd "c:\Users\tusha\Desktop\TREESO NATURA\Backend\TreesoNaturaAPI"
   az webapp up --name treesonatura-api --resource-group TreesoNatura --runtime "DOTNET|8.0" --sku F1
   ```

5. **Get Your API URL**
   - URL will be: `https://treesonatura-api.azurewebsites.net`

---

## Part 2: Update Frontend for Production

### Step 1: Update API URL in script.js

Open `script.js` and change the API URL:

```javascript
// BEFORE (Local Development)
const API_URL = 'http://localhost:5000/api';

// AFTER (Production - use your actual backend URL)
const API_URL = 'https://your-app.railway.app/api';
// OR
const API_URL = 'https://treesonatura-api.onrender.com/api';
// OR
const API_URL = 'https://treesonatura-api.azurewebsites.net/api';
```

### Step 2: Update CORS in Backend

Open `Backend/TreesoNaturaAPI/Program.cs` and update CORS:

```csharp
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowGitHubPages", policy =>
    {
        policy.WithOrigins(
            "https://yourusername.github.io",  // Replace with your GitHub Pages URL
            "http://localhost:5500",           // Keep for local testing
            "http://127.0.0.1:5500"
        )
        .AllowAnyMethod()
        .AllowAnyHeader()
        .AllowCredentials();
    });
});
```

---

## Part 3: Deploy Frontend to GitHub Pages

### Method 1: Using GitHub Web Interface (Easiest)

1. **Create GitHub Repository**
   - Go to https://github.com/new
   - Name: `treeso-natura`
   - Public repository
   - Click "Create repository"

2. **Upload Files**
   - Click "Upload files"
   - Drag and drop these files:
     ```
     index.html
     login.html
     signup.html
     shampoos.html
     soaps.html
     welcome.php
     style.css
     script.js (updated with production API URL)
     404.html
     images/ (folder)
     ```
   - **DO NOT upload Backend folder** (deploy separately)
   - Click "Commit changes"

3. **Enable GitHub Pages**
   - Go to repository "Settings"
   - Scroll to "Pages" section
   - Source: "Deploy from a branch"
   - Branch: `main` / `root`
   - Click "Save"

4. **Get Your Website URL**
   - Wait 2-3 minutes
   - Your site will be at: `https://yourusername.github.io/treeso-natura/`

### Method 2: Using Git Command Line

1. **Initialize Git**
   ```bash
   cd "c:\Users\tusha\Desktop\TREESO NATURA"
   git init
   ```

2. **Create .gitignore**
   ```bash
   echo "Backend/" > .gitignore
   echo "*.php" >> .gitignore
   echo ".DS_Store" >> .gitignore
   echo "Thumbs.db" >> .gitignore
   ```

3. **Commit and Push**
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/treeso-natura.git
   git push -u origin main
   ```

4. **Enable GitHub Pages** (same as Method 1, step 3)

---

## Part 4: Testing Your Deployment

### Test Backend API

1. Open your browser
2. Go to: `https://your-backend-url/swagger`
3. Test the registration endpoint:
   - Click "POST /api/auth/register"
   - Try it out with test data
   - Should return success with token

### Test Frontend

1. Open your GitHub Pages URL
2. Click "Sign Up"
3. Create a test account
4. Try logging in

### Troubleshooting

**"Unable to connect to server"**
- ✅ Check API URL in `script.js` is correct
- ✅ Verify backend is running (visit Swagger page)
- ✅ Check CORS settings in `Program.cs`
- ✅ Open browser console (F12) for detailed errors

**CORS errors**
- Update `Program.cs` with correct GitHub Pages URL
- Redeploy backend
- Clear browser cache

**404 Not Found on backend**
- Make sure API URL includes `/api` prefix
- Verify endpoints are `/api/auth/register` and `/api/auth/login`

---

## Important Security Notes

### Before Going Live:

1. **Change JWT Secret Key**
   - In `appsettings.json`, use a strong random key (32+ characters)
   - Never commit this to GitHub

2. **Use Environment Variables**
   - In production, use environment variables for secrets
   - Railway/Render/Azure all support this

3. **Enable HTTPS**
   - All free hosting options provide HTTPS automatically
   - Always use `https://` URLs in production

4. **Backup Database**
   - SQLite database is stored on the server
   - Download backups regularly (use SFTP/SSH)
   - Consider upgrading to PostgreSQL for production

---

## File Checklist for GitHub Pages

✅ Files to upload:
- index.html
- login.html
- signup.html
- shampoos.html
- soaps.html
- style.css
- script.js (with updated API_URL)
- 404.html
- images/ folder

❌ Files NOT to upload:
- Backend/ folder (deploy separately)
- *.php files (not needed with C# backend)
- config.php
- JWT.php
- init_db.php
- *.accdb files
- start_server.bat

---

## Cost Summary (100% FREE Options)

| Service | Free Tier | Limitations |
|---------|-----------|-------------|
| GitHub Pages | Unlimited | 1GB storage, 100GB bandwidth/month |
| Railway.app | $5/month credit | ~500 hours/month runtime |
| Render.com | Free tier | Auto-sleep after 15min inactivity |
| Azure App Service | F1 SKU | 60 min/day compute time |

**Recommendation**: Start with Railway.app for best free tier experience.

---

## Next Steps

1. ✅ Deploy backend to Railway/Render/Azure
2. ✅ Update `script.js` with production API URL
3. ✅ Update CORS in `Program.cs`
4. ✅ Deploy frontend to GitHub Pages
5. ✅ Test registration and login
6. ✅ Share your website! 🎉

Need help? Check the README files or open an issue on GitHub.
