# Instagram API Setup Guide

## Prerequisites
- Instagram Business or Creator Account
- Facebook Developer Account
- Facebook App with Instagram Basic Display or Instagram API permissions

## Step 1: Create Facebook App

1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Click "Create App" → "Business" → "Instagram API"
3. Fill in app details:
   - App Name: "YourName Portfolio"
   - App Purpose: "Build connected experiences"

## Step 2: Configure Instagram API

### For Instagram API with Instagram Login:
1. Add "Instagram API with Instagram Login" product
2. Configure OAuth redirect URIs
3. Add required permissions:
   - `instagram_business_basic`
   - `instagram_business_content_publish`
   - `instagram_business_manage_messages`

### For Instagram API with Facebook Login:
1. Add "Instagram API with Facebook Login" product
2. Connect your Instagram account to a Facebook Page
3. Add required permissions:
   - `instagram_basic`
   - `pages_show_list`
   - `pages_read_engagement`

## Step 3: Environment Setup

Create `.env.local` file:
```env
# Instagram API Configuration
INSTAGRAM_APP_ID=your_app_id
INSTAGRAM_APP_SECRET=your_app_secret
INSTAGRAM_ACCESS_TOKEN=your_access_token
INSTAGRAM_USER_ID=your_instagram_user_id

# API URLs
INSTAGRAM_API_BASE_URL=https://graph.instagram.com
FACEBOOK_API_BASE_URL=https://graph.facebook.com
```

## Step 4: Authentication Flow

### Option A: Instagram Login (Simpler)
```javascript
// 1. Redirect user to Instagram authorization
const authUrl = `https://api.instagram.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=user_profile,user_media&response_type=code`;

// 2. Exchange code for access token
const tokenResponse = await fetch('https://api.instagram.com/oauth/access_token', {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: new URLSearchParams({
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    grant_type: 'authorization_code',
    redirect_uri: REDIRECT_URI,
    code: code
  })
});
```

### Option B: Facebook Login (More Features)
```javascript
// 1. Facebook OAuth flow
const authUrl = `https://www.facebook.com/v18.0/dialog/oauth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=instagram_basic,pages_show_list&response_type=code`;

// 2. Get long-lived page access token
// 3. Get Instagram Business Account ID
// 4. Use Instagram API endpoints
```

## Step 5: API Endpoints

### Get User Media (Recent Posts)
```
GET https://graph.instagram.com/v18.0/{user-id}/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token={access-token}
```

### Get Media Details
```
GET https://graph.instagram.com/v18.0/{media-id}?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,like_count,comments_count&access_token={access-token}
```

## Step 6: Implementation Notes

### Rate Limits
- 200 calls per hour per user
- Use caching to minimize API calls

### Media Types
- IMAGE: Single photo
- VIDEO: Single video  
- CAROUSEL_ALBUM: Multiple photos/videos

### Webhooks (Optional)
- Real-time updates when new posts are published
- Requires HTTPS endpoint and verification

## Security Best Practices
1. Store access tokens securely (server-side)
2. Use environment variables for sensitive data
3. Implement token refresh logic
4. Rate limit your requests
5. Cache responses appropriately

## App Review Requirements (Production)
- Privacy Policy URL
- Terms of Service URL
- App icon and description
- Use case explanation
- Video demonstration

## Testing
- Use Instagram Test Users for development
- Test all API endpoints thoroughly
- Verify webhook functionality (if using)

## Common Issues
1. **Access token expiration**: Implement refresh logic
2. **Rate limiting**: Implement exponential backoff
3. **Permissions**: Ensure all required scopes are approved
4. **Account type**: Must be Business/Creator account

## Alternative: Simple Approach
If Instagram API seems complex, consider:
1. Manual content updates via CMS
2. RSS feeds from Instagram (third-party)
3. Static embedding with periodic manual updates