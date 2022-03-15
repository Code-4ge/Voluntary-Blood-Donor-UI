import React from 'react';
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';
import SentRequest from './SentRequest';
import RecivedRequest from './RecivedRequest';
import Notification from './Notification';
import './Dashboard.css'

export default function Dashboard() {


	return (
		<>
			<div className='dashboard'>
				<section className='user_dash'>
					<section className='profile'>
						<h1>Hi Neeraj,</h1>
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
			</div>
		</>
	);
}
