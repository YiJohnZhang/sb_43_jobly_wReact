import { Link } from 'react-router-dom';

function CompanyCard({company}){

	const {companyHandle, companyName, ..., companyLogo} = company;

	return (
	<div key={companyHandle} class="listing-container">
	<table><tbody><tr>
		<td>
			<Link to={`/${companyHandle}`}><h1>{companyName}</h1></Link>
			<p></p>
			<ul>
				{/* company details? */}
			</ul>
		</td>	
		<td>{companyLogo && <image src={} alt={`${companyName} logo`}/>}</td>
	</tr></tbody></table>		
	</div>
	);

}

export default CompanyCard;
// bonus if generalized to "DisplayCard" for jobs too