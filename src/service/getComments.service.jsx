import { API_COMMENTS } from "../../lib/api.jsx";
import axios from "axios";

export const getComments = async () => {
  try {
    const response = await axios.get(API_COMMENTS);
    return response.data;
  } catch (error) {
    console.error("Error fetching comments:", error);
    throw error;
  }
};
