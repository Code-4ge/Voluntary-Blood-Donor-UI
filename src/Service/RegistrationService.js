import axios from 'axios';
import AuthenticationService from "./AuthenticationService";

class RegistrationService{

    registerDonor(donor_details){
        return axios.post(`${AuthenticationService.API_URL}/donors/register`, donor_details);
    }

    registerUser(user_details){
        return axios.post(`${AuthenticationService.API_URL}/appUsers/signup`, user_details);
    }

    getEmailVerification(token)
    {
        return axios.get(`${AuthenticationService.API_URL}/confirm?token=${token}`);
    }
}

export default new RegistrationService();