// Instagram API Server Route (for Vercel/Netlify Functions)
// This keeps your access token secure on the server side

import { VercelRequest, VercelResponse } from '@vercel/node';

interface InstagramPost {
  id: string;
  caption: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
  like_count?: number;
  comments_count?: number;
}

interface InstagramAPIResponse {
  data: InstagramPost[];
  paging?: {
    next?: string;
    previous?: string;
  };
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  try {
    const ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;
    const USER_ID = process.env.INSTAGRAM_USER_ID;

    if (!ACCESS_TOKEN || !USER_ID) {
      return res.status(500).json({ 
        error: 'Instagram API configuration missing' 
      });
    }

    const fields = [
      'id',
      'caption',
      'media_type',
      'media_url',
      'thumbnail_url',
      'permalink',
      'timestamp',
      'like_count',
      'comments_count'
    ].join(',');

    const limit = req.query.limit || '4';
    const url = `https://graph.instagram.com/v18.0/${USER_ID}/media?fields=${fields}&limit=${limit}&access_token=${ACCESS_TOKEN}`;

    const response = await fetch(url);
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Instagram API Error:', errorData);
      
      return res.status(response.status).json({
        error: 'Failed to fetch Instagram posts',
        details: errorData
      });
    }

    const data: InstagramAPIResponse = await response.json();

    // Cache the response for 30 minutes
    res.setHeader('Cache-Control', 's-maxage=1800, stale-while-revalidate');

    return res.status(200).json({
      success: true,
      posts: data.data,
      count: data.data.length,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Server error:', error);
    
    return res.status(500).json({
      error: 'Internal server error',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}