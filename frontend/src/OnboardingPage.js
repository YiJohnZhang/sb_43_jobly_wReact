import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import useAuthenticationDependentRedirect from './hooks/useAuthenticationDependentRedirect';
import useControlledForm from './hooks/useControlledForm';
import useLocalStorage from './hooks/useLocalStorage';
import JoblyAPI from './helpers/api';

// import React from 'react';
// import { Link } from 'react-router-dom';

function OnboardingPage({onboardingMethod}){

	useAuthenticationDependentRedirect(false);

	const history = useHistory();
	const [jwt, setJWT] = useLocalStorage('jwt');

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
			email: '',
			firstName: '',
			lastName: ''
		}

	}
	
	const [formState, setFormState] = useControlledForm(INITIAL_FORM_STATE);
	const [showErrorMessage, setShowErrorMessage] = useState(false);

	function formChangeHandler(evt){

		const {name, value} = evt.target

		setFormState(name, value);

	}

	async function clickHandler(evt){

		evt.preventDefault();

		if(onboardingMethod === 'signup'){

			const response =  await JoblyAPI.register(formState);

			if(response)
				history.push('/companies');

		}else if(onboardingMethod === 'login'){

			const response = await JoblyAPI.login(formState);

			if(response.error){
				
				setShowErrorMessage(true);

			}else{

				console.log(response);
				setJWT(response);
				history.push('/companies');
			
			}

		}

	}

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
				type="password"
				onChange={formChangeHandler}
				value={formState.password}
				/>
			</td>
			</tr>

			{showErrorMessage && <tr><td colSpan={2}>Invalid username/password combination.</td></tr>}
			
			<tr><td colSpan={2}>
				<button className="fullWidth applyButton animation100" onClick={clickHandler}>{onboardingMethod === 'login' ? "Login" : "Register"}</button>
			</td></tr>

			</tbody></table>
		</form>
		
	</div>
	);

}

export default OnboardingPage;