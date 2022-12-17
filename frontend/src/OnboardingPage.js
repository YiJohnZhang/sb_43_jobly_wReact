import React from "react";
import { useHistory } from "react-router-dom";

import useAuthenticationDependentRedirect from './hooks/useAuthenticationDependentRedirect';
import useControlledForm from './hooks/useControlledForm';
import JoblyAPI from './helpers/api';

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

		if(onboardingMethod === 'signup'){

			const response = JoblyAPI.register();

			if(response)
				history.push('/companies');

		}else if(onboardingMethod === 'login'){

			const response = JoblyAPI.login();

			if(response)
				history.push('/companies');

		}

		// stay at page.

	}

	//	...
	useAuthenticationDependentRedirect(false);

	return(
	<div className="page">
	
		<form>
			<table className='formTable'><tbody>
				
			{/* BONUS: make a `useForm()` component that returns a component, changeHandler, submitHandler Hook w/ configurable initial state */}

			{onboardingMethod === "signup" && (
			<React.Fragment>
				<tr>
				<td><label htmlFor="firstName"><strong>First Name</strong>: </label></td>
				<td><input name="firstName"
					type="text"
					onChange={formChangeHandler}
					value={formState.firstName}
					/></td></tr>

				<tr>
				<td><label htmlFor="lastName"><strong>Last Name</strong>: </label></td>
				<td><input name="lastName"
					type="text"
					onChange={formChangeHandler}
					value={formState.lastName}
					/></td></tr>

				<tr>
				<td><label htmlFor="email"><strong>Email</strong>: </label></td>
				<td><input name="email"
					type="text"
					onChange={formChangeHandler}
					value={formState.email}
					/></td></tr>
			</React.Fragment>)}

			<tr>
			<td><label htmlFor="username"><strong>Username</strong>: </label></td>
			<td><input name="username"
				type="text"
				onChange={formChangeHandler}
				value={formState.username}
				/>
			</td>
			</tr>

			<tr>
			<td><label htmlFor="password"><strong>Password</strong>: </label></td>
			<td><input name="password"
				type="text"
				onChange={formChangeHandler}
				value={formState.password}
				/>
			</td>
			</tr>
			
			<tr><td colSpan={2}>
				<button className="fullWidth applyButton animation100" onClick={clickHandler}>{onboardingMethod === 'login' ? "Login" : "Register"}</button>
			</td></tr>

			</tbody></table>
		</form>
		
	</div>
	);

}

export default OnboardingPage;