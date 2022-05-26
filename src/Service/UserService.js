import axios from "axios";
import AuthenticationService from "./AuthenticationService";
import RequestService from "./RequestService";

const USER_REQUEST_DONOR_SESSION_ATTRIBUTE_NAME = 'RequestedDonors';
const USER_NAME = "userName";
const USER_MAIL = "userMail";
const USER_AGE = "userAge";
const USER_ADDRESS = "userAddress";
const USER_MOBILE = "userMobile";
const USER_BLOOD = "userBloodGroup";
const USER_LOCATION_LAT = "userLatitude";
const USER_LOCATION_LON = "userLongitude";



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
        RequestService.getGeoCode(UserDetails.address)
        .then(response => {
            sessionStorage.setItem(USER_LOCATION_LAT, response.candidates[0].location.x);
            sessionStorage.setItem(USER_LOCATION_LON, response.candidates[0].location.y);
            console.log(response.candidates[0].location)
            // return response.candidates[0].location;     // => { x: -77.036533, y: 38.898719, spatialReference: ... }
        });
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

    calculateDistance(dAddress){    // 18.6196,73.7923,18.4679,73.8357;

        var lat1;
        var lon1;

        RequestService.getGeoCode(dAddress)
        .then(response => {
            lat1 = response.candidates[0].location.x;
            lon1 = response.candidates[0].location.y;
            console.log(response.candidates[0].location)
            // return response.candidates[0].location;     // => { x: -77.036533, y: 38.898719, spatialReference: ... }
        });;

        // console.log(donorLocation);


        console.log("Donor:" + lat1 + ", " + lat2);
        
        var lat2 = sessionStorage.getItem(USER_LOCATION_LAT);
        var lon2 = sessionStorage.getItem(USER_LOCATION_LON);

        console.log("App User:" + lat2 + ", " + lon2);


        var R = 6371; // km
        var dLat = toRad(lat2-lat1);
        var dLon = toRad(lon2-lon1);
        var lat1 = toRad(lat1);
        var lat2 = toRad(lat2);

        var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        var d = R * c;
        console.log(d);
        console.log(d.toFixed(1));
        return d.toFixed(1);

        // Converts numeric degrees to radians
        function toRad(Value) 
        {
            return Value * Math.PI / 180;
        }
    }


}

export default new UserService();