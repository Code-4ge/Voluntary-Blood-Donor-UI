import React from 'react';
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';
import './Dashboard.css'

export default function Dashboard() {
	return (
		<>
			<div className='dashboard'>
				<section className='profile'>
					<div>
						<h1>Hi Neeraj,</h1>
						<div className='quote'>
							<p><FormatQuoteRoundedIcon sx={{fontSize:'40px'}}/>Nemo enim ipsam voluptatem quia voluptas sit aspernatur</p>
							<span>A+</span>
						</div>
					</div>
					<div className='services'>
						<div className='rec_post'>
							<p>Recent Request</p>
							<div className='req_contain'>
								<div className='request'>
									<span className='bl_type_req'>AB+</span>
									<p style={{margin:'0 0 0 15px'}}>Neeraj Panmand<br/><span>Pune</span></p>
									<CheckCircleTwoToneIcon sx={{margin:'0 10px 0 auto'}} color='success'/>
								</div>
								<div className='request'>
									<span className='bl_type_req'>AB+</span>
									<p style={{margin:'0 0 0 15px'}}>Neeraj Panmand<br/><span>Pune</span></p>
									<CheckCircleTwoToneIcon sx={{margin:'0 10px 0 auto'}} color='success'/>
								</div>
								<div className='request'>
									<span className='bl_type_req'>AB+</span>
									<p style={{margin:'0 0 0 15px'}}>Neeraj Panmand<br/><span>Pune</span></p>
									<CheckCircleTwoToneIcon sx={{margin:'0 10px 0 auto'}} color='success'/>
								</div>
								<div className='request'>
									<span className='bl_type_req'>AB+</span>
									<p style={{margin:'0 0 0 15px'}}>Neeraj Panmand<br/><span>Pune</span></p>
									<CheckCircleTwoToneIcon sx={{margin:'0 10px 0 auto'}} color='success'/>
								</div>
								<div className='request'>
									<span className='bl_type_req'>AB+</span>
									<p style={{margin:'0 0 0 15px'}}>Neeraj Panmand<br/><span>Pune</span></p>
									<CheckCircleTwoToneIcon sx={{margin:'0 10px 0 auto'}} color='success'/>
								</div>
								<div className='request'>
									<span className='bl_type_req'>AB+</span>
									<p style={{margin:'0 0 0 15px'}}>Neeraj Panmand<br/><span>Pune</span></p>
									<CheckCircleTwoToneIcon sx={{margin:'0 10px 0 auto'}} color='success'/>
								</div>
							</div>
						</div>
						<div className='achive'>
							<p>Extra div</p>
						</div>
					</div>
				</section>
				<section className='notification'>
					<h3>Notification</h3>
					<div className='notice_list'>
						<div className='list-bg'>
							<div className='list'>

							</div>
						</div>
						<div className='list-bg'>
							<div className='list'>

							</div>
						</div>
						<div className='list-bg'>
							<div className='list'>

							</div>
						</div>
						<div className='list-bg'>
							<div className='list'>

							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
