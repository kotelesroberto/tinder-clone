import axios from "axios";

const instance = axios.create({
  // baseURL: "...", // the API (cloud function) url
  // baseURL: "http://localhost:8001", // the LOCAL API url
  baseURL: "https://tinderapp-backend.herokuapp.com", // the LIVE API (cloud function) url

  //   timeout: 1000,
  //   headers: {'X-Custom-Header': 'foobar'}
});

export default instance;
