import axios from "axios";
import AuthenticationService from "./AuthenticationService";



class RequestService{

    getRecivedRequest(){
        return axios.get(AuthenticationService.API_URL + '/donors/requests', { headers: AuthenticationService.authHeader() })
    }

    getRequestsStatus(){
        return axios.get(AuthenticationService.API_URL + '/appUsers/requests', { headers: AuthenticationService.authHeader() })
    }
}

export default new RequestService();