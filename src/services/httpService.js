import axios from "axios";
import { getJWT } from "./authService";

axios.defaults.headers.common["x-auth-token"] = getJWT();
const http = {
  get: axios.get,
  put: axios.put,
  post: axios.post,
  delete: axios.delete,
};

export default http;
