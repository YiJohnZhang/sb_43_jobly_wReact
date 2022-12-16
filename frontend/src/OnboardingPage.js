import React from "react";
import { useHistory } from "react-router-dom";

import useAuthenticationDependentRedirect from './hooks/useAuthenticationDependentRedirect';
import useControlledForm from './hooks/useControlledForm';

// import React from 'react';
// import { Link } from 'react-router-dom';

function OnboardingPage({onboardingMethod}){

	const history = useHistory();

	let INITIAL_FORM_STATE;
	if(onboardingMethod === 'login'){

		INITIAL_FORM_STATE = {
			username: '',
			password: ''
		}

	}else{

		INITIAL_FORM_STATE = {
			username: '',
			password: '',
			email: ''
		}

	}
	
	const [formState, setFormState] = useControlledForm(INITIAL_FORM_STATE);

	function formChangeHandler(evt){

		const {name, value} = evt.target

		setFormState(name, value);

	}

	function clickHandler(evt){

		evt.preventDefault();

		// if successful, redirect
			history.push('/');


	}

	//	...
	useAuthenticationDependentRedirect(false);

	return(
	<div className="page">
	
		<form>

			<label htmlFor="username"><strong>Username</strong>: </label>
			<input name="username"
				type="text"
				onChange={formChangeHandler}
				value={formState.username}
				/>

			<label htmlFor="password"><strong>Password</strong>: </label>
			<input name="password"
				type="text"
				onChange={formChangeHandler}
				value={formState.password}
				/>

			{onboardingMethod === "signup" && (
			<React.Fragment>
				<label htmlFor="email"><strong>Email</strong>: </label>
				<input name="email"
					type="text"
					onChange={formChangeHandler}
					value={formState.email}
					/>
			</React.Fragment>)}

			<button onClick={clickHandler}>{onboardingMethod === 'login' ? "Login" : "Register"}</button>

		</form>
		
	</div>
	);

}

export default OnboardingPage;