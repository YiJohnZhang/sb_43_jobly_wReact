// fetch api: jobs that match this company
// import JoblyAPI from '../api';
// note react doesn't support relative imports outside of './src'
import { useState, useEffect } from 'react';

import useAuthenticationDependentRedirect from './hooks/useAuthenticationDependentRedirect';
import useControlledForm from './hooks/useControlledForm';
import JobCard from "./JobCard";

function JobsPage(){

	useAuthenticationDependentRedirect();

	const INITIAL_FORM_STATE = {searchbar: ''};

	const [matchingCompanyList, setMatchingCompanyList] = useState([]);
	const [formState, setFormState] = useControlledForm(INITIAL_FORM_STATE);

	function formChangeHandler(evt){

		const {name, value} = evt.target

		setFormState(name, value);

	}

	//	...

	return(
	<div class="page">

		<form>
			<input name="searchbar"
				type="text"
				placeholder="Search Jobs by Title..."
				onChange={formChangeHandler}
				value={formState.searchbar}
				/>
		</form>

		{/* .map((jobListing) => (
			<JobCard listingCompany={companyName} jobListing={jobListing}
				key={jobListing.id} />
		)) */}

	</div>
	);

}

export default JobsPage;