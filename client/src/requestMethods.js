import axios from "axios";

// const BASE_URL = "http://localhost:5000/api/";
const BASE_URL = "https://fitness-aserver.herokuapp.com/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZjRjNWNhYzU0ZmI0N2Y5ZWI1YTQxZiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NjAyMDg2MzIsImV4cCI6MTY2MDQ2NzgzMn0.05WB1mVNK7-fv9HKrDfSDv-GwhUWqpdyssHD79RhmBM";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer` },
});
