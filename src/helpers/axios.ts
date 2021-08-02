import Axios from "axios";
import { getToken } from "./jwt";

const axios = Axios.create({
  // TODO: move base url into env
  baseURL: "https://dev-api.imi.ai",
  timeout: 30000,
});

axios.interceptors.request.use((config) => {
  const clonedConfig = {
    ...config,
    headers: {
      ...config.headers,
      Authorization: getToken(),
    },
  };

  return clonedConfig;
});

axios.interceptors.response.use(
  (res) => {
    const { data } = res;

    switch (data.error.code) {
      // successfully
      case 1:
        return data;

      // TODO: handle generic case

      default:
        // TODO: handle unhandled error
        return Promise.reject(data.error);
    }
  },
  (e) =>
    // TODO: handle generic case
    Promise.reject(e)
);

export default axios;
