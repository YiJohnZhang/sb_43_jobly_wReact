import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import JoblyAPI from './helpers/api';
import useAuthenticationDependentRedirect from './hooks/useAuthenticationDependentRedirect';
import useControlledForm from './hooks/useControlledForm';
import UserDetailsContext from './context/UserDetailsContext';

function ProfilePage(){

	useAuthenticationDependentRedirect();

	const history = useHistory();

	const INITIAL_FORM_STATE = {firstName:'', lastName: '', email: '', password: ''}
	const [formState, setFormState, resetFormState, overwriteFormState] = useControlledForm(INITIAL_FORM_STATE);
	const {sessionUsername} = useContext(UserDetailsContext);

	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {

		async function prePopulateFormData() {

			const formData = await JoblyAPI.getProfileDetails(sessionUsername);
			overwriteFormState(formData)
			setIsLoading(false);
				// BONUS: create a `isLoading` Hook

		};

		prePopulateFormData();

	}, [])

	// const INITIAL_FORM_STATE = async() => await returnInitialFormState();

	function formChangeHandler(evt){

		const {name, value} = evt.target
		setFormState(name, value);

	}

	function clickHandler(evt){

		evt.preventDefault();

		const result = JoblyAPI.updateProfile(sessionUsername, formState);

		if(result)
			history.push('/');

	}

	return isLoading ? <></>: (
	<div className="page">
		<form>
			<table className='formTable'><tbody>

			{/* BONUS: make a `useForm()` component that returns a component, changeHandler, submitHandler Hook w/ configurable initial state */}

			<tr>
				<td><h1>Update your profile, {formState.username}</h1></td>
			</tr>
			<tr>
			<td><label htmlFor="firstName"><strong>First Name</strong>: </label></td>
			<td><input name="firstName"
				type="text"
				onChange={formChangeHandler}
				value={formState.firstName}
				/></td>
			</tr>

			<tr>
			<td><label htmlFor="lastName"><strong>Last Name</strong>: </label></td>
			<td><input name="lastName"
				type="text"
				onChange={formChangeHandler}
				value={formState.lastName}
				/>
			</td>
			</tr>

			<tr>
			<td><label htmlFor="email"><strong>Email</strong>: </label></td>
			<td><input name="email"
				type="text"
				onChange={formChangeHandler}
				value={formState.email}
				/>
			</td>
			</tr>

			<tr>
			<td><label htmlFor="password"><strong>Change Password</strong>: </label></td>
			<td><input name="password"
				type="passowrd"
				onChange={formChangeHandler}
				value={formState.password}
				/>
			</td>
			</tr>
			
			<tr><td colSpan={2}>
				<button className="styledButton applyButton fullWidth animation100" onClick={clickHandler}>Submit Changes</button>
			</td></tr>

			</tbody></table>
		</form>

	</div>	
	);

}

export default ProfilePage;