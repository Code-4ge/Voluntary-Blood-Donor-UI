import axios from "axios";
import AuthenticationService from "./AuthenticationService";

const API_URL = 'http://localhost:8080/api';

const USER_REQUEST_DONOR_SESSION_ATTRIBUTE_NAME = 'RequestedDonors'


class UserService{
    getUsersDetails(){
        return axios.get(API_URL + '/appUsers/4', { headers: AuthenticationService.authHeader() })
    }

    findDonor(searchBy, pageNo){
        console.log(searchBy);
        return axios.get(`${API_URL}/bloodRequests/find-donor?bloodGroup=${searchBy.bloodGroup}&city=${searchBy.city}&pincode=${searchBy.pincode}&pageNo=${pageNo}`);
    }

    setRequestDonor(donorList){
        sessionStorage.setItem(USER_REQUEST_DONOR_SESSION_ATTRIBUTE_NAME, donorList);
    }

    getRequestDonor(){
        sessionStorage.getItem(USER_REQUEST_DONOR_SESSION_ATTRIBUTE_NAME);
    }

    deleteRequestDonor(){
        sessionStorage.removeItem(USER_REQUEST_DONOR_SESSION_ATTRIBUTE_NAME);
    }
}

export default new UserService();