import React, { useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import RequestService from '../../Service/RequestService';
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';
import './Dashboard.css';


function stringAvatar(name) {
	return {
	  children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
	};
}


export default function RecivedRequest() {

    const [Loading, setLoading] = useState(true);
    const [requestList, setRequestList] = useState([]);

    useEffect(() => {
        RequestService.getRecivedRequest()
        .then(res => {
            setRequestList(res.data);
            setLoading(false)
        })
        .catch(err => {
            console.log(err);
        })
    }, []);


    return Loading ? (
        <div>
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
        </div>
    ) : (
        <>
            {requestList.map((data, key) => (
                <div className="recived-card" key={key}>
                    <div className='sender-section'>
                        <Avatar sx={{ width: 40, height: 40 }} {...stringAvatar(data.patientName)} />
                        <div style={{flex: '1'}}>
                            <span style={{fontSize:'18px', letterSpacing:'2px'}}>{data.patientName.toUpperCase()}</span><br/>
                            <p>{data.streetAddress+", "+data.city}</p>
                            <div style={{display:'flex', justifyContent:'space-between'}}>
                                <p>Age: {data.age}</p>
                                <p>Gender: {data.gender}</p>
                            </div>
                            <p>Unit Required: {data.unitsRequired}</p>
                            <p>Contact No.: {data.whatsapp}</p>
                        </div>
                        <div style={{justifySelf:'right'}}>
                            <span style={{backgroundColor:'#bd3b3b', padding:'5px 10px', color:'white', borderRadius:'20px'}}>{data.requiredBloodGroup}</span>
                        </div>
                    </div>
                    <div className='recived-action'>
                        <button id='accept' className="responce-btn"><CheckCircleTwoToneIcon sx={{color:'green'}}/></button>
                        <button id='decline' className="responce-btn"><CancelTwoToneIcon sx={{color:'brown'}} /></button>
                    </div>
                </div>
            ))}
        </>
    );
}
