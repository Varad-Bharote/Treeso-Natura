# 🚀 Quick Start Guide - TREESO NATURA

Get your secure authentication system running in 5 minutes!

## What's New? ✨

✅ **Secure C# Backend** with BCrypt password hashing
✅ **JWT Token Authentication** 
✅ **SQLite Database** - all user data saved permanently
✅ **No more localStorage** - proper server-side validation
✅ **Ready for GitHub Pages** deployment

---

## Step 1: Install .NET SDK (One-time setup)

1. Download .NET 8.0 SDK:
   - Windows: https://dotnet.microsoft.com/download/dotnet/8.0
   - Click "Download .NET 8.0 SDK (Windows x64)"
   - Run installer
   - Restart computer after installation

2. Verify installation:
   ```bash
   dotnet --version
   ```
   Should show: `8.0.x`

---

## Step 2: Start the Backend API

### Option A: Using Batch File (Easiest)
1. Navigate to: `c:\Users\tusha\Desktop\TREESO NATURA\Backend\`
2. Double-click: `run_backend.bat`
3. Wait for "Now listening on: http://localhost:5000"

### Option B: Using Command Line
```bash
cd "c:\Users\tusha\Desktop\TREESO NATURA\Backend\TreesoNaturaAPI"
dotnet restore
dotnet run
```

✅ Backend is ready when you see:
```
Now listening on: http://localhost:5000
```

---

## Step 3: Open Your Website

1. Open `index.html` in your browser
   - Or use Live Server in VS Code (right-click → "Open with Live Server")

2. Click "Sign Up" and create a test account

3. Try logging in with your credentials

---

## How to Test It's Working

### Test 1: Check Swagger API Documentation
1. Open browser to: http://localhost:5000/swagger
2. You should see the API documentation
3. Click "POST /api/auth/register" to test registration

### Test 2: Create Account
1. Open `signup.html` 
2. Fill in the form
3. Click "Create Account"
4. Check browser console (F12) - should show successful response

### Test 3: Check Database
1. Database file is created at: `Backend\TreesoNaturaAPI\treesonatura.db`
2. Download [DB Browser for SQLite](https://sqlitebrowser.org/)
3. Open the database file
4. Click "Browse Data" → Table: "Users"
5. See your user with **hashed password** (secure!)

---

## Troubleshooting

### "Unable to connect to server" error
**Solution**: Make sure the backend is running (Step 2)
- Should see "Now listening on: http://localhost:5000"

### Port 5000 already in use
**Solution**: Change port in `Properties/launchSettings.json`
```json
"applicationUrl": "http://localhost:5001"  // Change to 5001 or any free port
```
Then update `script.js`:
```javascript
const API_URL = 'http://localhost:5001/api';
```

### .NET SDK not found
**Solution**: Install .NET 8.0 SDK (Step 1)
- Restart terminal/command prompt after installation

### CORS errors in browser console
**Solution**: Check CORS settings in `Program.cs`
- Should include `http://localhost:5500` and `http://127.0.0.1:5500`

---

## Project Structure

```
TREESO NATURA/
│
├── Frontend (Static Files - for GitHub Pages)
│   ├── index.html
│   ├── login.html
│   ├── signup.html
│   ├── style.css
│   └── script.js (connects to backend API)
│
└── Backend/ (C# API - deploy separately)
    ├── run_backend.bat (double-click to start)
    ├── TreesoNaturaAPI/
    │   ├── Controllers/     (API endpoints)
    │   ├── Services/        (Business logic + password hashing)
    │   ├── Models/          (Data models)
    │   ├── Data/            (Database)
    │   ├── Program.cs       (Main app)
    │   └── treesonatura.db  (SQLite database - auto-created)
    └── README.md
```

---

## Security Features

### ✅ What's Secure Now:

1. **Password Hashing**
   - Passwords are hashed with BCrypt (work factor 12)
   - Impossible to reverse-engineer
   - Each password has unique salt

2. **JWT Tokens**
   - Secure token-based authentication
   - Tokens expire after 24 hours
   - Signed with secret key

3. **Database Security**
   - SQLite database stored on server
   - Unique constraints on username/email
   - Proper data validation

### ❌ What's NOT Secure (localhost only):

- HTTP instead of HTTPS (fine for local testing)
- Database has no password (fine for development)

**For production deployment**, see `DEPLOYMENT_GUIDE.md` - all hosting options provide HTTPS automatically!

---

## What Happens When You Sign Up?

1. Frontend (`script.js`) validates your input
2. Sends POST request to: `http://localhost:5000/api/auth/register`
3. Backend (`AuthController`) receives request
4. Password is hashed with BCrypt
5. User saved to SQLite database (`treesonatura.db`)
6. JWT token generated and returned
7. Token saved in browser localStorage
8. You're logged in! 🎉

---

## What Happens When You Log In?

1. Frontend sends credentials to: `http://localhost:5000/api/auth/login`
2. Backend finds user in database
3. Verifies password hash with BCrypt
4. If valid, generates JWT token
5. Token saved in browser
6. Welcome back! 🌿

---

## Development Tips

### View Logs
Backend console shows all requests:
```
info: Microsoft.AspNetCore.Hosting.Diagnostics[1]
      Request starting HTTP/1.1 POST http://localhost:5000/api/auth/register
```

### Test API with Swagger
1. Go to: http://localhost:5000/swagger
2. Click "POST /api/auth/register"
3. Click "Try it out"
4. Enter test data:
```json
{
  "username": "testuser",
  "email": "test@example.com",
  "password": "password123"
}
```
5. Click "Execute"
6. See response with token!

### Clear All Data
Delete the database file:
```
Backend\TreesoNaturaAPI\treesonatura.db
```
Restart backend - fresh database created automatically

---

## Next Steps

1. ✅ Test locally (follow steps above)
2. ✅ Deploy backend to Railway/Render (FREE)
3. ✅ Deploy frontend to GitHub Pages (FREE)
4. ✅ Update API URL in `script.js` to production URL
5. ✅ Share your website with the world! 🌍

See `DEPLOYMENT_GUIDE.md` for detailed deployment instructions.

---

## Need Help?

- Backend API not starting? → Check .NET SDK installation
- Frontend not connecting? → Check backend is running on http://localhost:5000
- Password not saving? → Check database file exists in `Backend\TreesoNaturaAPI\`
- CORS errors? → Check `Program.cs` CORS configuration

**Still stuck?** Check the console logs:
- Backend: Terminal where `dotnet run` is running
- Frontend: Browser console (F12 → Console tab)
