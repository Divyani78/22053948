import React, { useState, useEffect } from 'react';
import { fetchFeed } from '../utils/api';
import { getRandomImage } from '../utils/imageUtils';

interface FeedPost {
  id: number;
  title: string;
  content: string;
}

const Feed: React.FC = () => {
  const [feed, setFeed] = useState<FeedPost[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchFeed()
        .then((data) => setFeed(data))
        .catch((error) => console.error('Error fetching feed:', error));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Feed</h2>
      <div className="grid grid-cols-1 gap-4">
        {feed.map((post) => (
          <div key={post.id} className="border p-4 rounded-md shadow-md">
            <img src={getRandomImage()} alt="Post" className="w-full mb-2" />
            <p className="font-semibold">{post.title}</p>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;