import axios, { AxiosInstance } from "axios";

export const baseApi: AxiosInstance = axios.create({
  baseURL: "https://api.kinopoisk.dev",
  headers: {
    "Content-Type": "application/json",
    "X-API-KEY": "C5RE8C0-JDF429S-Q5QQ5PP-SZFWRRZ"
  },
});
