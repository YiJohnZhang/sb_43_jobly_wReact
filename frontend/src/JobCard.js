import { Link } from "react-router-dom";

function JobCard({jobListing}){

	const {title, salary, equity, companyHandle, companyName } = jobListing;
	
	function clickHandler(evt){

		evt.preventDefault();

	}

	return (
	<div className="listing-container">
		<h1>{title}</h1>
		<ul>
			<li><strong>Salary</strong>: {salary}</li>
			<li><strong>Equity</strong>: {equity}</li>
			<li><strong>Listed By</strong>: <Link to={`/company/${companyHandle}`}>{companyName}</Link></li>
		</ul>
		<button onClick={clickHandler}>Apply</button>
		{/* Note: There is no end-point that queries the database to check whether or not the user has applied to this job or not. Therefore this is just for show */}
	</div>
	);

}

export default JobCard;