import axios from "axios";
import { UserConfig } from "../../userconfig";

class AxiosService {
    constructor() {
        this.axios = axios.create({
            baseURL: UserConfig.BASE_LOCAL_URL_API,
            timeout: 1000,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}
export default new AxiosService();