import { axiosInstance } from "./axios.service";

export default class EmergencySosService {
  constructor() {
    this.apiURL = "/emergency-sos";
  }

  async getAll(emergencySos) {
    let response = await axiosInstance().post(this.apiURL, emergencySos);

    return response;
  }
}
