import axios, { AxiosInstance } from "axios";

export const baseApi: AxiosInstance = axios.create({
  baseURL: "https://api.kinopoisk.dev/v1.4",
  headers: {
    "Content-Type": "application/json",
    "X-API-KEY": "SEX017A-JVDMWZ1-QVYC5XM-Z5DBJKA"
  },
});
