import { API } from "../lib/api.jsx";
import axios from "axios";

export const getComments = async () => {
  try {
    const response = await axios.get(`${API}/comments`);
    return response.data.comments;
  } catch (error) {
    console.error("Error fetching comments:", error);
    throw error;
  }
};
