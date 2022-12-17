import { useParams } from 'react-router-dom';
// fetch api: jobs that match this company
// import JoblyAPI from '../api';
// note react doesn't support relative imports outside of './src'
import useAuthenticationDependentRedirect from './hooks/useAuthenticationDependentRedirect';
import CompanyCard from './CompanyCard';
import JobCard from './JobCard';

function CompanyPage(){

	useAuthenticationDependentRedirect();

	const {companyHandle} = useParams()

	


	return(
	<div className="page">
	
		<CompanyCard companyHandle={companyHandle}/>
		
		{/* {jobs.map((jobListing) => (
			<JobCard listingCompany={???} jobListing={jobListing}
				key={jobListing.id} />
		))} */}

	</div>
	);

}

export default CompanyPage;