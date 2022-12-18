import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import UserDetailsContext from './context/UserDetailsContext';
import JoblyAPI from "./helpers/api";

function JobCard({jobListing, handle, name}){

	const {id, title, salary, equity, companyHandle, companyName } = jobListing;
	const {sessionUsername, appliedJobs, setAppliedJobs} = useContext(UserDetailsContext);

	useEffect(() => {

	}, [])
	
	function isApplied(jobID){

		console.log(appliedJobs)
		return appliedJobs.has(jobID);

	}

	function clickHandler(evt, jobID){
	
		async function updateComponentState(){

			const buttonElementByID = document.getElementById(evt.target.id);
			console.log(buttonElementByID)
		
			if(isApplied(jobID)){
				
				// DOESN'T WORK: await to unapply
				const currentAppliedJobs = appliedJobs.delete(jobID);
				const newAppliedJobsSet = new Set(currentAppliedJobs);
				setAppliedJobs(newAppliedJobsSet);
			
			}else{
			
				const response = await JoblyAPI.applyToJobByID(sessionUsername, jobID);
				const currentAppliedJobs = appliedJobs.add(jobID);
				const newAppliedJobsSet = new Set(currentAppliedJobs);
				setAppliedJobs(newAppliedJobsSet);
			
			}

			// Change HTML
			buttonElementByID.innerHTML = evt.target.innerHTML === 'Apply' ? 'Applied' : 'Apply';
			
			// Change Class Name (Styling)
			const eventTargetClassList = [...buttonElementByID.className.split(' ')];
			eventTargetClassList[0] = eventTargetClassList[0] === 'applyButton' ? 'appliedButton' : 'applyButton';
			buttonElementByID.className = eventTargetClassList.join(' ');

		}
	
		evt.preventDefault();
		updateComponentState();

	}

	return (
	<div className="listingContainer">
		<h1>{title}</h1>
		<ul>
			<li><strong>Salary</strong>: {salary}</li>
			<li><strong>Equity</strong>: {equity === null ? 0 : equity}</li>
			<li><strong>Listed By</strong>: <Link to={`/companies/${companyHandle || handle}`}>{companyName || name}</Link></li>
		</ul>
		<button id={`applyTo_job-${id}`} className={`${isApplied(id) ? 'appliedButton' :'applyButton'} styledButton part100pxWidth animation100`} onClick={(evt) => clickHandler(evt, id)}>{isApplied(id) ? 'Applied' : 'Apply'}</button>
		{/* Note: There is no end-point that queries the database to check whether or not the user has applied to this job or not. Therefore this is just for show */}
	</div>
	);

}

export default JobCard;