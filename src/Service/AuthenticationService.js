import axios from 'axios';
import jwt_decode from "jwt-decode";


const USER_NAME_SESSION_ATTRIBUTE_NAME = 'SESSIONauth';


class AuthenticationService{
    
    API_URL = 'http://localhost:8080/api';

    executeJWTAuthenticationService(Users){
        return axios.post(`${this.API_URL}/appUsers/signin`, Users );
    }

    authHeader(){
        const JwtToken = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        if(JwtToken)
            return {Authorization: this.createJWTAuthToken(JwtToken)};
        else
            return {};
    }

    createJWTAuthToken(token){
        return 'Bearer ' + token;
    }

    registerSuccessfulLogin(token) {
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, token)
        this.setupAxiosInterceptors(this.createJWTAuthToken(token))
        return true;
    }
    
    isUserLoggedIn(){
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        if (user === null) 
            return false;
        return true;
    }

    getUserRoles(){
        const J_Token = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        var decoded_token = jwt_decode(J_Token);
        return decoded_token.roles;
    }
    
    logout() {
        sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    }
    
    setupAxiosInterceptors(token) {
        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.Authorization = token
                }
                return config
            }
        )
    }
}

export default new AuthenticationService();