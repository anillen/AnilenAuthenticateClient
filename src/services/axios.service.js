import axios from "axios";
import { UserConfig } from "../../userconfig";

class AxiosService {
    constructor() {
        let token = localStorage.getItem('access_token');
        this.axios = axios.create({
            baseURL: UserConfig.BASE_LOCAL_URL_API,
            timeout: 1000,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
    }
}
export default new AxiosService();