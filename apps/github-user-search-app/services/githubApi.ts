import axios from "axios";

export const fetchGitHubUser = async (username: string) => {
  try {
    const url = `https://api.github.com/users/${username}`;
    console.log("Fetching data from:", url); // <-- Vérifie l'URL appelée
    const { data } = await axios.get(url);
    return data;
  } catch (error: any) {
    console.error("Error fetching GitHub user:", error);
    return null; // Assure-toi de retourner `null` si l'utilisateur n'existe pas
  }
};
