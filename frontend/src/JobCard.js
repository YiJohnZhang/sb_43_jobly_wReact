// use a 'useInLocalStorage` hook (property, value) to search wehther or not it is in localStorage
import { Link } from "react-router-dom";

function JobCard({listingCompany, jobListing}){

	const {title, salary, equity, company_handle} = jobListing
	// company name?

	return (
	<div>
		<h1>{title}</h1>
		<ul>
			<li><strong>Salary</strong>: {salary}</li>
			<li><strong>Equity</strong>: {equity}</li>
			<li><strong>Listed By</strong>: <Link to={`/company/${company_handle}`}>{listingCompany}</Link></li>
		</ul>
		<button onClick={}>Apply</button>
	</div>
	);

}

export default JobCard;