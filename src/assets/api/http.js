import axios from "axios";

export const http = axios.create({
  baseURL: "https://api.api-ninjas.com/v1/quotes?",
  headers: {
    "X-Api-Key": "AR9vQUcpDKJ+QYIEDTdS7w==K8JvLXgUEvv2CXje",
  },
});
