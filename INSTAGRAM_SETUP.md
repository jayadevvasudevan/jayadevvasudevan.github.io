# 📸 Instagram API Integration Setup Guide (Updated 2025)

## 🎯 **Quick Overview**
Your portfolio now automatically fetches your latest Instagram posts! No more manual updates needed.

⚠️ **Important**: Instagram Basic Display API has been **replaced** with the new **Instagram API with Instagram Login**. This guide has been updated for the current API.

## 🔧 **Setup Instructions**

### **Step 1: Create Instagram App**

1. **Go to Facebook Developers**:
   - Visit: https://developers.facebook.com/
   - Click "My Apps" → "Create App"

2. **Choose App Type**:
   - Select "Business" (required for Instagram API)
   - App name: "Your Portfolio Instagram Feed"
   - Contact email: your email

3. **Add Instagram API with Instagram Login**:
   - In your app dashboard, click "Add Product"
   - Find "Instagram API with Instagram Login" → "Set Up"

### **Step 2: Configure Instagram API**

1. **Configure Business Login for Instagram**:
   - Go to "Instagram" → "API setup with Instagram login"
   - Add your redirect URI: `https://yourdomain.com/`
   - Add deauthorize callback: `https://yourdomain.com/`
   - Add data deletion request URL: `https://yourdomain.com/`

2. **Get Instagram App Credentials**:
   - Note your **Instagram App ID** (different from Facebook App ID)
   - Note your **Instagram App Secret**

3. **Instagram Professional Account Required**:
   - Your Instagram account must be a **Business** or **Creator** account
   - Personal accounts won't work with this API

### **Step 3: Generate Access Token**

1. **Authorization URL** (replace YOUR_INSTAGRAM_APP_ID):
   ```
   https://api.instagram.com/oauth/authorize
     ?client_id=YOUR_INSTAGRAM_APP_ID
     &redirect_uri=https://yourdomain.com/
     &scope=instagram_business_basic,instagram_business_content_publish
     &response_type=code
   ```

2. **Visit the URL** → Login with Instagram → Copy the code from redirect

3. **Exchange Code for Token** (use terminal/Postman):
   ```bash
   curl -X POST https://api.instagram.com/oauth/access_token \
     -F client_id=YOUR_INSTAGRAM_APP_ID \
     -F client_secret=YOUR_INSTAGRAM_APP_SECRET \
     -F grant_type=authorization_code \
     -F redirect_uri=https://yourdomain.com/ \
     -F code=AUTHORIZATION_CODE_FROM_STEP_2
   ```

4. **Get Long-Lived Token** (60 days):
   ```bash
   curl -i -X GET "https://graph.instagram.com/access_token
     ?grant_type=ig_exchange_token
     &client_secret=YOUR_INSTAGRAM_APP_SECRET
     &access_token=SHORT_LIVED_TOKEN"
   ```

### **Step 4: Configure Your Portfolio**

1. **Update `.env` file**:
   ```env
   VITE_INSTAGRAM_ACCESS_TOKEN=your_long_lived_token_here
   VITE_INSTAGRAM_USER_ID=your_instagram_user_id_here
   ```

2. **Get Your Instagram User ID**:
   ```bash
   curl -i -X GET "https://graph.instagram.com/me?fields=id,username&access_token=YOUR_ACCESS_TOKEN"
   ```

3. **Restart Development Server**:
   ```bash
   npm run dev
   ```

### **Step 5: Deploy with Environment Variables**

#### **For GitHub Pages (using GitHub Secrets)**:

1. **Go to Repository Settings**:
   - GitHub repo → Settings → Secrets and variables → Actions

2. **Add Repository Secrets**:
   - `VITE_INSTAGRAM_ACCESS_TOKEN`: Your Instagram token
   - `VITE_INSTAGRAM_USER_ID`: Your Instagram user ID

3. **Update GitHub Actions** (`.github/workflows/deploy.yml`):
   ```yaml
   - name: Build
     run: npm run build
     env:
       VITE_INSTAGRAM_ACCESS_TOKEN: ${{ secrets.VITE_INSTAGRAM_ACCESS_TOKEN }}
       VITE_INSTAGRAM_USER_ID: ${{ secrets.VITE_INSTAGRAM_USER_ID }}
   ```

#### **For Vercel/Netlify**:
- Add environment variables in your hosting platform's dashboard

## 🚀 **Features Now Available**

### **✅ Automatic Updates**:
- Fetches latest 12 Instagram posts
- Updates every 30 minutes automatically
- Manual refresh button available

### **✅ Real Instagram Data**:
- Actual post captions
- Real timestamps  
- Media URLs and permalinks
- Direct links to Instagram posts

