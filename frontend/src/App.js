import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';
import NavBar from './NavBar';
import CompaniesPage from './CompaniesPage';
import CompanyPage from './CompanyPage';
import ProfilePage from './ProfilePage';
import HomePage from './HomePage';
import JobsPage from './JobsPage';
import OnboardingPage from './OnboardingPage';

import ApplicationContext from './context/AuthenticationContext';

function App() {

	return (
	<ApplicationContext.Provider value={}>
		<NavBar/>
		<Switch>
			<Route path="/company/:companyHandle">
				<CompanyPage />
			</Route>
			<Route exact path="/company/">
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
			<Route exact path="/">
				<HomePage />
			</Route>
			<Redirect path="/" />
		</Switch>
	</ApplicationContext.Provider>
	);
}

export default App;
