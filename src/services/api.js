import axios from "axios";
import HTTP_CONFIG from "../utils/httpConfig";

export async function getData(url, config = HTTP_CONFIG) {
  try {
    const response = await axios.get(url, config);
    return response.data;
  } catch (err) {
    return err;
  }
}