### **✅ Fallback System**:
- Shows demo content if API fails
- Error messages for debugging
- Graceful degradation

## 🔄 **Token Management**

### **Token Refresh** (every 60 days):
Your tokens expire every 60 days. You'll need to regenerate them periodically.

### **Monitor Token Status**:
```javascript
// Check token validity in browser console
fetch(`https://graph.instagram.com/me?fields=id&access_token=YOUR_TOKEN`)
  .then(r => r.json())
  .then(console.log);
```

### **Auto Token Refresh** (if implemented):
The new API supports programmatic token refresh for long-lived tokens.

## 🔒 **Important Requirements & Changes**

### **🚨 Major Changes from Basic Display API**:

1. **Business/Creator Account Required**:
   - Your Instagram must be a Business or Creator account
   - Personal accounts no longer supported

2. **New API Endpoints**:
   - Base URL: `https://graph.instagram.com/`
   - Different permission scopes required

3. **Advanced Access Needed for Production**:
   - Standard Access: Only works for accounts you own/manage
   - Advanced Access: Required for public use (needs App Review)

4. **New Permission Scopes**:
   - `instagram_business_basic` (replaces old scopes)
   - `instagram_business_content_publish`

### **🎯 Standard vs Advanced Access**:

**Standard Access** (Good for personal portfolios):
- Works for your own Instagram accounts
- No app review required
- Limited to accounts you manage

**Advanced Access** (For client work):
- Works for any Instagram Business/Creator account
- Requires Meta App Review process
- Business verification needed

## 🎨 **Customization Options**

### **Change Number of Posts**:
In `HobbiesSection.tsx`, modify the API call:
```typescript
`https://graph.instagram.com/me/media?fields=...&limit=12` // Change 12 to desired number
```

### **Filter Post Types**:
```typescript
const filteredPosts = data.data.filter((post: any) => 
  post.media_type === 'IMAGE' // Only show images
  // Remove this line to show videos too
);
```

### **Auto-refresh Interval**:
```typescript
// Change 30 minutes to your preferred interval
const interval = setInterval(() => {
  fetchInstagramPosts(true);
}, 30 * 60 * 1000); // 30 minutes in milliseconds
```

## 🔒 **Security Best Practices**

1. **Never commit `.env` file** (already in .gitignore)
2. **Use repository secrets** for deployment
3. **Regenerate tokens** if compromised
4. **Monitor API usage** in Facebook Developers dashboard
5. **Convert to Business/Creator account** if using personal account

## 🐛 **Troubleshooting**

### **Common Issues**:

1. **"Access token is invalid"**:
   - Token expired → Generate new one
   - Wrong token → Double-check .env file
   - Using old Basic Display API token → Get new token with new API

2. **"Instagram professional account required"**:
   - Convert your Instagram to Business or Creator account
   - Personal accounts no longer supported

3. **"Insufficient permissions"**:
   - Make sure you have `instagram_business_basic` scope
   - Check if using correct Instagram App ID (not Facebook App ID)

4. **CORS errors**:
   - New API endpoints should work from any domain
   - Verify you're using `graph.instagram.com` not `graph.facebook.com`

5. **Rate limiting**:
   - New API has different rate limits
   - Business Use Case rate limiting applies

### **Debug Mode**:
Check browser console for detailed error messages and API responses.

## 📱 **Meta App Review Process** (For Advanced Access)

If you want to use this for client work or public portfolios:

1. **Business Verification Required**:
   - Submit business documents
   - Verify your business identity

2. **App Review Process**:
   - Submit app for `instagram_business_basic` permission
   - Provide app demonstration video
   - Explain use case clearly

3. **Timeline**:
   - Business verification: 2-5 business days
   - App review: 7-14 days

## ✅ **Verification**

Test your setup:

1. **Development**: http://localhost:8081/ → Check Hobbies section
2. **Console Logs**: Should see "✅ Loaded X Instagram posts"
3. **API Response**: Should include Business account data
4. **Real Data**: Posts should match your Instagram Business profile

## 🆘 **Need Help?**

- **New Instagram API Docs**: https://developers.facebook.com/docs/instagram-platform/instagram-api-with-instagram-login
- **Migration Guide**: https://developers.facebook.com/docs/instagram-platform/changelog
- **Business Account Setup**: https://business.instagram.com/getting-started
- **Facebook Developers Support**: https://developers.facebook.com/support/

## 🔄 **Migration from Basic Display API**

If you previously used Basic Display API:

1. **Create new Instagram API app** (different product)
2. **Convert Instagram to Business/Creator account**
3. **Update authorization URLs and scopes**
4. **Generate new access tokens**
5. **Update API endpoints** in your code

Your Instagram feed will now update automatically with the modern API! 🎉