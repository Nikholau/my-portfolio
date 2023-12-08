import axios, { AxiosResponse } from 'axios';

export interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
}

export interface User {
  name: string;
  bio?: string;
  company?: string;
  publicRepos?: number;
  location?: string;
  avatar_url: string;
}

const GitHubService = {
  getUserRepos: async (username: string): Promise<Repository[]> => {
    try {
      const response: AxiosResponse<Repository[]> = await axios.get(`https://api.github.com/users/${username}/repos`);
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching user repositories: ${error}`);
    }
  },

  getUser: async (username: string): Promise<User> => {
    try {
      const response: AxiosResponse<User> = await axios.get(`https://api.github.com/users/${username}`);
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching user data: ${error}`);
    }
  },
};

export default GitHubService;
