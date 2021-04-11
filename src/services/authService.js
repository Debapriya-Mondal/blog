import jwtDecode from "jwt-decode";
import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/login";
const tokenKey = "token";
export async function login(user) {
  const { data: jwt } = await http.post(apiEndpoint, {
    email: user.email,
    password: user.password,
  });
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getUser() {
  try {
    const token = localStorage.getItem(tokenKey);
    return jwtDecode(token);
  } catch (error) {
    return null;
  }
}

export function getJWT() {
  return localStorage.getItem("token");
}

const auth = {
  login,
  logout,
  getUser,
};
export default auth;
