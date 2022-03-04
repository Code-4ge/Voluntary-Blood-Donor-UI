import axios from 'axios';

const REGISTRATION_API_BASE_URL = "http://localhost:8080/api/signup";

class RegistrationService{

    registerDonor(credential, detail, address){
        console.log(credential, detail, address);
        return axios.post(REGISTRATION_API_BASE_URL, 
        {
            credential:credential,
            detail:detail,
            address:address
        });
    }

    getEmailVerification(token)
    {
        return axios.get(REGISTRATION_API_BASE_URL+"/confirm?token="+token);
    }
}

export default new RegistrationService();