# 🌿 TREESO NATURA - Herbal Skincare E-Commerce Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![.NET](https://img.shields.io/badge/.NET-8.0-512BD4)](https://dotnet.microsoft.com/)
[![Backend](https://img.shields.io/badge/Backend-C%23%20ASP.NET%20Core-blueviolet)](https://dotnet.microsoft.com/apps/aspnet)
[![Frontend](https://img.shields.io/badge/Frontend-HTML%2FCSS%2FJS-orange)](https://developer.mozilla.org/)
[![Database](https://img.shields.io/badge/Database-SQLite-003B57)](https://www.sqlite.org/)

A complete website for TREESO NATURA, a startup by kids that blends nature, creativity, and clean living.

> **Now with secure C# backend, BCrypt password hashing, and JWT authentication!**

## 🎯 What's New

✅ **Secure C# ASP.NET Core backend** - No more localStorage authentication!
✅ **BCrypt password hashing** - Passwords never stored in plain text
✅ **JWT token authentication** - Industry-standard security
✅ **SQLite database** - Persistent user data storage
✅ **RESTful API** - Complete with Swagger documentation
✅ **100% FREE deployment** - GitHub Pages + free backend hosting

---

## 🚀 Quick Start (5 Minutes)

### Prerequisites
- [.NET 8.0 SDK](https://dotnet.microsoft.com/download/dotnet/8.0) (FREE)
- Any web browser

### Step 1: Start the Backend
```bash
cd "Backend/TreesoNaturaAPI"
dotnet restore
dotnet run
```

**OR** just double-click: `Backend/run_backend.bat`

Wait for: `Now listening on: http://localhost:5000` ✅

### Step 2: Open the Website
Open `index.html` in your browser, or use Live Server in VS Code.

### Step 3: Test It!
1. Click "Sign Up" and create an account
2. Login with your credentials
3. Check the database at: `Backend/TreesoNaturaAPI/treesonatura.db`

**Your password is now hashed with BCrypt!** 🔐

**For detailed instructions:** See [QUICK_START.md](QUICK_START.md)

---

## 🔐 Security Features (NEW!)

### Before vs After

| Feature | Before (Old) | After (New) |
|---------|--------------|-------------|
| Password Storage | Plain text in localStorage | BCrypt hashed in SQLite |
| Authentication | Client-side only | Server-side with JWT |
| Data Persistence | Browser only | Server database |
| Security Level | ❌ Insecure | ✅ Industry-standard |

### How Passwords Are Protected
```
Input:  password123
Output: $2a$12$N9qo8uLOickgx2ZMRZoMye.6qPkZ8qV9VKNtJMdD2GqJ9PGNj6qX.
        ╰─────────────────────────────────────────────────────────╯
          BCrypt hash - computationally impossible to crack!
```

---

## 📚 Documentation

- **[QUICK_START.md](QUICK_START.md)** - Get started in 5 minutes
- **[DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)** - Deploy to GitHub Pages + free backend hosting
- **[IMPLEMENTATION_SUMMARY.md](IMPLEMENTATION_SUMMARY.md)** - Complete technical overview
- **[Backend/README.md](Backend/README.md)** - Backend API documentation
- **[test_backend.html](test_backend.html)** - Visual API testing tool

---

## ✨ Features

### Frontend
- Responsive design for all devices
- User authentication (sign up and login)
- Product pages for soaps and shampoos
- Skincare assistant recommendation tool
- Nature-themed UI with herbal product information

### Backend (NEW!)
- 🔒 Secure C# ASP.NET Core Web API
- 🔑 BCrypt password hashing (work factor 12)
- 🎫 JWT token-based authentication
- 🗄️ SQLite database for persistent storage
- 📊 Swagger/OpenAPI documentation
- 🌐 CORS configured for GitHub Pages

---

## 📁 Project Structure

```
TREESO NATURA/
│
├── 🌐 Frontend (Deploy to GitHub Pages)
│   ├── index.html              # Homepage
│   ├── login.html              # Login page (connects to C# API)
│   ├── signup.html             # Registration page (connects to C# API)
│   ├── shampoos.html           # Product catalog
│   ├── soaps.html              # Product catalog
│   ├── style.css               # Styling
│   ├── script.js               # Frontend logic + API calls
│   └── 404.html                # Custom error page
│
├── 🔧 Backend (Deploy separately - FREE options available)
│   ├── TreesoNaturaAPI/
│   │   ├── Controllers/        # API endpoints (Register, Login, Verify)
│   │   ├── Services/           # BCrypt hashing + JWT generation
│   │   ├── Models/             # User model + DTOs
│   │   ├── Data/               # Database context
│   │   ├── Program.cs          # App configuration
│   │   ├── appsettings.json    # Configuration (JWT secret, etc.)
│   │   ├── Dockerfile          # Container deployment
│   │   └── treesonatura.db     # SQLite database (auto-created)
│   ├── run_backend.bat         # Easy startup script (Windows)
│   └── README.md               # Backend documentation
│
├── 📚 Documentation
│   ├── QUICK_START.md          # 5-minute setup guide
│   ├── DEPLOYMENT_GUIDE.md     # Production deployment
│   └── IMPLEMENTATION_SUMMARY.md # Technical deep dive
│
├── test_backend.html           # Visual API testing tool
└── README.md                   # This file
```

---

## 🌐 API Endpoints

### Base URL: `http://localhost:5000/api`

#### 1️⃣ Register User
```http
POST /api/auth/register

{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "securepass123"
}
```

#### 2️⃣ Login
```http
POST /api/auth/login

{
  "username": "johndoe",
  "password": "securepass123"
}
```

#### 3️⃣ Verify Token
```http
GET /api/auth/verify
Authorization: Bearer {token}
```

**Interactive API Docs:** http://localhost:5000/swagger

---

## 🚀 Deployment Options

### Frontend → GitHub Pages (100% FREE)

This website is fully compatible with GitHub Pages:

1. Create a new repository on GitHub
2. Push all frontend files (HTML, CSS, JS, images)
3. Go to repository Settings → Pages
4. Select "Deploy from a branch" → "main" → "/ (root)"
5. Click "Save"
6. Your site: `https://[username].github.io/[repository-name]/`

### Backend → Free Hosting Options

| Platform | Setup Time | Free Tier | Recommendation |
|----------|------------|-----------|----------------|
| **Railway.app** ⭐ | 5 min | $5/month credit | Best overall |
| **Render.com** | 10 min | 750 hours/month | Very reliable |
| **Azure App Service** | 15 min | 60 min/day | Microsoft stack |
| **Fly.io** | 10 min | 3 VMs free | Global deployment |

**See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) for step-by-step instructions.**

---

## 🐛 Troubleshooting

### Backend Not Starting
```bash
# Check if .NET is installed
dotnet --version
# Should show: 8.0.x
# If not: https://dotnet.microsoft.com/download/dotnet/8.0
```

### "Unable to connect to server" Error
1. Make sure backend is running: `dotnet run`
2. Check terminal shows: "Now listening on: http://localhost:5000"
3. Verify API_URL in `script.js` is correct

### CORS Errors
1. Check `Program.cs` CORS configuration
2. Ensure your frontend URL is whitelisted
3. Clear browser cache and try again

### Database Issues
1. Delete `Backend/TreesoNaturaAPI/treesonatura.db`
2. Restart backend - database will be recreated

---

## 📊 Technology Stack

### Backend
- **Runtime:** .NET 8.0
- **Framework:** ASP.NET Core Web API
- **Database:** SQLite with Entity Framework Core
- **Auth:** JWT (JSON Web Tokens)
- **Password:** BCrypt.Net-Next
- **Docs:** Swagger/OpenAPI

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern responsive design
- **JavaScript (ES6+)** - Async/await, Fetch API
- **No dependencies** - Pure vanilla JS

---

## 🎓 Learning Resources

- [.NET Documentation](https://docs.microsoft.com/dotnet/)
- [ASP.NET Core Tutorial](https://docs.microsoft.com/aspnet/core/)
- [BCrypt Explained](https://en.wikipedia.org/wiki/Bcrypt)
- [JWT Introduction](https://jwt.io/introduction)
- [GitHub Pages Guide](https://pages.github.com/)

---

## 🛠️ Local Development

### Backend Development
```bash
cd Backend/TreesoNaturaAPI

# Restore dependencies
dotnet restore

# Run in development mode (with hot reload)
dotnet watch run

# Build for production
dotnet publish -c Release -o ./publish
```

### Frontend Development
Open `index.html` in a browser, or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server

# Using VS Code Live Server extension (recommended)
# Right-click index.html → "Open with Live Server"
```

### Testing the API
1. **Swagger UI:** http://localhost:5000/swagger
2. **Test Page:** Open `test_backend.html` in browser
3. **curl:**
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"test","email":"test@example.com","password":"pass123"}'
```

---

## 🔧 Configuration

### Update API URL for Production
Edit `script.js`:
```javascript
// Local development
const API_URL = 'http://localhost:5000/api';

// Production (after deploying backend)
// const API_URL = 'https://your-app.railway.app/api';
```

### Update CORS for Production
Edit `Backend/TreesoNaturaAPI/Program.cs`:
```csharp
policy.WithOrigins(
    "https://yourusername.github.io",  // Your GitHub Pages URL
    "http://localhost:5500"             // Keep for local testing
)
```

### Change JWT Secret (IMPORTANT!)
Edit `Backend/TreesoNaturaAPI/appsettings.json`:
```json
{
  "JwtSettings": {
    "SecretKey": "Your-Super-Secret-Key-Min-32-Characters!"
  }
}
```

---

## 📝 Notes

- ✅ **Secure authentication** - BCrypt + JWT tokens
- ✅ **Persistent storage** - SQLite database on server
- ✅ **Production ready** - HTTPS via free hosting platforms
- ✅ **No localStorage for passwords** - Secure server-side storage
- ✅ **RESTful API** - Standard HTTP methods
- ✅ **Fully responsive** - Works on all devices
- ✅ **Free deployment** - 100% free hosting options

---

## ⭐ Show Your Support

If this project helped you learn about secure authentication, please give it a star! ⭐

---

## 📞 Support

Need help? Check these resources:
1. [QUICK_START.md](QUICK_START.md) - Setup guide
2. [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) - Deployment instructions
3. [test_backend.html](test_backend.html) - API testing tool
4. http://localhost:5000/swagger - Interactive API docs

---

## 📝 License

MIT License - Feel free to use this for learning or commercial purposes.

---

**Ready to start?** → See [QUICK_START.md](QUICK_START.md)

**Deploy to production?** → See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)

**Technical details?** → See [IMPLEMENTATION_SUMMARY.md](IMPLEMENTATION_SUMMARY.md)