import Axios from "axios";

const axios = Axios.create({
  baseURL: "https://buchecha-backend.herokuapp.com/api/",
});

export default axios;
