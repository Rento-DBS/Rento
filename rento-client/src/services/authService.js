import http from "./httpService";
// import { apiUrl } from "../config.json";
import jwtDecode from "jwt-decode";

// const apiEndPoint = apiUrl + "/auth";
const apiEndPoint = "/auth";
const tokenKey = "token";

http.setJwt(getJwt());

export async function login(email, password) {
    let { data: jwt } = await http.post(apiEndPoint, { email, password });
    jwt = { username: email, password: password };
    localStorage.setItem(tokenKey, jwt);
}

export function loginWithJwt(jwt) {
    localStorage.setItem(tokenKey, jwt);
}

export function logout() {
    localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
    try {
        const jwt = localStorage.getItem(tokenKey);
        return jwtDecode(jwt);
    } catch (ex) {
        return null;
    } //we need the try catch block for anonymous user(i.e. when there is no jwt in the local storage)
}

export function getJwt() {
    return localStorage.getItem(tokenKey);
}

export default {
    login,
    loginWithJwt,
    logout,
    getCurrentUser,
    getJwt,
};
