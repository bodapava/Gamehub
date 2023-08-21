import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "267279713fde4922a3a6a16c23010048",
  },
});
