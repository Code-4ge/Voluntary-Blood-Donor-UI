import axios from 'axios';

const REGISTRATION_API_BASE_URL = "http://localhost:8080/blood-donor/register";

class RegistrationService{

    registerDonor(user_details){
        return axios.post(REGISTRATION_API_BASE_URL, user_details);
    }

    getEmailVerification(token)
    {
        return axios.get(REGISTRATION_API_BASE_URL+"/confirm?token="+token);
    }
}

export default new RegistrationService();