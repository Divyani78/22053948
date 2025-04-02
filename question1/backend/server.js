const axios = require('axios');

const BASE_URL = 'http://20.244.56.144/evaluation-service/users/:userid/posts'; // Replace with actual URL

async function fetchUsers() {
  try {
    const response = await axios.get(`${BASE_URL}/users`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return null;
  }
}

async function fetchPosts() {
  try {
    const response = await axios.get(`${BASE_URL}/posts`);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return null;
  }
}

module.exports = { fetchUsers, fetchPosts };