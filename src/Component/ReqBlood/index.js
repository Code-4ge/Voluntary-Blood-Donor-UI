import { IMaskInput } from "react-imask";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import State_City_Data from '../../Service/Data';
import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./ReqBlood.css";



const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
	<IMaskInput
	  {...other}
	  mask="000000"
	  definitions={{
		"#": /[1-9]/
	  }}
	  inputRef={ref}
	  onAccept={(value) => onChange({ target: { name: props.name, value } })}
	  overwrite
	/>
  );
});

TextMaskCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};




const columns = [
	{ field: "id", headerName: "Sr. No.", align:'center', sortable: false, disableColumnMenu: true, width: 70 },
	{ field: "fullName", headerName: "Full name", sortable: false, width: 200, disableColumnMenu: true,
	  valueGetter: (params) =>
		`${params.row.firstName || ""} ${params.row.lastName || ""}`
	},
	{ field: "bloodGroup", headerName: "Blood Group", sortable: false, disableColumnMenu: true, width: 130 },
	{ field: "gender", headerName: "Gender", sortable: false, disableColumnMenu: true, width: 100 },
	{ field: "age", headerName: "Age", sortable: false, disableColumnMenu: true, width: 70},
	{ field: "address", headerName: "Address", sortable: false, disableColumnMenu: true, width: 300, 
	columnSeparator: 0,
		valueGetter: (params) =>
			`${params.row.streetAddress || ""} | ${params.row.state || ""}, ${params.row.city || ""}`
	},
];
  
  const rows = [
	{ id: 1, userID: "Sn11", lastName: "Snow", firstName: "Jon", age: 35, bloodGroup: "A+", gender: "Male", streetAddress:"kalewadi, Pimpri", state:"Maharashtra", city:"Pune"},
	{ id: 2, userID: "La12", lastName: "Lannister", firstName: "Cersei", age: 42, bloodGroup: "A+", gender: "Male", streetAddress:"kalewadi, Pimpri", state:"Maharashtra", city:"Pune"},
	{ id: 3, userID: "La13", lastName: "Lannister", firstName: "Jaime", age: 45, bloodGroup: "A+", gender: "Male", streetAddress:"kalewadi, Pimpri", state:"Maharashtra", city:"Pune"},
	{ id: 4, userID: "St14", lastName: "Stark", firstName: "Arya", age: 16, bloodGroup: "A+", gender: "Male", streetAddress:"kalewadi, Pimpri", state:"Maharashtra", city:"Pune"},
	{ id: 5, userID: "Ta15", lastName: "Targaryen", firstName: "Daenerys", age: null, bloodGroup: "A+", gender: "Male", streetAddress:"kalewadi, Pimpri", state:"Maharashtra", city:"Pune"},
	{ id: 6, userID: "Me16", lastName: "Melisandre", firstName: null, age: 150, bloodGroup: "A+", gender: "Male", streetAddress:"kalewadi, Pimpri", state:"Maharashtra", city:"Pune"},
	{ id: 7, userID: "Cl17", lastName: "Clifford", firstName: "Ferrara", age: 44, bloodGroup: "A+", gender: "Male", streetAddress:"kalewadi, Pimpri", state:"Maharashtra", city:"Pune"},
	{ id: 8, userID: "Fr18", lastName: "Frances", firstName: "Rossini", age: 36, bloodGroup: "A+", gender: "Male", streetAddress:"kalewadi, Pimpri", state:"Maharashtra", city:"Pune"},
	{ id: 9, userID: "Ro19", lastName: "Roxie", firstName: "Harvey", age: 65, bloodGroup: "A+", gender: "Male", streetAddress:"kalewadi, Pimpri", state:"Maharashtra", city:"Pune"}
  ];


  


