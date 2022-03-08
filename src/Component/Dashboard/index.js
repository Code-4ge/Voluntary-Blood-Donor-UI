import React from 'react';
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import './Dashboard.css'

export default function Dashboard() {


	const req_status = [
		{
			name:"Neeraj Panmand",
			bloodGroup:"A+",
			gender:"Male",
			status:"Pending",
		},
		{
			name:"Tushar Sangle",
			bloodGroup:"AB+",
			gender:"Male",
			status:"Approved",
		},
		{
			name:"Taha Yasin",
			bloodGroup:"O+",
			gender:"Male",
			status:"Rejected",
		},
		{
			name:"Neeraj Panmand",
			bloodGroup:"A+",
			gender:"Male",
			status:"Pending",
		},
		{
			name:"Tushar Sangle",
			bloodGroup:"AB+",
			gender:"Male",
			status:"Approved",
		},
		{
			name:"Taha Yasin",
			bloodGroup:"O+",
			gender:"Male",
			status:"Rejected",
		},
		{
			name:"Neeraj Panmand",
			bloodGroup:"A+",
			gender:"Male",
			status:"Pending",
		},
		{
			name:"Tushar Sangle",
			bloodGroup:"AB+",
			gender:"Male",
			status:"Approved",
		},
		{
			name:"Taha Yasin",
			bloodGroup:"O+",
			gender:"Male",
			status:"Rejected",
		}
	]


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
							<p>Blood Request Recivied</p>
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
					<div className='recipient'>
						<p>Blood Request Send</p>
						<TableContainer component={Paper} sx={{maxHeight:'400px'}}>
							<Table sx={{ minWidth: 650 }} aria-label="simple table">
								<TableHead>
									<TableRow>
										<TableCell sx={{fontWeight:'600'}}>SrNo</TableCell>
										<TableCell sx={{fontWeight:'600'}}>Names</TableCell>
										<TableCell sx={{fontWeight:'600'}}>Blood Group</TableCell>
										<TableCell sx={{fontWeight:'600'}}>Gender</TableCell>
										<TableCell sx={{fontWeight:'600'}}>Status</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
								{req_status.map((req, key) => (
									<TableRow
									key={key}
									sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
									>
										<TableCell>{key+1}</TableCell>
										<TableCell component="th" scope="row">
											{req.name}
										</TableCell>
										<TableCell>{req.bloodGroup}</TableCell>
										<TableCell>{req.gender}</TableCell>
										<TableCell><Chip 
											label={req.status} 
											variant="outlined" 
											color={req.status === 'Pending' ? ("default") : (req.status === 'Approved' ? ("success") : ("error"))}
											size="small" /></TableCell>
									</TableRow>
								))}
								</TableBody>
							</Table>
						</TableContainer>
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
