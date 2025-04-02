import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TopUsers from './components/TopUsers';
import TrendingPosts from './components/TrendingPosts';
import Feed from './components/Feed';

function App() {
  return (
    <Router>
      <div className="container mx-auto">
        <nav className="p-4">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-blue-500">
                Top Users
              </Link>
            </li>
            <li>
              <Link to="/trending" className="text-blue-500">
                Trending Posts
              </Link>
            </li>
            <li>
              <Link to="/feed" className="text-blue-500">
                Feed
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<TopUsers />} />
          <Route path="/trending" element={<TrendingPosts />} />
          <Route path="/feed" element={<Feed />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;