import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
import TextField from "@mui/material/TextField";
import { useState } from "react";
import MuiAlert from '@mui/material/Alert';
import { Snackbar } from "@mui/material";
import AuthenticationService from "../../Service/AuthenticationService";
import CircularProgress from '@mui/material/CircularProgress';
import PasswordTwoToneIcon from '@mui/icons-material/PasswordTwoTone';
import AbcTwoToneIcon from '@mui/icons-material/AbcTwoTone';
import InputAdornment from '@mui/material/InputAdornment';
import validator from 'validator';

import "./SignIn_Up.css"
import UserService from "../../Service/UserService";


export default function SignIn() {

    const [errorMsg, seterrorMsg] = useState()
    const [showPassword, setShowPassword] = useState(false)
    const [Alert, setAlert] = useState(false);
    const [Spinner, setSpinner] = useState(false);
    const [Users, setUsers] = useState({
        username:"",
        password:""
    });

    const handleChange = (e) => {
        e.persist();
        setUsers({...Users, [e.target.name] : e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSpinner(true);
        if(!validator.isEmail(Users.username)){
            setSpinner(false);
            setAlert(true);
            seterrorMsg("Enter valid Email address");
        }
        else if(!validator.isStrongPassword(Users.password, { minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 })){
            setSpinner(false);
            setAlert(true);
            seterrorMsg("Password must be 8 character and contain atleast one Lowercase, Uppercase, Numbers & Symbols");
        }
        else{
            AuthenticationService.executeJWTAuthenticationService(Users)
                .then((response) => {
                    UserService.setUserDetails(response.data)
                    if(AuthenticationService.registerSuccessfulLogin(response.data.token))
                    {
                        setSpinner(false);
                        if(UserService.isDonorSelected())
                        {
                            console.log("enter to send request");
                            window.open('/send-request', '_self');
                        }
                        else{
                            console.log("enter to dashboard");
                            window.open('/dashboard', '_self');
                        }
                        // history.replace('/dashboard');
                        // window.location.reload();
                        console.log("Login Done!!")
                    }
                }).catch((error) => {
                    console.log(error)
                    setAlert(true);
                    seterrorMsg('error in login');
                    setSpinner(false);
                })
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
            <div id="bg-container">
                <div className="login-container">
                    <Snackbar open={Alert} autoHideDuration={10000} onClick={handleCloseAlert} onClose={handleCloseAlert} anchorOrigin={{vertical:'top', horizontal:'right'}} sx={{mt:6}}>
                        <MuiAlert elevation={6} variant="filled" severity="error" sx={{ width: '100%' }}>
                            {errorMsg}
                        </MuiAlert>
                    </Snackbar>
                    <Card sx={{ width:"fit-content", padding:"15px"}}>
                        <CardContent>
                            <Avatar sx={{ width:80, height:80, bgcolor: "#c6414c" }}>
                                <LockTwoToneIcon sx={{ width:50, height:50 }} />
                            </Avatar>
                            <Typography component="h1" variant="h5" sx={{fontWeight:"bolder"}}>
                                SIGN IN
                            </Typography>
                            <Box component="form" onSubmit={handleSubmit} Validate sx={{ mt: 2, }}>
                                <TextField margin="normal" required fullWidth id="username" label="Email Address" name="username" color="error" onChange={handleChange} autoComplete="username" autoFocus />
                                <TextField 
                                    margin="normal" 
                                    required 
                                    fullWidth 
                                    name="password" 
                                    color="error"
                                    onChange={handleChange} 
                                    label="Password" 
                                    type={showPassword ? 'text' : 'password'}
                                    id="password" 
                                    autoComplete="current-password" 
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end">
                                                <div style={{cursor:'pointer'}} onClick={handleClickShowPassword}>
                                                    {showPassword ? <PasswordTwoToneIcon/> : <AbcTwoToneIcon sx={{fontSize:'30px'}}/> }
                                                </div>
                                            </InputAdornment>,
                                        }}
                                    />
                                <div></div>
                                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, fontSize:'15px', fontWeight:'bold', backgroundColor:"#c6414c",':hover': {bgcolor: '#c6414c'}  }} > 
                                    Sign In 
                                    {Spinner && (<CircularProgress sx={{ml:2, color:'white'}} size={20}/>)}
                                </Button>
                                <Grid container>
                                    <Grid item xs>
                                        <Link href="#" variant="body2" color='#c6414c'>
                                            Forgot password?
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link href="/donors/signup" variant="body2" color='#c6414c'>
                                            Don't have an account? Sign Up
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Box>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    )
}
