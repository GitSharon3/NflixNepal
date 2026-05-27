// Axios client instance pre-configured with the TMDb base URL for all movie API queries
import axios from "axios";
import { baseUrl } from "./constants/constants";

// Instantiate the pre-configured axios client
const instance = axios.create({
  baseURL: baseUrl,
});

export default instance;
