import { Link } from "react-router-dom";

function CompanyCard({company}){

	const {handle, name, description, numEmployees, logoUrl} = company;

	return (
	<div className="listingContainer">
	<table><tbody><tr>
		<td class="card80pcnt">
			<Link to={`/companies/${handle}`}><h1>{name}</h1></Link>
			<p>{description}</p>
			<p><strong>Employees</strong>: {numEmployees === null ? "Not Available" : numEmployees}</p>
		</td>
		<td class="card20pcnt">{logoUrl && <img src={logoUrl} alt={`${name} logo`}/>}</td>
	</tr></tbody></table>		
	</div>
	);


}

export default CompanyCard;
// bonus if generalized to "DisplayCard" for jobs too