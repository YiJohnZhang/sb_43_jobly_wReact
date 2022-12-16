import { useState, useEffect } from 'react';

import useControlledForm from './hooks/useControlledForm';
// import JoblyAPI from '../api';
// note react doesn't support relative imports outside of './src'
import CompanyCard from './CompanyCard';

function CompanyPage(){

	const INITIAL_FORM_STATE = {'searchbar': ''};

	const [matchingCompanyList, setMatchingCompanyList] = useState([]);
	const [formState, setFormState] = useControlledForm(INITIAL_FORM_STATE);

	function formChangeHandler(evt){

		const {name, value} = evt.target

		setFormState(name, value);

	}

	// get a useEffect hook to wrap jobliyAPI and 
	useEffect(() => {

	}, [formState])

	return(
	<div className="page">

		<form>
			<input name="searchbar"
				type="text"
				placeholder="Search Companies..."
				onChange={formChangeHandler}
				/>
		</form>

		{/* {companies.map((company) =>	<CompanyCard company={company}/>)} */}

	</div>
	);

}

export default CompanyPage;
// todo: maybe make a useDynamicSearch Hook for qol
// rofl challenge: generalize this for jobs; but that will take a eval operator?