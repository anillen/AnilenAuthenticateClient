import axios from "axios"

class AuthenticateService {
    #BASE_URL = 'https://localhost:7002';

    async login(loginData) {
        return axios.post(`${this.#BASE_URL}/authenticate/login `, loginData);
    }
}

export default new AuthenticateService()