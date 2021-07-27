import axios from "axios";

const instance = axios.create({
  baseURL: "https://funds-map.herokuapp.com/",
});

export const BASE_URL = "https://funds-map.herokuapp.com/";

export default instance;
