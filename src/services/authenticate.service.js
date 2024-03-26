import axiosService from "./axios.service";

class AuthenticateService {
    async login(loginData) {
        return await axiosService.axios.post(`/authentication/login`, loginData);
    }
    async verifyToken(token){
        return await axiosService.axios.post(`/authentication/token`,token)
    }
}

export default new AuthenticateService()