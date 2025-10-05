import React, { useState, useEffect } from 'react';

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

interface APIResponse {
  success: boolean;
  posts: InstagramPost[];
  count: number;
  timestamp: string;
  error?: string;
}

const InstagramAPISection: React.FC = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);

  const fetchInstagramPosts = async () => {
    try {
      setLoading(true);
      
      // Use your API route instead of direct Instagram API
      const response = await fetch('/api/instagram-posts');
      
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data: APIResponse = await response.json();
      
      if (data.success) {
        setPosts(data.posts || []);
        setLastUpdated(data.timestamp);
        setError(null);
      } else {
        throw new Error(data.error || 'Failed to load posts');
      }
    } catch (err) {
      console.error('Failed to fetch Instagram posts:', err);
      setError(err instanceof Error ? err.message : 'Failed to load Instagram posts');
    } finally {
      setLoading(false);
    }
  };

  const refreshPosts = () => {
    fetchInstagramPosts();
  };

  useEffect(() => {
    fetchInstagramPosts();
    
    // Auto-refresh every 30 minutes
    const interval = setInterval(fetchInstagramPosts, 30 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  const formatTimestamp = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getMediaElement = (post: InstagramPost) => {
    const mediaUrl = post.media_type === 'VIDEO' ? post.thumbnail_url || post.media_url : post.media_url;
    
    return (
      <div className="relative overflow-hidden rounded-lg aspect-square bg-gray-100">
        <img
          src={mediaUrl}
          alt={post.caption ? post.caption.substring(0, 100) + '...' : 'Instagram post'}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
        {post.media_type === 'VIDEO' && (
          <div className="absolute top-2 right-2 bg-black bg-opacity-50 rounded-full p-1">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8 5v10l8-5-8-5z"/>
            </svg>
          </div>
        )}
        {post.media_type === 'CAROUSEL_ALBUM' && (
          <div className="absolute top-2 right-2 bg-black bg-opacity-50 rounded-full p-1">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        )}
      </div>
    );
  };

  if (loading) {
    return (
      <section id="hobbies" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">My Photography</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Loading my latest Instagram posts...
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden animate-pulse">
                <div className="aspect-square bg-gray-300"></div>
                <div className="p-6">
                  <div className="h-4 bg-gray-300 rounded mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="hobbies" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">My Photography</h2>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
              <p className="text-red-700 mb-4">{error}</p>
              <button
                onClick={refreshPosts}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="hobbies" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">My Photography</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real-time updates from my Instagram photography adventures.
          </p>
          <div className="mt-4 flex items-center justify-center space-x-4">
            <button
              onClick={refreshPosts}
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              🔄 Refresh Posts
            </button>
            {lastUpdated && (
              <span className="text-sm text-gray-500">
                Last updated: {formatTimestamp(lastUpdated)}
              </span>
            )}
          </div>
        </div>

        {posts.length === 0 ? (
          <div className="text-center">
            <p className="text-gray-600">No posts found. Please check your Instagram API configuration.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {posts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <a
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {getMediaElement(post)}
                </a>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-500">
                      {formatTimestamp(post.timestamp)}
                    </span>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      {post.like_count !== undefined && (
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
                          </svg>
                          {post.like_count}
                        </span>
                      )}
                      {post.comments_count !== undefined && (
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"/>
                          </svg>
                          {post.comments_count}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {post.caption && (
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {post.caption.length > 150 
                        ? `${post.caption.substring(0, 150)}...` 
                        : post.caption
                      }
                    </p>
                  )}
                  
                  <a
                    href={post.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
                  >
                    View on Instagram →
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <p className="text-gray-600">
            Follow me on Instagram{' '}
            <a 
              href="https://www.instagram.com/caeliflora/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-semibold"
            >
              @caeliflora
            </a>
            {' '}for more photography updates!
          </p>
        </div>
      </div>
    </section>
  );
};

export default InstagramAPISection;