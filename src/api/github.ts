import axios from 'axios';

export const githubApi = axios.create({
  baseURL: 'https://api.github.com',
});

export const getGithubUser = async (username: string) => {
  const response = await githubApi.get(`/users/${username}`);
  console.log('response', response);
  return response.data;
};
