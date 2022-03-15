import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import './Dashboard.css';

export default function SentRequest() {

	const send_request_status = [
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
	];



	return (
		<>
			<TableContainer component={Paper} sx={{maxHeight:'400px', overflowX:'hidden', backgroundColor:'white'}}>
				<Table sx={{ minWidth: 360 }} aria-label="simple table">
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
					{send_request_status.map((req, key) => (
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
		</>
	);
}
