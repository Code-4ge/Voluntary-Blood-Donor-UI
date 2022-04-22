import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Checkbox from '@mui/material/Checkbox';
import CircularProgress from '@mui/material/CircularProgress';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { IMaskInput } from "react-imask";
import MuiAlert from '@mui/material/Alert';
import MenuItem from '@mui/material/MenuItem';
import PropTypes from "prop-types";
import Select from '@mui/material/Select';
import { Snackbar } from "@mui/material";
import State_City_Data from '../../Service/Data';
import TextField from "@mui/material/TextField";
import { useState } from "react";
import './RequestBlood.css';
import userService from '../../Service/UserService';



const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="000000000000"
        definitions={{
          "#": /[1-9]/
        }}
        inputRef={ref}
        onAccept={(value) => onChange({ target: { name: props.name, value } })}
        overwrite
      />
    );
});
  
TextMaskCustom.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};





export default function RequestForm() {

    if(!userService.isDonorSelected())
    {
        window.location.replace("/search-for-blood");
    }

    const { data } = State_City_Data;
    const stateList = Object.keys(data);
    const [selectedState, setSelectedState] = useState();
    const [cityList, setCityList] = useState([]);
    const [patientDetail, setPatientDetail] = useState({
        patientName:"",
        requiredBloodGroup:"",
        whatsapp:"",
        gender:"",
        age:"",
        unitsRequired:"",
        streetAddress:"",
        city:"",
        governmentId:"",
        donors:userService.getRequestDonor().split(','),
    });
    const [Msg, setMsg] = useState();
    const [msgColor, setMsgColor] = useState();
    const [Alert, setAlert] = useState(false);
    const [submitSpinner, setSubmitSpinner] = useState(false);
    const BlTypes = [ 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
    const Genders = [ 'Male', 'Female', 'Unisex'];


    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitSpinner(true);
        userService.sendRequest(patientDetail)
        .then((res) => {
            setSubmitSpinner(false);
            setAlert(true);
            setMsg("Successfully Sent");
            setMsgColor("success");
            userService.deleteRequestDonor();
        })
        .catch((err) => {
            setSubmitSpinner(false);
            setAlert(true);
            setMsg("Failed to send request!");
            setMsgColor("error");
            console.log(err);
        });
    };

    const handleCloseAlert = (event, reason) => {
        setAlert(false);
    };




    return (
        <>
            <div className='request-bg' style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/request-bg.svg'})`}}>
                <div className='request-container'>
                    <h1>Your Are One Step Away to Request <br/><span>Fill Patient Details</span></h1>
                    <Snackbar open={Alert} autoHideDuration={10000} onClick={handleCloseAlert} onClose={handleCloseAlert} anchorOrigin={{vertical:'top', horizontal:'right'}} sx={{mt:6}}>
                        <MuiAlert elevation={6} variant="filled" severity={msgColor} sx={{ width: '100%' }}>
                            {Msg}
                        </MuiAlert>
                    </Snackbar>
                    <Card sx={{ width:"fit-content", padding:"15px", margin:"auto"}}>
                        <CardContent>
                            <Box component="form" onSubmit={handleSubmit} Validate sx={{ mt: 2, }}>
                                
                                <div className='request_form_grid'>
                                    <TextField id="patientName" label="Patient Name" name="patientName" value={patientDetail.patientName} style={{gridArea:'PName'}} autoComplete="given-name" color='error' fullWidth required autoFocus 
                                        onChange={(e) => {e.persist(); setPatientDetail({...patientDetail, [e.target.name] : e.target.value});}} 
                                    />

                                    <TextField id="unitsRequired"  label="Units Required"  name="unitsRequired" value={patientDetail.unitsRequired} style={{gridArea:'Unit'}}  color='error' fullWidth required
                                        onChange={(e) => {setPatientDetail({...patientDetail, [e.target.name] : e.target.value});}} 
                                        InputProps={{
                                            inputComponent: TextMaskCustom
                                        }}
                                    />

                                    <TextField id="age"  label="Age"  name="age" value={patientDetail.age} style={{gridArea:'Age'}}  color='error' fullWidth required
                                        onChange={(e) => {setPatientDetail({...patientDetail, [e.target.name] : e.target.value});}} 
                                        InputProps={{
                                            inputComponent: TextMaskCustom
                                        }}
                                    />

                                    <FormControl style={{gridArea:'BlGroup'}} fullWidth>
                                        <InputLabel id="Bl-group-label" color='error' required>Blood Group</InputLabel>
                                        <Select id="Blood-group" labelId="Bl-group-label" name="requiredBloodGroup" label="Blood Group*" value={patientDetail.requiredBloodGroup} color='error' required 
                                            onChange={(e) => {setPatientDetail({...patientDetail, [e.target.name] : e.target.value});}}>
                                            {BlTypes.map((name) => (
                                                <MenuItem key={name} value={name} >{name}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>

                                    <TextField id="whatsAppNumber"  label="Whatsapp Number"  name="whatsapp" value={patientDetail.whatsapp} style={{gridArea:'Phone'}}  color='error' autoComplete="phone" placeholder='Your-number' fullWidth required 
                                        onChange={(e) => {setPatientDetail({...patientDetail, [e.target.name] : e.target.value});}} 
                                        InputProps={{
                                            inputComponent: TextMaskCustom
                                        }}
                                    />

                                    <FormControl style={{gridArea:'Gender'}} fullWidth>
                                        <InputLabel id="gender-label" color='error' required>Gender</InputLabel>
                                        <Select id="Gender" labelId="gender-label" name="gender" label="Gender*" value={patientDetail.gender} color='error' required 
                                        onChange={(e) => {setPatientDetail({...patientDetail, [e.target.name] : e.target.value});}}>
                                            {Genders.map((name) => (
                                                <MenuItem key={name} value={name} >{name}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>

                                    <TextField id="address" label="Street Address" name="streetAddress" value={patientDetail.streetAddress} style={{gridArea:'Address'}} autoComplete="address" color='error' fullWidth required 
                                        onChange={(e) => {e.persist(); setPatientDetail({...patientDetail, [e.target.name] : e.target.value});}} />

                                    
                                    <FormControl style={{gridArea:'State'}} fullWidth>
                                        <InputLabel id="State-label" color='error' required>State</InputLabel>
                                        <Select id="state" labelId="State-label" name="state" label="State*" value={selectedState} color='error' required 
                                            onChange={(e) => {
                                                setSelectedState(e.target.value);
                                                setCityList(data[e.target.value].cities);
                                            }}>
                                            {stateList.map((name, key) => (
                                                <MenuItem key={key} value={name} >{name}</MenuItem>
                                                ))}
                                        </Select>
                                    </FormControl>

                                    <FormControl style={{gridArea:'City'}} fullWidth>
                                        <InputLabel id="City-label" color='error' required>City</InputLabel>
                                        <Select id="city" labelId="City-label" name="city" label="City*" value={patientDetail.city} color='error' required 
                                            onChange={(e) => {setPatientDetail({...patientDetail, [e.target.name] : e.target.value});}}>
                                            <MenuItem key="default" value="Default" disabled>Select City</MenuItem>
                                            {cityList.map((name, key) => (
                                                <MenuItem key={key} value={name} >{name}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>

                                    <TextField id="governmentId"  label="Addhar/PAN Card Number"  name="governmentId" value={patientDetail.governmentId} style={{gridArea:'G_Id'}}  color='error' placeholder='Enter addhar/pan card number without space' fullWidth 
                                        onChange={(e) => {setPatientDetail({...patientDetail, [e.target.name] : e.target.value});}} 
                                        InputProps={{
                                            inputComponent: TextMaskCustom
                                        }}
                                    />

                                </div>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color='error' required/>}
                                    label="Accept the terms and Conditions." />

                                <Button type="submit" fullWidth variant="contained" sx={{ mt: 2, mb: 2, fontSize:'15px', fontWeight:'bold', backgroundColor:"#c6414c",':hover': {bgcolor: '#c6414c'} }} > 
                                    Submit
                                    {submitSpinner && (<CircularProgress sx={{ml:2, color:'white'}} size={20}/>)}
                                </Button>

                            </Box>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    );
}
