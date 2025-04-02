import React, { useState, useEffect } from 'react';
import { fetchTopUsers } from '../utils/api';
import { getRandomImage } from '../utils/imageUtils';

interface User {
  id: number;
  name: string;
  postCount: number;
}

const TopUsers: React.FC = () => {
  const [topUsers, setTopUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchTopUsers()
      .then((data) => setTopUsers(data))
      .catch((error) => console.error('Error fetching top users:', error));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Top Users</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {topUsers.map((user) => (
          <div key={user.id} className="border p-4 rounded-md shadow-md">
            <img src={getRandomImage()} alt={user.name} className="w-20 h-20 rounded-full mb-2" />
            <p className="font-semibold">{user.name}</p>
            <p>Posts: {user.postCount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopUsers;