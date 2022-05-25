import axios from "axios";
import AuthenticationService from "./AuthenticationService";

const USER_REQUEST_DONOR_SESSION_ATTRIBUTE_NAME = 'RequestedDonors';
const USER_NAME = "userName";
const USER_MAIL = "userMail";
const USER_AGE = "userAge";
const USER_ADDRESS = "userAddress";
const USER_MOBILE = "userMobile";
const USER_BLOOD = "userBloodGroup";



class UserService{
    getUsersDetails(){
        return axios.get(AuthenticationService.API_URL + '/appUsers/4', { headers: AuthenticationService.authHeader() })
    }

    findDonor(searchBy, pageNo){
        console.log(searchBy);
        return axios.get(`${AuthenticationService.API_URL}/bloodRequests/find-donor?bloodGroup=${searchBy.bloodGroup}&city=${searchBy.city}&pincode=${searchBy.pincode}&pageNo=${pageNo}`);
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
        return axios.post(`${AuthenticationService.API_URL}/bloodRequests/request`, request, {
            headers: AuthenticationService.authHeader()
        });
    }

    isDonorSelected(){
        if (this.getRequestDonor() === null) 
            return false;
        return true;
    }

    setUserDetails(UserDetails){
        sessionStorage.setItem(USER_NAME, UserDetails.name);
        sessionStorage.setItem(USER_MAIL, UserDetails.email);
        sessionStorage.setItem(USER_AGE, UserDetails.age);
        sessionStorage.setItem(USER_BLOOD, UserDetails.bloodGroup);
        sessionStorage.setItem(USER_ADDRESS, UserDetails.address);
        sessionStorage.setItem(USER_MOBILE, UserDetails.mobile);
    }

    getUsername(){
        return sessionStorage.getItem(USER_NAME);
    }
    getUserEmail()
    {
        return sessionStorage.getItem(USER_MAIL);
    }
    getUserAge()
    {
        return sessionStorage.getItem(USER_AGE);
    }
    getUserAdress()
    {
        return sessionStorage.getItem(USER_ADDRESS);
    }
    getUserBloodGroup()
    {
        return sessionStorage.getItem(USER_BLOOD);
    }
    getUserMobile()
    {
        return sessionStorage.getItem(USER_MOBILE);
    }
}

export default new UserService();