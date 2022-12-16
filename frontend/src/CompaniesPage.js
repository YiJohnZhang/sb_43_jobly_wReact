import { useState, useEffect } from 'react';

import JoblyAPI from './helpers/api';
import useAuthenticationDependentRedirect from './hooks/useAuthenticationDependentRedirect';
import useControlledForm from './hooks/useControlledForm';
import CompanyCard from './CompanyCard';

function CompaniesPage(){

	useAuthenticationDependentRedirect();

	const INITIAL_FORM_STATE = {searchbar: ''};

	const [matchingCompanyList, setMatchingCompanyList] = useState([]);
	const [formState, setFormState] = useControlledForm(INITIAL_FORM_STATE);

	useEffect(() => {

		async function searchCompanies(){

			const companyList = await JoblyAPI.searchCompanies(formState.searchbar);
			setMatchingCompanyList(companyList);

		}

		async function returnAllCompanies(){

			const companyList = await JoblyAPI.getAllCompanies();
			setMatchingCompanyList(companyList);

		}

		if(formState.searchbar){
			searchCompanies();
		}else{
			returnAllCompanies();
		}

	}, [formState]);

	function formChangeHandler(evt){

		const {name, value} = evt.target

		setFormState(name, value);

	}

	//	...

	return(
	<div className="page">

		<form>

			<input name="searchbar"
				type="text"
				placeholder="Search Companies..."
				onChange={formChangeHandler}
				value={formState.searchbar}
				/>

		</form>

		{matchingCompanyList.map((company) => (
			<CompanyCard key={company.companyHandle} company={company}/>
		))}

		
	</div>
	);

}

export default CompaniesPage;
// todo: maybe make a useDynamicSearch Hook for qol
// rofl challenge: generalize this for jobs; but that will take a eval operator?