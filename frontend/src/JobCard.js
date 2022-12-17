import { Link } from "react-router-dom";

function JobCard({jobListing, handle, name}){

	const {title, salary, equity, companyHandle, companyName } = jobListing;
	
	function clickHandler(evt){

		evt.preventDefault();

	}

	return (
	<div className="listingContainer">
		<h1>{title}</h1>
		<ul>
			<li><strong>Salary</strong>: {salary}</li>
			<li><strong>Equity</strong>: {equity === null ? 0 : equity}</li>
			<li><strong>Listed By</strong>: <Link to={`/companies/${companyHandle || handle}`}>{companyName || name}</Link></li>
		</ul>
		<button className="applyButton animation100" onClick={clickHandler}>Apply</button>
		{/* Note: There is no end-point that queries the database to check whether or not the user has applied to this job or not. Therefore this is just for show */}
	</div>
	);

}

export default JobCard;