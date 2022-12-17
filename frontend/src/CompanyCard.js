import { Link } from "react-router-dom";

function CompanyCard({company}){

	const {handle, name, description, numEmployees, logoUrl} = company;
	console.log(logoUrl)

	return (
	<div className="listing-container">
	<table><tbody><tr>
		<td>
			<Link to={`/companies/${handle}`}><h1>{name}</h1></Link>
			<p>{description}</p>
			<p><strong>Employees</strong>: {numEmployees === null ? "Not Available" : numEmployees}</p>
		</td>
		<td>{logoUrl && <image src={logoUrl} alt={`${name} logo`}/>}</td>
	</tr></tbody></table>		
	</div>
	);


}

export default CompanyCard;
// bonus if generalized to "DisplayCard" for jobs too