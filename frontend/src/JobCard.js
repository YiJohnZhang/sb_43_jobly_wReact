import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import UserDetailsContext from './context/UserDetailsContext';

function JobCard({jobListing, handle, name}){

	const {id, title, salary, equity, companyHandle, companyName } = jobListing;
	const {appliedJobs, isApplied, setAppliedJobs} = useContext(UserDetailsContext);

	useEffect(() => {

	})
	
	function clickHandler(evt, jobID){

		evt.preventDefault();
		
		// toggle job application to api.
		// set appliedjobs.
		setAppliedJobs(jobID);

	}

	return (
	<div className="listingContainer">
		<h1>{title}</h1>
		<ul>
			<li><strong>Salary</strong>: {salary}</li>
			<li><strong>Equity</strong>: {equity === null ? 0 : equity}</li>
			<li><strong>Listed By</strong>: <Link to={`/companies/${companyHandle || handle}`}>{companyName || name}</Link></li>
		</ul>
		<button className={`styledButton part100pxWidth animation100 ${isApplied(id) ? 'appliedButton' :'applyButton'}`} onClick={(evt) => clickHandler(evt, id)}>{isApplied(id) ? 'Applied' : 'Apply'}</button>
		{/* Note: There is no end-point that queries the database to check whether or not the user has applied to this job or not. Therefore this is just for show */}
	</div>
	);

}

export default JobCard;