import { useEffect } from "react";
import { Link } from "react-router-dom";

function CompanyCard({company = undefined, companyHandle = undefined}){

	// const []

	useEffect(() => {

		async function getCompanyData(handle){

		}

		// only run when the company data is not available beforehand
		if(!company)
			getCompanyData(companyHandle);

		if(!company && !companyHandle)
			throw new Error('CompanyCard.js, see \'if\' error condition');

	}, [companyHandle]);


	if(company){

		const {handle, name, description, numEmployees, logoURL} = company;

		return (
		<div class="listing-container">
		<table><tbody><tr>
			<td>
				<Link to={`/${handle}`}><h1>{name}</h1></Link>
				<p>{description}</p>
				<p><strong>Employees</strong>: {numEmployees}</p>
			</td>	
			<td>{logoURL === undefined ? false : true && <image src={logoURL} alt={`${name} logo`}/>}</td>
			{/* <td>{logoURL && <image src={logoURL} alt={`${name} logo`}/>}</td> */}
		</tr></tbody></table>		
		</div>
		);

	}

	// return (
	// <div class="listing-container">
	// <table><tbody><tr>
	// 	<td>
	// 		<Link to={`/${handle}`}><h1>{name}</h1></Link>
	// 		<p>{description}</p>
	// 		<p><strong>Employees</strong>: {numEmployees}</p>
	// 	</td>	
	// 	<td>{logoURL === undefined ? false : true && <image src={logoURL} alt={`${name} logo`}/>}</td>
	// 	{/* <td>{logoURL && <image src={logoURL} alt={`${name} logo`}/>}</td> */}
	// </tr></tbody></table>		
	// </div>
	// );



}

export default CompanyCard;
// bonus if generalized to "DisplayCard" for jobs too