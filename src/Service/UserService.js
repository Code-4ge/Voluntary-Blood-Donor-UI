import axios from "axios";
import AuthenticationService from "./AuthenticationService";

const API_URL = 'http://localhost:8080';

class UserService{
    getUsersDetails(){
        return axios.get(API_URL + '/appUsers/4', { headers: AuthenticationService.authHeader() })
    }

    findDonor(searchBy, pageNo){
        console.log(searchBy);
        return axios.get(API_URL + `/blood-recipient/find-donor?bloodGroup=${searchBy.bloodGroup}&city=${searchBy.city}&pincode=${searchBy.pincode}&pageNo=${pageNo}&pageSize=1&sortBy=address.city`);
    }

}

export default new UserService();