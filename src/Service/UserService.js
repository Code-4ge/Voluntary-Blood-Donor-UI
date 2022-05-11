import axios from "axios";
import AuthenticationService from "./AuthenticationService";

const API_URL = 'http://localhost:8080/api';

const USER_REQUEST_DONOR_SESSION_ATTRIBUTE_NAME = 'RequestedDonors';
const USER_NAME = "userName";


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
        return sessionStorage.getItem(USER_REQUEST_DONOR_SESSION_ATTRIBUTE_NAME);
    }

    deleteRequestDonor(){
        sessionStorage.removeItem(USER_REQUEST_DONOR_SESSION_ATTRIBUTE_NAME);
    }

    sendRequest(request){
        console.log(request);
        return axios.post(`${API_URL}/bloodRequests/request`, request, {
            headers: AuthenticationService.authHeader()
        });
    }

    isDonorSelected(){
        if (this.getRequestDonor() === null) 
            return false;
        return true;
    }

    setUsername(userName){
        sessionStorage.setItem(USER_NAME, userName)
    }

    getUsername(){
        return sessionStorage.getItem(USER_NAME)
    }
}

export default new UserService();