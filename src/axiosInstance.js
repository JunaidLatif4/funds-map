import axios from "axios";

// axios.defaults.headers.authorization = `Bearer ${localStorage.getItem(
//   "token"
// )}`;
const instance = axios.create({
  baseURL: "https://funds-map.herokuapp.com/",
});

export const BASE_URL = "https://funds-map.herokuapp.com/";

export default instance;
