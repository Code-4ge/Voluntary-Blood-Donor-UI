import React, {useState, useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import RequestService from '../../Service/RequestService';
import UserService from '../../Service/UserService';
import './Dashboard.css';


export default function SentRequest() {



	const [Loading, setLoading] = useState(true);
    const [requestStatusList, setRequesStatustList] = useState([]);

    useEffect(() => {
        RequestService.getRequestsStatus()
        .then(res => {
			console.log(res);
            setRequesStatustList(res.data);
            setLoading(false);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);



	return (
		<>
			<TableContainer component={Paper} sx={{maxHeight:'400px', backgroundColor:'white'}}>
				<Table sx={{ minWidth: 360 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell sx={{fontWeight:'600'}}>SrNo</TableCell>
							<TableCell sx={{fontWeight:'600'}}>Names</TableCell>
							<TableCell sx={{fontWeight:'600'}}>Blood Group</TableCell>
							<TableCell sx={{fontWeight:'600'}}>Gender</TableCell>
							<TableCell sx={{fontWeight:'600'}}>Status</TableCell>
							<TableCell sx={{fontWeight:'600'}}>Dist./Time</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
					{requestStatusList.map((req, key) => (
						<TableRow
						key={key}
						sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
						>
							<TableCell>{key+1}</TableCell>
							<TableCell component="th" scope="row">
								{req.donorName}
							</TableCell>
							<TableCell>{req.bloodGroup}</TableCell>
							<TableCell>{req.gender}</TableCell>
							<TableCell><Chip 
								label={req.status} 
								variant="outlined" 
								color={req.status === 'Pending' ? ("default") : (req.status === 'Approved' ? ("success") : ("error"))}
								size="small" /></TableCell>
							<TableCell>{UserService.calculateDistance(req.streetAddress)}</TableCell>
						</TableRow>
					))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
}
