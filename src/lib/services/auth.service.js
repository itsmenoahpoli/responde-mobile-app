import { axiosInstance } from "./axios.service";

export { axiosInstance } from "./axios.service";

export default class AuthService {
  constructor() {
    this.apiURL = "/auth";
  }

  async register(user) {
    let response = await axiosInstance().post("/users", user);

    return response;
  }

  async login(credentials) {
    let response = await axiosInstance().post(
      this.apiURL + "/login",
      credentials
    );

    return response;
  }
}
