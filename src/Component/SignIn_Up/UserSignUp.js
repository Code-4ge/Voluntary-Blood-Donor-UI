import AdapterDateFns from '@mui/lab/AdapterDateFns';
import AbcTwoToneIcon from '@mui/icons-material/AbcTwoTone';
import Avatar from "@mui/material/Avatar";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Checkbox from '@mui/material/Checkbox';
import CircularProgress from '@mui/material/CircularProgress';
import DatePicker from '@mui/lab/DatePicker';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Grid from "@mui/material/Grid";
import HowToRegTwoToneIcon from '@mui/icons-material/HowToRegTwoTone';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Link from "@mui/material/Link";
import MuiAlert from '@mui/material/Alert';
import MenuItem from '@mui/material/MenuItem';
import PasswordTwoToneIcon from '@mui/icons-material/PasswordTwoTone';
import React from "react";
import RegistrationService from "../../Service/RegistrationService";
import Select from '@mui/material/Select';
import { Snackbar } from "@mui/material";
import Swal from "sweetalert2";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import validator from 'validator';
import "./SignIn_Up.css";

  

export default function UserSignUp() {

    const [Detail, setDetail] = useState({
        firstName:"",
        lastName:"",
        dateOfBirth:null,
        gender:"",
        username:"",
        password:"",
    });
    const [showPassword, setShowPassword] = useState(false);
    const [Spinner, setSpinner] = useState(false);

    const [errorMsg, setErrorMsg] = useState()
    const [Alert, setAlert] = useState(false);

    const Genders = [ 'Male', 'Female', 'Unisex'];


    const handleSubmit = (e) => {
        e.preventDefault();
        setSpinner(true);

        if(!validator.isEmail(Detail.username)){
            setSpinner(false);
            setAlert(true);
            setErrorMsg("Enter valid Email address");
        }
        else if(!validator.isStrongPassword(Detail.password, { minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 })){
            setSpinner(false);
            setAlert(true);
            setErrorMsg("Password must be 8 character and contain atleast one Lowercase, Uppercase, Numbers & Symbols");
        }
        else{
            const user_details = {
                    firstName: Detail.firstName,
                    lastName: Detail.lastName,
                    gender: Detail.gender,
                    dateOfBirth: Detail.dateOfBirth,
                    username: Detail.username,
                    password: Detail.password,
            }

            RegistrationService.registerUser(user_details).then((response)=>{
                console.log(response);
                setSpinner(false);
                Swal.fire({
                    imageUrl:`${process.env.PUBLIC_URL}/assets/email.png`,
                    imageHeight: '200',
                    imageWidth: '250',
                    title: "You're almost there!",
                    html: "<i>"+Detail.username+"</i> <br> Head over to your inbox to confirm your email and finish your account creation!",
                    confirmButtonText: 'Go To Login',
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    focusConfirm: true,
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.replace('/signin');
                    }
                });
            }).catch((error) =>{
                setSpinner(false);
                setAlert(true);
                console.log(error);
                if(error.response && error.response.data && error.response.data.message)
                    setErrorMsg(error.response.data.message);
                else
                    setErrorMsg("Failed to Register, Try after some time...");
            });
        }
    };

    const handleCloseAlert = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setAlert(false);
    };


    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };


    return (
        <>
            <div className="register">
                <div className="form">
                    <Snackbar open={Alert} autoHideDuration={10000} onClick={handleCloseAlert} onClose={handleCloseAlert} anchorOrigin={{vertical:'top', horizontal:'right'}} sx={{mt:6}}>
                        <MuiAlert elevation={6} variant="filled" severity="error" sx={{ width: '100%' }}>
                            {errorMsg}
                        </MuiAlert>
                    </Snackbar>
                    <Card sx={{ width:"fit-content", padding:"15px", boxShadow:"0 -5px 5px -5px rgba(0, 0, 0, 0.2), 0 5px 5px -5px rgba(0, 0, 0, 0.2)"}}>
                        <CardContent>
                            <Box component="form" onSubmit={handleSubmit} Validate sx={{ mt: 2, width:'400px'}}>
                                <div className='user_form_grid'>
                                    <TextField id="firstName" label="First Name" name="firstName" value={Detail.firstName} style={{gridArea:'FName'}} autoComplete="given-name" color='error' fullWidth required autoFocus 
                                        onChange={(e) => {e.persist(); setDetail({...Detail, [e.target.name] : e.target.value});}} /> 

                                    <TextField id="lastName" label="Last Name" name="lastName" value={Detail.lastName} style={{gridArea:'LName'}} autoComplete="family-name" color='error' fullWidth required 
                                        onChange={(e) => {e.persist(); setDetail({...Detail, [e.target.name] : e.target.value});}} />

                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <DatePicker label="Date of Birth" inputFormat="dd/MM/yyyy" value={Detail.dateOfBirth} openTo="year" views={["year", "month", "day"]}
                                            onChange={(newDate) => {
                                                setDetail({...Detail, dateOfBirth:newDate});
                                            }}
                                            renderInput={(params) => (
                                                <TextField {...params} style={{gridArea:'DOB'}} color="error" required />
                                            )}
                                        />
                                    </LocalizationProvider>

                                    <FormControl style={{gridArea:'Gender'}} fullWidth>
                                        <InputLabel id="gender-label" color='error' required>Gender</InputLabel>
                                        <Select id="Gender" labelId="gender-label" name="gender" label="Gender*" value={Detail.gender} color='error' required 
                                        onChange={(e) => {setDetail({...Detail, [e.target.name] : e.target.value});}}>
                                            {Genders.map((name) => (
                                                <MenuItem key={name} value={name} >{name}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>

                                    <TextField id="username" label="Email Address" name="username" value={Detail.username} style={{gridArea:'Email'}} autoComplete="email" color='error' fullWidth required 
                                        onChange={(e) => {e.persist(); setDetail({...Detail, [e.target.name] : e.target.value});}} />

                                    <TextField id="password" type={showPassword ? 'text' : 'password'} label="Password" name="password" value={Detail.password} style={{gridArea:'Pass'}} autoComplete="new-password" color='error' fullWidth required 
                                        onChange={(e) => {e.persist(); setDetail({...Detail, [e.target.name] : e.target.value});}} 
                                        InputProps={{
                                            endAdornment: <InputAdornment position="end">
                                                    <div style={{cursor:'pointer'}} onClick={handleClickShowPassword}>
                                                        {showPassword ? <PasswordTwoToneIcon/> : <AbcTwoToneIcon sx={{fontSize:'30px'}}/> }
                                                    </div>
                                                </InputAdornment>,
                                            }}
                                    />
                                </div>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color='error' required/>}
                                    label="Accept the terms and Conditions." />

                                <Button type="submit" fullWidth variant="contained" sx={{ mt: 2, mb: 2, fontSize:'15px', fontWeight:'bold', backgroundColor:"#c6414c",':hover': {bgcolor: '#c6414c'} }} > 
                                    Sign Up 
                                    {Spinner && (<CircularProgress sx={{ml:2, color:'white'}} size={20}/>)}
                                </Button>

                                <Grid container justifyContent="flex-end">
                                    <Grid item>
                                        <Link href="/signin" variant="body2" color='#c6414c'>
                                            Already have an account? Sign in
                                        </Link>
                                    </Grid>
                                </Grid>    
                            </Box>
                        </CardContent>
                    </Card>
                </div>
                <div className="reg_info">
                    <Avatar sx={{ width:80, height:80, bgcolor: "#c6414c" }}>
                        <HowToRegTwoToneIcon sx={{ width:50, height:50 }} />
                    </Avatar>
                    <h3 style={{marginBottom:'0px', color:'#c6414c'}}>Registration As User</h3>
                    <h1 style={{margin:'0px', fontSize:'40px'}}>We Are Here To Help</h1>
                    <p>
                    The one reason donors say they give blood is because they "want to help others". If you began donating blood at age 18 and donated every 90 days until you reached 60, you would have donated 30 gallons of blood, potentially helping save more than 500 lives!
                    </p>
                </div>
            </div>
        </>
    )
}
