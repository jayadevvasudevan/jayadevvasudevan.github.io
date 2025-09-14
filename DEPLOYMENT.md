# 🚀 GitHub Pages Deployment Guide

## 📋 Pre-Deployment Checklist

- ✅ **Vite Config**: Base path set to `/` for user GitHub Pages site
- ✅ **GitHub Actions**: Workflow configured for automatic deployment
- ✅ **SPA Routing**: 404.html and redirect scripts added for client-side routing
- ✅ **Build Process**: Production build tested and working
- ✅ **Assets**: All images and static files in public folder

## 🔧 Configuration Changes Made

### 1. **Vite Configuration** (`vite.config.ts`)
```typescript
export default defineConfig(({ mode }) => ({
  base: '/', // Changed from '/portfolio/' to '/' for GitHub Pages user site
  // ... rest of config
}));
```

### 2. **GitHub Pages SPA Support**
- **`public/404.html`**: Handles client-side routing redirects
- **`index.html`**: Includes SPA redirect script for route handling

### 3. **Meta Tags** (`index.html`)
- Fixed OG image path from `/portfolio/og-image-update.png` to `/og-image-update.png`
- Added proper meta descriptions for SEO

## 🚀 Deployment Methods

### **Method 1: Automatic Deployment (Recommended)**

The site will automatically deploy when you push to the `main` branch:

```bash
# Make your changes
git add .
git commit -m "feat: update portfolio content"
git push origin main

# GitHub Actions will automatically:
# 1. Build the project
# 2. Deploy to GitHub Pages
# 3. Your site will be live at https://jayadevvasudevan.github.io
```

### **Method 2: Manual Deployment**

If you need to deploy manually:

```bash
# Build and deploy using gh-pages
npm run deploy

# This will:
# 1. Run npm run build
# 2. Deploy dist folder to gh-pages branch
```

## 🌐 GitHub Pages Settings

Make sure your GitHub repository settings are configured correctly:

1. **Go to**: `Repository Settings` → `Pages`
2. **Source**: Deploy from a branch
3. **Branch**: `gh-pages` (if using manual deploy) or `GitHub Actions` (recommended)
4. **Folder**: `/ (root)` or use GitHub Actions

## 📁 File Structure for Deployment

```
jayadevvasudevan.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── public/
│   ├── 404.html               # SPA routing support
│   ├── og-image-update.png    # Social media preview
│   └── ...                    # Other static assets
├── src/                       # React source code
├── dist/                      # Build output (auto-generated)
├── vite.config.ts             # Vite configuration
├── package.json               # Dependencies and scripts
└── index.html                 # Main HTML template
```

## 🔍 Troubleshooting

### **Common Issues:**

1. **404 Errors on Refresh**
   - ✅ Fixed: `404.html` and SPA redirect scripts added

2. **Wrong Base Path**
   - ✅ Fixed: Vite config updated to use `/` instead of `/portfolio/`

3. **Missing Assets**
   - ✅ Fixed: Asset paths corrected in meta tags

4. **Routing Issues**
   - ✅ Fixed: Client-side routing support added

### **If Deployment Fails:**

1. **Check GitHub Actions Log**:
   - Go to `Actions` tab in your repository
   - Click on the failed workflow
   - Check the error messages

2. **Local Build Test**:
   ```bash
   npm run build
   npm run preview
   ```

3. **Check Build Output**:
   ```bash
   # Verify dist folder contents
   ls -la dist/
   ```

## ✅ Verification

After deployment, verify your site:

1. **Main Site**: https://jayadevvasudevan.github.io
2. **Check Routes**: Navigate between sections
3. **Mobile Responsive**: Test on different devices
4. **Social Preview**: Check OG image on social platforms

## 🔄 Update Workflow

For future updates:

```bash
# 1. Make changes to your code
# 2. Test locally
npm run dev

# 3. Build and test production version
npm run build
npm run preview

# 4. Commit and push (triggers auto-deployment)
git add .
git commit -m "feat: your update description"
git push origin main

# 5. Check deployment status at:
# https://github.com/jayadevvasudevan/jayadevvasudevan.github.io/actions
```

## 🎯 Next Steps

1. **Domain**: Consider adding a custom domain (optional)
2. **Analytics**: Add Google Analytics or similar (optional)
3. **Performance**: Monitor Core Web Vitals
4. **SEO**: Submit sitemap to search engines

Your portfolio is now ready for GitHub Pages deployment! 🎉