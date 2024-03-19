import axiosService from "./axios.service";

class AuthenticateService {
    async login(loginData) {
        return await axiosService.axios.post(`/authentication/login `, loginData);
    }
}

export default new AuthenticateService()