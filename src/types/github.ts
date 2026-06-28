export interface GithubUser {
  login: string;
  avatar_url: string;
  name: string;
  bio: string;
  followers: number;
  following: number;
  public_repos: number;
}

export interface GithubRepo {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  html_url: string;
}
