import React from 'react'
import Avatar from '@mui/material/Avatar';
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone';
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';
import './Dashboard.css';


function stringAvatar(name) {
	return {
	  children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
	};
}


export default function RecivedRequest() {
    return (
        <>
        {/* use loop to display repetive card */}
            <div className="recived-card">
                <div className='sender-section'>
                    <Avatar sx={{ width: 40, height: 40 }} {...stringAvatar('Tushar Sangle')} />
                    <div>
                        <span style={{fontSize:'18px', letterSpacing:'2px'}}>TUSHAR SANGLE</span><br/>
                        <p>Maharasthra, Pune</p>
                        <p>Age: 21</p>
                        <p>gender: Male</p>
                    </div>
                </div>
                <div className='recived-action'>
                    <button id='accept' className="responce-btn"><CheckCircleTwoToneIcon sx={{color:'green'}}/></button>
                    <button id='decline' className="responce-btn"><CancelTwoToneIcon sx={{color:'brown'}} /></button>
                </div>
            </div>
            
            <div className="recived-card">
                <div className='sender-section'>
                    <Avatar sx={{ width: 40, height: 40 }} {...stringAvatar('Tushar Sangle')} />
                    <div>
                        <span style={{fontSize:'18px', letterSpacing:'2px'}}>TUSHAR SANGLE</span><br/>
                        <p>Maharasthra, Pune</p>
                        <p>Age: 21</p>
                        <p>gender: Male</p>
                    </div>
                </div>
                <div className='recived-action'>
                    <button id='accept' className="responce-btn"><CheckCircleTwoToneIcon sx={{color:'green'}}/></button>
                    <button id='decline' className="responce-btn"><CancelTwoToneIcon sx={{color:'brown'}} /></button>
                </div>
            </div>
            
            <div className="recived-card">
                <div className='sender-section'>
                    <Avatar sx={{ width: 40, height: 40 }} {...stringAvatar('Tushar Sangle')} />
                    <div>
                        <span style={{fontSize:'18px', letterSpacing:'2px'}}>TUSHAR SANGLE</span><br/>
                        <p>Maharasthra, Pune</p>
                        <p>Age: 21</p>
                        <p>gender: Male</p>
                    </div>
                </div>
                <div className='recived-action'>
                    <button id='accept' className="responce-btn"><CheckCircleTwoToneIcon sx={{color:'green'}}/></button>
                    <button id='decline' className="responce-btn"><CancelTwoToneIcon sx={{color:'brown'}} /></button>
                </div>
            </div>
            
            <div className="recived-card">
                <div className='sender-section'>
                    <Avatar sx={{ width: 40, height: 40 }} {...stringAvatar('Tushar Sangle')} />
                    <div>
                        <span style={{fontSize:'18px', letterSpacing:'2px'}}>TUSHAR SANGLE</span><br/>
                        <p>Maharasthra, Pune</p>
                        <p>Age: 21</p>
                        <p>gender: Male</p>
                    </div>
                </div>
                <div className='recived-action'>
                    <button id='accept' className="responce-btn"><CheckCircleTwoToneIcon sx={{color:'green'}}/></button>
                    <button id='decline' className="responce-btn"><CancelTwoToneIcon sx={{color:'brown'}} /></button>
                </div>
            </div>
            
            <div className="recived-card">
                <div className='sender-section'>
                    <Avatar sx={{ width: 40, height: 40 }} {...stringAvatar('Tushar Sangle')} />
                    <div>
                        <span style={{fontSize:'18px', letterSpacing:'2px'}}>TUSHAR SANGLE</span><br/>
                        <p>Maharasthra, Pune</p>
                        <p>Age: 21</p>
                        <p>gender: Male</p>
                    </div>
                </div>
                <div className='recived-action'>
                    <button id='accept' className="responce-btn"><CheckCircleTwoToneIcon sx={{color:'green'}}/></button>
                    <button id='decline' className="responce-btn"><CancelTwoToneIcon sx={{color:'brown'}} /></button>
                </div>
            </div>
            
            <div className="recived-card">
                <div className='sender-section'>
                    <Avatar sx={{ width: 40, height: 40 }} {...stringAvatar('Tushar Sangle')} />
                    <div>
                        <span style={{fontSize:'18px', letterSpacing:'2px'}}>TUSHAR SANGLE</span><br/>
                        <p>Maharasthra, Pune</p>
                        <p>Age: 21</p>
                        <p>gender: Male</p>
                    </div>
                </div>
                <div className='recived-action'>
                    <button id='accept' className="responce-btn"><CheckCircleTwoToneIcon sx={{color:'green'}}/></button>
                    <button id='decline' className="responce-btn"><CancelTwoToneIcon sx={{color:'brown'}} /></button>
                </div>
            </div>
            
        </>
    );
}
