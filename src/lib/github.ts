import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com';

export interface GitHubUser {
  login: string;
  name: string;
  avatar_url: string;
  bio: string;
  followers: number;
  following: number;
  public_repos: number;
  html_url: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
}

export interface CommitActivity {
  total: number;
  week: number;
  days: number[];
}

export const githubApi = {
  async getUser(username: string): Promise<GitHubUser> {
    const { data } = await axios.get(`${GITHUB_API_URL}/users/${username}`);
    return data;
  },

  async getRepos(username: string): Promise<GitHubRepo[]> {
    const { data } = await axios.get(
      `${GITHUB_API_URL}/users/${username}/repos?sort=updated&per_page=100`
    );
    return data;
  },

  async getCommitActivity(username: string, repo: string): Promise<CommitActivity[]> {
    const { data } = await axios.get(
      `${GITHUB_API_URL}/repos/${username}/${repo}/stats/commit_activity`
    );
    return data;
  },

  async getLanguages(username: string, repo: string): Promise<Record<string, number>> {
    const { data } = await axios.get(
      `${GITHUB_API_URL}/repos/${username}/${repo}/languages`
    );
    return data;
  },
};