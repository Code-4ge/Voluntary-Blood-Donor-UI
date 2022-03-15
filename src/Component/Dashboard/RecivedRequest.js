import React from 'react'
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';
import './Dashboard.css';

export default function RecivedRequest() {
    return (
        <>
            <div className='request_recived'>
                <p>Blood Request Recivied</p>
                <div className='req_contain'>
                    <div className='single-request'>
                        <span className='bl_type_req'>AB+</span>
                        <p style={{margin:'0 0 0 15px'}}>Neeraj Panmand<br/><span>Pune</span></p>
                        <CheckCircleTwoToneIcon sx={{margin:'0 10px 0 auto'}} color='success'/>
                    </div>
                    <div className='single-request'>
                        <span className='bl_type_req'>AB+</span>
                        <p style={{margin:'0 0 0 15px'}}>Neeraj Panmand<br/><span>Pune</span></p>
                        <CheckCircleTwoToneIcon sx={{margin:'0 10px 0 auto'}} color='success'/>
                    </div>
                    <div className='single-request'>
                        <span className='bl_type_req'>AB+</span>
                        <p style={{margin:'0 0 0 15px'}}>Neeraj Panmand<br/><span>Pune</span></p>
                        <CheckCircleTwoToneIcon sx={{margin:'0 10px 0 auto'}} color='success'/>
                    </div>
                    <div className='single-request'>
                        <span className='bl_type_req'>AB+</span>
                        <p style={{margin:'0 0 0 15px'}}>Neeraj Panmand<br/><span>Pune</span></p>
                        <CheckCircleTwoToneIcon sx={{margin:'0 10px 0 auto'}} color='success'/>
                    </div>
                    <div className='single-request'>
                        <span className='bl_type_req'>AB+</span>
                        <p style={{margin:'0 0 0 15px'}}>Neeraj Panmand<br/><span>Pune</span></p>
                        <CheckCircleTwoToneIcon sx={{margin:'0 10px 0 auto'}} color='success'/>
                    </div>
                    <div className='single-request'>
                        <span className='bl_type_req'>AB+</span>
                        <p style={{margin:'0 0 0 15px'}}>Neeraj Panmand<br/><span>Pune</span></p>
                        <CheckCircleTwoToneIcon sx={{margin:'0 10px 0 auto'}} color='success'/>
                    </div>
                </div>
            </div>
            <div className='achive'>
                <p>Extra div</p>
            </div>
        </>  
    );
}
