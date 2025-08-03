import axios from "axios";

const BASE_URL = "https://api.github.com/users";

const fetchUserData = async (username) => {
  const response = await axios.get(`${BASE_URL}/${username}`, {
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
    },
  });
  return response.data;
};

export default fetchUserData;
