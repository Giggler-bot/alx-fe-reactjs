import axios from "axios";

const BASE_URL = "https://api.github.com/search/users?q";
const GITHUB_TOKEN = import.meta.env.VITE_APP_GITHUB_API_KEY;

const githubApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/vnd.github.v3+json",
    Authorization: `Bearer ${GITHUB_TOKEN}`,
  },
});

export const searchUsers = async (query, location, minRepos) => {
  let q = query;

  if (location) {
    q += `+location:${location}`;
  }
  if (minRepos) {
    q += `+repos:>=${minRepos}`;
  }

  try {
    const response = await githubApi.get(`/search/users?q=${q}`);
    return response.data.items; // The search API returns results in an 'items' array
  } catch (error) {
    console.error("Error searching for users:", error);
    throw new Error("An error occurred during the search.");
  }
};

export const fetchUserData = () => {
    console.log("Hero");
    
}