import axios from 'axios';

const REGISTRATION_API_BASE_URL = "http://localhost:8080/api";

class RegistrationService{

    registerDonor(donor_details){
        return axios.post(`${REGISTRATION_API_BASE_URL}/donors/register`, donor_details);
    }

    registerUser(user_details){
        return axios.post(`${REGISTRATION_API_BASE_URL}/appUsers/signup`, user_details);
    }

    getEmailVerification(token)
    {
        return axios.get(`${REGISTRATION_API_BASE_URL}/confirm?token=${token}`);
    }
}

export default new RegistrationService();