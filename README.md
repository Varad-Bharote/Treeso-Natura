# TREESO NATURA - Herbal Care Website

A complete website for TREESO NATURA, a startup by kids that blends nature, creativity, and clean living.

## Features

- Responsive design
- User authentication (sign up and login)
- Product pages for soaps and shampoos
- Skincare assistant recommendation tool
- Nature-themed UI with herbal product information

## GitHub Pages Deployment

This website is fully compatible with GitHub Pages and uses only client-side technologies:

- HTML5
- CSS3
- JavaScript (ES6)
- LocalStorage for data persistence

### Deployment Steps

1. Create a new repository on GitHub
2. Push all files to the repository
3. Go to repository Settings
4. Scroll down to "Pages" section
5. Under "Source", select "Deploy from a branch"
6. Choose "main" branch and "/ (root)" folder
7. Click "Save"
8. Your site will be available at `https://[username].github.io/[repository-name]/`

### How Authentication Works

Since GitHub Pages doesn't support server-side code, authentication is handled entirely client-side using LocalStorage:

- User data is stored in the browser's LocalStorage
- No server-side processing is required
- All functionality works directly in the browser

### File Structure

- `index.html` - Main homepage
- `signup.html` - User registration page
- `login.html` - User login page
- `soaps.html` - Herbal soaps product page
- `shampoos.html` - Herbal shampoos product page
- `404.html` - Custom 404 error page
- `style.css` - All styling
- `script.js` - Client-side functionality
- `images/` - Logo and favicon files

## Local Development

To run locally, simply open `index.html` in a web browser, or use any local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

## Notes

- All paths are relative, making the site portable
- No server-side dependencies
- Works on all modern browsers
- Fully responsive design