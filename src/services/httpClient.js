import axios from "axios";
import { BASE_URL } from "../utils/constant";

export const httpClient = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

// HTTP Client Wrapper
// If we are using a library like Axios, we can abstract configurations into a reusable HTTP client.
