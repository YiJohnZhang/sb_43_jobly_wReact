import { useState, useEffect } from 'react';

import JoblyAPI from './helpers/api';	// apparently while this idea is good, can't figure out another way to use `useEffect` less.
import useAuthenticationDependentRedirect from './hooks/useAuthenticationDependentRedirect';
import useControlledForm from './hooks/useControlledForm';
import JobCard from "./JobCard";

function JobsPage(){

	useAuthenticationDependentRedirect();

	const INITIAL_FORM_STATE = {searchbar: ''};

	const [matchingJobList, setMatchingJobList] = useState([]);
	const [formState, setFormState] = useControlledForm(INITIAL_FORM_STATE);

	useEffect(() => {

		async function searchJobs(){
			
			try{
				const jobList = await JoblyAPI.searchJobs(formState.searchbar);
				setMatchingJobList(jobList);
			}catch(error){
				console.error(error);
			}

		}

		async function returnAllJobs(){
			
			try{
				const jobList = await JoblyAPI.getAllJobs();
				setMatchingJobList(jobList);
			}catch(error){
				console.error(error);
			}

		}

		if(formState.searchbar){
			searchJobs();
		}else{
			returnAllJobs();
		}

	}, [formState]);

	function formChangeHandler(evt){

		const {name, value} = evt.target

		setFormState(name, value);

	}

	return(
	<div className="page">

		<form className="listingContainer">
			<input name="searchbar"
				type="text"
				placeholder="Search Jobs by Title..."
				onChange={formChangeHandler}
				value={formState.searchbar}
				/>
		</form>

		{matchingJobList.map((jobListing) => (
			<JobCard jobListing={jobListing}
				key={jobListing.id} />
		))}

	</div>
	);

}

export default JobsPage;