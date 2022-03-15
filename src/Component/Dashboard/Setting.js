import React, { useEffect, useState } from 'react';
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import State_City_Data from '../../Service/Data';
import userService from '../../Service/UserService';
import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box';
import './Setting.css';

export default function Setting() {
    
    const [isLoading, setisLoading] = useState(true)
    const [checkedStatus, setCheckedStatus] = useState(true);
    const { data } = State_City_Data;
    const stateList = Object.keys(data);
    const [cityList, setCityList] = useState([]);

    
    // useEffect(() => {
    //     userService.getUsersDetails()
    //     .then(res => {
    //         setisLoading(false);
    //         console.log(res);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })
    // })
    
    
    const handleChange = (event) => {
        console.log(event.target.checked);
        setCheckedStatus(event.target.checked);
    };



    return (
    <div className='setting_container'>
        <section className='setting_sideMenu'>
            <div>
                <h4><a href='#usr_profile'>Profile</a><br/></h4>
                <h4><a href='#usr_pass'>Change Password</a><br/></h4>
                <h4><a href='#usr_location'>Location</a><br/></h4>
                <h4><a href='#usr_status'>Status</a><br/></h4>
                <h4><a href='#usr_signout'>Sign Out</a><br/></h4>
            </div>
        </section>
        <section className='setting_profile'>
            <div id='usr_profile' className='usr_profile'>
                <h2>Profile</h2>
                <Box component="form" Validate sx={{ mt: 2, }}>
                    <div className='setting_form_grid'>
                        <TextField value='Neeraj' id="firstName" label="First Name" name="firstName" variant="filled" size="small" color="error" style={{gridArea:'FName'}} autoComplete="firstName" fullWidth disabled 
                        />

                        <TextField value='Panmand' id="lastName" label="Last Name" name="lastName" variant="filled" size="small" color="error" style={{gridArea:'LName'}} autoComplete="lastName" fullWidth disabled 
                        />
         
                        <TextField value='27/02/2000' id="dateOfBirth" label="Date Of Birth" name="dateOfBirth" variant="filled" size="small" color="error" style={{gridArea:'DoB'}} autoComplete="dateOfBirth" fullWidth disabled 
                        />

                        <TextField value='Male' id="gender" label="Gender" name="gender" variant="filled" size="small" color="error" style={{gridArea:'Gender'}} autoComplete="gender" fullWidth disabled 
                        />

                        <TextField value='A+' id="bloodGroup" label="Blood Group" name="bloodGroup" variant="filled" size="small" color="error" style={{gridArea:'BGroup'}} autoComplete="bloodGroup" fullWidth disabled 
                        />

                        <TextField value='1234567890' id="whatsApp" label="Whatsapp Number" name="whatsAppNumber" variant="filled" size="small" color="error" style={{gridArea:'Phone'}} autoComplete="whatsApp" fullWidth disabled 
                        />

                        <TextField value='lucifer@gmail.com' id="email" label="Email Id" name="username" variant="filled" size="small" color="error" style={{gridArea:'Email'}} autoComplete="email" fullWidth disabled 
                        />

                        <Button type="submit" disabled style={{gridArea:'Btn'}} variant="contained" sx={{ mt: 2, mb: 2, fontSize:'15px', fontWeight:'bold', backgroundColor:"#c6414c",':hover': {bgcolor: '#c6414c'} }} > 
                            Save 
                            {/* {Spinner && (<CircularProgress sx={{ml:2, color:'white'}} size={20}/>)} */}
                        </Button>
                    </div>
                </Box>
            </div>
            <hr style={{height:'1px', margin:'0 70px 70px', border:'0', backgroundColor:'#a5a5a5'}} />
            <div id='usr_pass' className='usr_pass'>
                <h2>Update Password</h2>
                <Box component="form" Validate sx={{ mt: 2, }}>
                    <div style={{display:'grid', gap:'20px'}}>
                        <TextField id="oldPass" label="Old Password" name="oldPass" variant="filled" size="small" color="error" autoComplete="oldPass" 
                        />

                        <TextField id="newPass" label="New Password" name="newPass" variant="filled" size="small" color="error" autoComplete="newPass" 
                        />
            
                        <TextField id="confirmPass" label="Confirm Password" name="confirmPass" variant="filled" size="small" color="error" autoComplete="confirmPass" 
                        />
                    </div>

                        <Button type="submit" variant="contained" sx={{ mt: 2, mb: 2, fontSize:'15px', fontWeight:'bold', backgroundColor:"#c6414c",':hover': {bgcolor: '#c6414c'} }} > 
                            CHANGE 
                            {/* {Spinner && (<CircularProgress sx={{ml:2, color:'white'}} size={20}/>)} */}
                        </Button>
                </Box>
            </div>
            <hr style={{height:'1px', margin:'0 70px 70px', border:'0', backgroundColor:'#a5a5a5'}}/>
            <div id='usr_location' className='usr_location'>
                <h2>Location</h2>
                <Box component="form" Validate sx={{ mt: 2, }}>
                    <div className='setting_location_grid'>
                        <TextField value='666/18 Cult Villa' id="streetAddress" label="Street Address" name="streetAddress" variant="filled" size="small" color="error" style={{gridArea:'Address'}} autoComplete="streetAddress" fullWidth 
                        />

                        <FormControl style={{gridArea:'State'}} variant="filled" size="small" fullWidth>
                            <InputLabel id="State-label" color='error' required>State</InputLabel>
                            <Select id="state" labelId="State-label" name="state" label="State*" value="Bihar" color='error' required 
                                onChange={(e) => {
                                    // setAddress({...Address, [e.target.name] : e.target.value});
                                    setCityList(data[e.target.value].cities);
                                }}>
                                {stateList.map((name, key) => (
                                    <MenuItem key={key} value={name} >{name}</MenuItem>
                                    ))}
                            </Select>
                        </FormControl>

                        <FormControl style={{gridArea:'City'}} variant="filled" size="small" fullWidth>
                            <InputLabel id="City-label" color='error' required>City</InputLabel>
                            <Select id="city" labelId="City-label" name="city" label="City*" value="Patna" color='error' required 
                                onChange={(e) => {
                                    // setAddress({...Address, [e.target.name] : e.target.value});
                                }}>
                                <MenuItem key="default" value="Default" disabled>Select City</MenuItem>
                                {cityList.map((name, key) => (
                                    <MenuItem key={key} value={name} >{name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <TextField value='H666-18' id="pincode" label="Pincode" name="pincode" variant="filled" size="small" color="error" style={{gridArea:'Pin'}} autoComplete="pin" fullWidth 
                        />
                    </div>

                    <Button type="submit" variant="contained" sx={{ mt: 2, mb: 2, pl:4, pr:4, fontSize:'15px', fontWeight:'bold', backgroundColor:"#c6414c",':hover': {bgcolor: '#c6414c'} }} > 
                        Save 
                        {/* {Spinner && (<CircularProgress sx={{ml:2, color:'white'}} size={20}/>)} */}
                    </Button>
                </Box>
            </div>
            <hr style={{height:'1px', margin:'0 70px 70px', border:'0', backgroundColor:'#a5a5a5'}}/>
            <div id='usr_status' className='usr_status'>
                <h2>Avalibility Status</h2>
                <Box component="form" Validate sx={{ mt: 2, }}>
                    <div className='setting_avaliable_grid'>
                        <TextField value='12/06/2021' id="lastDonationDate" label="Last Donation Date" name="lastDonationDate" variant="filled" size="small" color="error" style={{gridArea:'LDD'}} autoComplete="lastDonationDate" fullWidth 
                        />

                        <div style={{gridArea:'Status'}}>
                            <span style={{fontSize:'18px'}}>Are you ready to donate Blood?&nbsp;&nbsp;&nbsp;</span>
                            <Switch checked={checkedStatus} color="error" onChange={handleChange} inputProps={{ 'aria-label': 'controlled' }} />
                        </div>

                        {/* <TextField value='Available' id="status" label="Status" name="status" variant="filled" size="small" color="error" style={{gridArea:'Status'}} autoComplete="status" fullWidth 
                        /> */}
                    </div>

                    <Button type="submit" variant="contained" sx={{ mt: 2, mb: 2, pl:4, pr:4, fontSize:'15px', fontWeight:'bold', backgroundColor:"#c6414c",':hover': {bgcolor: '#c6414c'} }} > 
                        Save 
                        {/* {Spinner && (<CircularProgress sx={{ml:2, color:'white'}} size={20}/>)} */}
                    </Button>
                </Box>
            </div>
        </section>
      </div>
  )
}
