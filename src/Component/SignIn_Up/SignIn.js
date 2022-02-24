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
import AuthenticationService from "../../Service/AuthenticationService";
import CircularProgress from '@mui/material/CircularProgress';
import PasswordTwoToneIcon from '@mui/icons-material/PasswordTwoTone';
import AbcTwoToneIcon from '@mui/icons-material/AbcTwoTone';
import InputAdornment from '@mui/material/InputAdornment';

import Navbar from "../Navbar";
import "./SignIn_Up.css"
import { useHistory } from "react-router-dom";


function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {"Copyright © "}<Link href="/" color="inherit" underline="none">BConnect</Link>{" "}{new Date().getFullYear()}{"."}
        </Typography>
    );
}
  

export default function SignIn() {

    const history = useHistory();
    const [showPassword, setShowPassword] = useState(false)
    const [LoginFailed, setLoginFailed] = useState(false);
    const [Spinner, setSpinner] = useState(false);
    const [Users, setUsers] = useState({
        email:"",
        password:""
    });

    const handleChange = (e) => {
        e.persist();
        setUsers({...Users, [e.target.name] : e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSpinner(true);
        AuthenticationService.executeBasicAuthenticationService(Users.email, Users.password)
            .then((res) => {
                console.log(res);
                setSpinner(false);
                AuthenticationService.registerSuccessfulLogin(Users.email, Users.password)
                console.log("looged In, Now redirect to dashboard");
                history.push('/dashboard');
            }).catch((error) => {
                console.log(error)
                setLoginFailed(true);
                console.log('error in login')
            })
      };

      const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
      };

    return (
        <>
            <div id="bg-container">
                <Navbar />
                <div className="sign-container">
                    <div>
                        <Card sx={{ width:"fit-content", padding:"15px"}}>
                            <CardContent>
                                <Avatar sx={{ width:80, height:80, bgcolor: "secondary.main" }}>
                                    <LockTwoToneIcon sx={{ width:50, height:50 }} />
                                </Avatar>
                                <Typography component="h1" variant="h5" sx={{fontWeight:"bolder"}}>
                                    Sign In
                                </Typography>
                                <Box component="form" onSubmit={handleSubmit} Validate sx={{ mt: 2, }}>
                                    <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" onChange={handleChange} autoComplete="email" autoFocus />
                                    <TextField 
                                        margin="normal" 
                                        required 
                                        fullWidth 
                                        name="password" 
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
                                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, fontSize:'15px', fontWeight:'bold' }} > 
                                        Sign In 
                                        {Spinner && (<CircularProgress sx={{ml:2, color:'white'}} size={20}/>)}
                                    </Button>
                                    <Grid container>
                                        <Grid item xs>
                                            <Link href="#" variant="body2">
                                                Forgot password?
                                            </Link>
                                        </Grid>
                                        <Grid item>
                                            <Link href="/SignUp" variant="body2">
                                                Don't have an account? Sign Up
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </CardContent>
                        </Card>
                        <Copyright sx={{ mt: 5, mb: 4 }} />
                    </div>
                </div>
            </div>
        </>
    )
}
