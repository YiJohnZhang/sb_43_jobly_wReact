import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import JoblyAPI from './helpers/api';
import useAuthenticationDependentRedirect from './hooks/useAuthenticationDependentRedirect';
import CompanyCard from './CompanyCard';
import JobCard from './JobCard';


function CompanyPage(){

	useAuthenticationDependentRedirect();

	const {companyHandle} = useParams();
	const [company, setCompany] = useState(false);

	useEffect(() => {

		async function queryCompany(){
	
			try{
				const response = await JoblyAPI.getCompany(companyHandle);
				setCompany(response);
			}catch(error){
				console.error(error);
			}
	
		}
	
		queryCompany();

	}, [companyHandle]);

	return company == false ? <></> :(
	<div className="page">
	
		<CompanyCard company={company}
			key={company.handle} />
		
		{company.jobs.map((jobListing) => (
			<JobCard jobListing={jobListing}
				handle={companyHandle}
				name={company.name}
				key={jobListing.id} />
		))}

	</div>
	);

}

export default CompanyPage;