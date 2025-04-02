import axios from 'axios';

const API_BASE_URL = 'http://localhost:5001';

export const fetchTopUsers = async () => {
  const response = await axios.get(`${API_BASE_URL}/top-users`);
  return response.data;
};

export const fetchTrendingPosts = async () => {
  const response = await axios.get(`${API_BASE_URL}/trending-posts`);
  return response.data;
};

export const fetchFeed = async () => {
  const response = await axios.get(`${API_BASE_URL}/feed`);
  return response.data;
};