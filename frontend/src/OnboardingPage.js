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
			<table className='formTable'><tbody>
				
			{/* BONUS: make a `useForm()` component that returns a component, changeHandler, submitHandler Hook w/ configurable initial state */}

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

			<tr>
			{onboardingMethod === "signup" && (
			<React.Fragment>
				<td><label htmlFor="email"><strong>Email</strong>: </label></td>
				<td><input name="email"
					type="text"
					onChange={formChangeHandler}
					value={formState.email}
					/></td>
			</React.Fragment>)}
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