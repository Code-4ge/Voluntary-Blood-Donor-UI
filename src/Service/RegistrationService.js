import axios from 'axios';

const REGISTRATION_API_BASE_URL = "http://localhost:8080/api/signup";

class RegistrationService{

    registerDonor(Donor){
        return axios.post(REGISTRATION_API_BASE_URL, Donor);
    }

    getEmailVerification(token)
    {
        return axios.get(REGISTRATION_API_BASE_URL+"/confirm?token="+token);
    }
}

export default new RegistrationService();