export default function ReqBlood() {

	const { data } = State_City_Data;
	const State = Object.keys(data);
	const [City, setCity] = useState([]);
	const [searchFor, setSearchFor] = useState({
		bloodGroup:"",
		selectedState:"",
		selectedCity:"",
		pincode:"",
	});
	const BloodTypes = [ 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
	const [selectedRows, setSelectedRows] = React.useState([]);
	
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(searchFor);
	}


	return (
		<>
		<div className="search_donor_container" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/searchblbg.png'})`}}>
			<section>
				<h1><span>Search</span> for <span>Blood Donor</span></h1>
			</section>
			<section>
				<Box component="form" onSubmit={handleSubmit} Validate sx={{ width:"fit-content", margin:"0 auto"}}>
					<div className="search_donor_input">
						<FormControl style={{gridArea:'BlGroup'}} size="small" sx={{width:"200px"}}>
							<InputLabel id="Bl-group-label" color='error' required>Blood Group</InputLabel>
							<Select id="Blood-group" labelId="Bl-group-label" name="bloodGroup" label="Blood Group*" value={searchFor.bloodGroup} color='error' required 
								onChange={(e) => {setSearchFor({...searchFor, [e.target.name]: e.target.value});}}>
								{BloodTypes.map((name, key) => (
									<MenuItem key={key} value={name} >{name}</MenuItem>
								))}
							</Select>
						</FormControl>

						<FormControl style={{gridArea:'State'}} size="small" sx={{width:"200px"}}>
							<InputLabel id="State-label" color='error' required>State</InputLabel>
							<Select id="state" labelId="State-label" name="selectedState" label="State*" value={searchFor.selectedState} color='error' required 
								onChange={(e) => {
									setSearchFor({...searchFor, [e.target.name]: e.target.value});
									setCity(data[e.target.value].cities);
								}}>
								{State.map((name, key) => (
									<MenuItem key={key} value={name} >{name}</MenuItem>
								))}
							</Select>
						</FormControl>

						<FormControl style={{gridArea:'City'}} size="small" sx={{width:"200px"}}>
							<InputLabel id="City-label" color='error' required>City</InputLabel>
							<Select id="city" labelId="City-label" name="selectedCity" label="City*" value={searchFor.selectedCity} color='error' required 
								onChange={(e) => {setSearchFor({...searchFor, [e.target.name]: e.target.value});}}>
								<MenuItem key="default" value="Default" disabled>Select City</MenuItem>
								{City.map((name, key) => (
									<MenuItem key={key} value={name} >{name}</MenuItem>
								))}
							</Select>
						</FormControl>

						<TextField id="pincode" label="Pincode" name="pincode" value={searchFor.pincode} size="small" color='error' autoComplete="pincode" required
							onChange={(e) => {setSearchFor({...searchFor, [e.target.name]: e.target.value});}}
							InputProps={{
								inputComponent: TextMaskCustom
							}}
						/>
					</div>
					<Button type="submit" variant="contained" sx={{ mt: 2, mb: 2, pl:4, pr:4, fontSize:'15px', fontWeight:'bold', backgroundColor:"#c6414c",':hover': {bgcolor: '#c6414c'} }} > 
                        Search 
                        {/* {Spinner && (<CircularProgress sx={{ml:2, color:'white'}} size={20}/>)} */}
                    </Button>
				</Box>
				<div className="search_donor_result">
					<DataGrid
						rows={rows}
						columns={columns}
						pageSize={6}
						rowsPerPageOptions={[6]}
						checkboxSelection
						autoHeight
						style={{backgroundColor:'white'}}
						onSelectionModelChange={(ids) => {
							const selectedIDs = new Set(ids);
							const selectedRows = rows.filter((row) =>
							  selectedIDs.has(row.id),
							);
							setSelectedRows(selectedRows);
						  }}
					/>
					<Button variant="contained" onClick={() => {console.log(selectedRows)}} sx={{ mt: 2, mb: 2, pl:4, pr:4, fontSize:'15px', fontWeight:'bold', backgroundColor:"#c6414c",':hover': {bgcolor: '#c6414c'} }} > 
                        Request 
                        {/* {Spinner && (<CircularProgress sx={{ml:2, color:'white'}} size={20}/>)} */}
                    </Button>
				</div>
			</section>
		</div>
		</>
	);
}
