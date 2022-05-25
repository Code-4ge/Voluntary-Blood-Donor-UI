import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import RegistrationService from '../../Service/RegistrationService';


function VerifyAccount() {

    const { token } = useParams();

    const [isConfirm, setConfirm] = useState(null);
    const [Loading, setLoading] = useState(true);

    useEffect(() => {
        const fetch = async (token) => {
            setLoading(true);
            setConfirm(null);
            try{
                const response = await RegistrationService.getEmailVerification(token);
                console.log(response.data);
                if(response.data === "confirmed")
                    setConfirm(true);
                else
                    setConfirm(false);
            }
            catch(error){
              console.log(error);
              setConfirm(false);
            }
            setLoading(false);
      };
      fetch(token);
    }, [token]);
    

    const template = (isConfirm) => {

        var icon = 'error';
        var title = 'Confirmation failed!';
        var text = 'There might be some issue with your account please register again.';
        var url = 'donors/signup';

        if(isConfirm)
        {
            icon = 'success';
            title = 'Good job!';
            text = 'Your have successfully registered as BloodDonor Member.';
            url = '/singin';
        }
        Swal.fire({
            icon: icon,
            title: title,
            text: text,
            confirmButtonText: 'OK',
            allowOutsideClick: false,
            allowEscapeKey: false,
            focusConfirm: true,
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.replace(url);
            }
        });
    }

    return Loading ? (
        <div>
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
        </div>
    ):(
        <>
            {template(isConfirm)}
        </>
    );

}

export default VerifyAccount;

