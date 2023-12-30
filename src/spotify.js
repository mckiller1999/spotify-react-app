import axios from "axios";

const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientID = "9e1a620c9b784b1791c1c993aab46ff4";
const redirectUri = "http://localhost:3000/";
const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndpoint = `${authEndpoint}client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

const apiClient = axios.create({
  baseURL: "https://api.spotify.com/v1/",
});

export const setClientToken = (token) => {
  apiClient.interceptors.request.use(async function (config) {
    config.headers.Authorization = "Bearer " + token;
    return config;
  });
};

export const logout = () => {
  // Xóa token truy cập
  localStorage.removeItem("token");
  // Chuyển hướng đến trang đăng nhập
  window.location.href = "/";
};

export default apiClient;
