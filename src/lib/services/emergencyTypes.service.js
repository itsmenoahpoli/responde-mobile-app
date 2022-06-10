import { axiosInstance } from "./axios.service";

export default class EmergencyTypesService {
  constructor() {
    this.apiURL = "/emergency-types";
  }

  async getAll() {
    let response = await axiosInstance().get(this.apiURL);

    return response;
  }
}
