import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';
import NavBar from './NavBar';
import CompaniesPage from './CompaniesPage';
import CompanyPage from './CompanyPage';
import ProfilePage from './ProfilePage';
import HomePage from './HomePage';
import JobsPage from './JobsPage';
import OnboardingPage from './OnboardingPage';
import LogoutComponent from './LogoutComponent';

import UserDetailsContext from './context/UserDetailsContext';
import JoblyAPI from './helpers/api';

function App() {

	const [sessionUsername, setSessionUsername] = useState(undefined);
	let appliedJobs;

	function isApplied(jobID){
		console.log(appliedJobs)
		console.log(jobID);
		
		console.log(appliedJobs.has(jobID));
		return appliedJobs.has(jobID);

	}

	function setAppliedJobs(jobID){

		if(appliedJobs.has(jobID))
			appliedJobs.delete(jobID);
		
		appliedJobs.add(jobID);

	}

	useEffect(() => {
	
		async function returnJobsList(){

			if(sessionUsername === undefined)
				return [];

			const response = await JoblyAPI.getAppliedJobs(sessionUsername);
			const userAppliedJobs = response.map((element) => element.job_id);
			
			console.log(userAppliedJobs);
			console.log(new Set(userAppliedJobs))
			// const jobSet = new Set(response);
			// console.log(jobSet);
			// return jobSet;
			appliedJobs = new Set(userAppliedJobs);
			return new Set(userAppliedJobs);

		}
		
		returnJobsList();

	}, [sessionUsername]);

	return (
	<UserDetailsContext.Provider value={{sessionUsername, setSessionUsername, appliedJobs, isApplied, setAppliedJobs}}>
		<NavBar/>
		<Switch>
			<Route path="/companies/:companyHandle">
				<CompanyPage />
			</Route>
			<Route exact path="/companies/">
				<CompaniesPage />
			</Route>
			<Route path="/jobs">
				<JobsPage />
			</Route>
			<Route path="/profile">
				<ProfilePage />
			</Route>
			<Route path="/login">
				<OnboardingPage onboardingMethod="login" />
			</Route>
			<Route path="/signup">
				<OnboardingPage onboardingMethod="signup" />
			</Route>
			<Route path="/logout">
				<LogoutComponent />
			</Route>
			<Route exact path="/">
				<HomePage />
			</Route>
			<Redirect to="/" />
		</Switch>
	</UserDetailsContext.Provider>
	);
}

export default App;
