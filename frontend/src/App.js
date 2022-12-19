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

	// Session Username Cookie + Context
	const [sessionUsername, setSessionUsername] = useState(localStorage.getItem('sessionUsername') || undefined);
	const [appliedJobs, setAppliedJobs] = useState(new Set([]));

	useEffect(() => {

		async function getAppliedJobs(){

			// set appliedJobs
			const response = await JoblyAPI.getAppliedJobs(sessionUsername);
			const userAppliedJobs = response.map((element) => element.job_id);

			setAppliedJobs(new Set(userAppliedJobs));

		}
		
		getAppliedJobs();

	}, [sessionUsername]);

	return (
	<UserDetailsContext.Provider value={{sessionUsername, setSessionUsername, appliedJobs, setAppliedJobs}}>
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
