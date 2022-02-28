import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import HowToRegTwoToneIcon from '@mui/icons-material/HowToRegTwoTone';
import TextField from "@mui/material/TextField";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import CircularProgress from '@mui/material/CircularProgress';
import MuiAlert from '@mui/material/Alert';
import PasswordTwoToneIcon from '@mui/icons-material/PasswordTwoTone';
import AbcTwoToneIcon from '@mui/icons-material/AbcTwoTone';
import InputAdornment from '@mui/material/InputAdornment';
import "./SignIn_Up.css";
import { useState } from "react";
import RegistrationService from "../../Service/RegistrationService";
import Swal from "sweetalert2";
import { Snackbar } from "@mui/material";



  

export default function SignUp() {

    const [errorMsg, setErrorMsg] = useState()
    const [Donor, setDonor] = useState({
        firstName:"",
        lastName:"",
        username:"",
        password:""
    });
    const [showPassword, setShowPassword] = useState(false);
    const [Spinner, setSpinner] = useState(false);
    const [Alert, setAlert] = useState(false);

    
    const handleChange = (e) => {
        e.persist();
        setDonor({...Donor, [e.target.name] : e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSpinner(true);
        // TODO check validation
        RegistrationService.registerDonor(Donor).then((response)=>{
            console.log(response)
            setSpinner(false);
            Swal.fire({
                imageUrl:`${process.env.PUBLIC_URL}/assets/email.png`,
                imageHeight: '200',
                imageWidth: '250',
                title: "You're almost there!",
                html: "<i>"+Donor.email+"</i> <br> Head over to your inbox to confirm your email and finish your account creation!",
                confirmButtonText: 'OK',
                allowOutsideClick: false,
                allowEscapeKey: false,
                focusConfirm: true,
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.replace('/');
                }
            });
        }).catch((error) =>{
            setErrorMsg("error.response.data.message");
            setSpinner(false);
            setAlert(true);
        });

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
                    <Snackbar open={Alert} onClick={handleCloseAlert} anchorOrigin={{vertical:'top', horizontal:'right'}} sx={{mt:6}}>
                        <MuiAlert elevation={6} variant="filled" severity="error" sx={{ width: '100%' }}>
                            {errorMsg}
                        </MuiAlert>
                    </Snackbar>
                    <Card sx={{ width:"fit-content", padding:"15px", boxShadow:"0 -5px 5px -5px rgba(0, 0, 0, 0.2), 0 5px 5px -5px rgba(0, 0, 0, 0.2)"}}>
                        <CardContent>
                            <Box component="form" onSubmit={handleSubmit} Validate sx={{ mt: 2, }}>
                                <Grid container spacing={2}>
                                    <Grid item sm={6}>
                                        <TextField autoComplete="given-name" name="firstName" required fullWidth id="firstName" label="First Name" color='error' onChange={(e) => handleChange(e)} autoFocus />
                                    </Grid>
                                    <Grid item sm={6}>
                                        <TextField required fullWidth id="lastName" label="Last Name" name="lastName" color='error' onChange={(e) => handleChange(e)}  autoComplete="family-name" />
                                    </Grid>
                                </Grid>
                                <Grid container spacing={2} mt={0.3}>
                                    <Grid item xs={12}>
                                        <TextField required fullWidth id="username" label="Email Address" name="username" color='error' onChange={(e) => handleChange(e)}  autoComplete="email" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField 
                                            id="password" 
                                            type={showPassword ? 'text' : 'password'} 
                                            required 
                                            fullWidth 
                                            name="password" 
                                            color='error'
                                            onChange={(e) => handleChange(e)}  
                                            label="Password" 
                                            autoComplete="new-password" 
                                            InputProps={{
                                                endAdornment: <InputAdornment position="end">
                                                        <div style={{cursor:'pointer'}} onClick={handleClickShowPassword}>
                                                            {showPassword ? <PasswordTwoToneIcon/> : <AbcTwoToneIcon sx={{fontSize:'30px'}}/> }
                                                        </div>
                                                    </InputAdornment>,
                                                }}
                                        />
                                    </Grid>
                                </Grid>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color='error' />}
                                    label="Accept the terms and Conditions." />
                                <Button type="submit" fullWidth variant="contained" sx={{ mt: 2, mb: 2, fontSize:'15px', fontWeight:'bold', backgroundColor:"#c6414c",':hover': {bgcolor: '#c6414c'} }} > 
                                    Sign Up 
                                    {Spinner && (<CircularProgress sx={{ml:2, color:'white'}} size={20}/>)}
                                </Button>
                                <Grid container justifyContent="flex-end">
                                    <Grid item>
                                        <Link href="/SignIn" variant="body2" color='#c6414c'>
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
                    <h3 style={{marginBottom:'0px', color:'#c6414c'}}>Registration</h3>
                    <h1 style={{margin:'0px', fontSize:'40px'}}>Your Donation Can Make Someone’s Life Better</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco 
                    </p>
                </div>
            </div>
        </>
    )
}








// function Copyright(props) {
//     return (
//         <Typography variant="body2" color="text.secondary" align="center" {...props}>
//             {"Copyright © "}<Link to="/" color="inherit" underline="none">BConnect</Link>{" "}{new Date().getFullYear()}{"."}
//         </Typography>
//     );
// }

// <Typography component="h1" variant="h5" fontWeight={{fontWeight:"bolder"}}>
//     Sign Up
// </Typography>
