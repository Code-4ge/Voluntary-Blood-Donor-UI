import React from 'react';
import { useState } from "react";
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';
import SentRequest from './SentRequest';
import RecivedRequest from './RecivedRequest';
import Notification from './Notification';
import Avatar from '@mui/material/Avatar';
import './Dashboard.css'
import UserService from '../../Service/UserService';


export default function Dashboard() {

	const [userName, setuserName] = useState(UserService.getUsername());

	return (
		<>
			<div className='dashboard'>
				<div className='user-detail'>
					<div className='detail-card'>
						<Avatar sx={{ width: 50, height: 50}}/>
						<div>
							<span style={{fontSize:'20px', letterSpacing:'2px'}}>NEERAJ PANMAND</span>
							<div className='details'>
								<div>
									<p>Age: 21</p>
									<p>Mobile: 8793044804</p>
								</div>
								<div>
									<p>Address: Maharashtra, Pune</p>
									<p>Email: panmandneeraj@gmail.com</p>
								</div>
							</div>
						</div>
					</div>
					<div className='user-card'>
						<div className='blur-card' style={{filter:'none'}}>
							<div id='card-vector1' style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/Vector_1.png'})`}}></div>
							<div id='card-vector2' style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/Vector_2.png'})`}}></div>
							<div className='user-card-details'>
								<p style={{fontSize:'12px'}}>bronze</p>
								<p>NEERAJ PANMAND</p>
								<p>1234 5678</p>
								<p>A+</p>
							</div>
							<img className='logo2' src={process.env.PUBLIC_URL + '/assets/logo2.png'}/>
						</div>
						<div id="block-card" style={{display:'none'}}>
							<h3>BE DONOR</h3>
							<p>Become a donor to activate card</p>
						</div>
					</div>
				</div>
				<div className='non-donor'>
					<div>
						<h1 style={{color:'#FF5C00', margin:'0 0 0', textShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)'}}>Be A Hero - It’s In Your Blood</h1>
						<span style={{color:'#8F8F8F'}}>Register to be a blood donor, give blood and save lives.</span>
					</div>
					<button id='donor-btn'>BE DONOR</button>
				</div>
				<div className='blood-needed'>
					<p id='section-title'>BLOOD NEEDED</p>
					<div className='needed-card'>
						<RecivedRequest />
					</div>
				</div>
			</div>




			{/* <div className='dashboard'>
				<section className='user_dash'>
					<section className='profile'>
						<h1>Welcome, {userName}</h1>
						<div className='quote'>
							<p><FormatQuoteRoundedIcon sx={{fontSize:'40px'}}/>Nemo enim ipsam voluptatem quia voluptas sit aspernatur</p>
							<span>A+</span>
						</div>
					</section>
					<section className='services'>
						<RecivedRequest />
					</section>
					<section className='request_sent'>
						<p>Blood Request Send</p>
						<SentRequest />
					</section>
				</section>
				<section className='notification'>
					<h3>Notification</h3>
					<Notification />
				</section>
			</div> */}
		</>
	);
}
