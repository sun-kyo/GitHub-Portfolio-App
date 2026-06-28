import axios from 'axios';

export const githubApi = axios.create({
  baseURL: 'https://api.github.com',
});

export const getGithubUser = async (username: string) => {
  const response = await githubApi.get(`/users/${username}`);
  return response.data;
};

export const getGithubRepos = async (username: string) => {
  const response = await githubApi.get(`/users/${username}/repos`);

  return response.data;
};
