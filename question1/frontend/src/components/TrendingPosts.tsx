import React, { useState, useEffect } from 'react';
import { fetchTrendingPosts } from '../utils/api';
import { getRandomImage } from '../utils/imageUtils';

interface Post {
  id: number;
  title: string;
  comments: number;
}

const TrendingPosts: React.FC = () => {
  const [trendingPosts, setTrendingPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchTrendingPosts()
      .then((data) => setTrendingPosts(data))
      .catch((error) => console.error('Error fetching trending posts:', error));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Trending Posts</h2>
      <div className="grid grid-cols-1 gap-4">
        {trendingPosts.map((post) => (
          <div key={post.id} className="border p-4 rounded-md shadow-md">
            <img src={getRandomImage()} alt="Post" className="w-full mb-2" />
            <p className="font-semibold">{post.title}</p>
            <p>Comments: {post.comments}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingPosts;