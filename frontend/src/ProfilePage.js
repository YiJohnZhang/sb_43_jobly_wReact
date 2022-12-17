import React from 'react';
import { useHistory } from 'react-router-dom';
import JoblyAPI from './helpers/api';
import useAuthenticationDependentRedirect from './hooks/useAuthenticationDependentRedirect';
import useControlledForm from './hooks/useControlledForm';

function ProfilePage({firstName, lastName, email}){

	useAuthenticationDependentRedirect();

	const history = useHistory();

	const INITIAL_FORM_STATE = {firstName, lastName, email, password: ''};
	const [formState, setFormState] = useControlledForm(INITIAL_FORM_STATE);

	function formChangeHandler(evt){

		const {name, value} = evt.target

		setFormState(name, value);

	}

	function clickHandler(evt){

		evt.preventDefault();

		const result = JoblyAPI.updateProfile("USERNAME_PLACEHOLDER", formState);
			// todo: PLACEHOLDER HERE

		if(result.data)
			history.push('/profile');
			// how to referesh?

	}

	return(
	<div className="page">

		<form>

			<label htmlFor="firstName"><strong>First Name</strong>: </label>
			<input name="firstName"
				type="text"
				onChange={formChangeHandler}
				value={formState.firstName}
				/>
			<br/>

			<label htmlFor="lastName"><strong>Last Name</strong>: </label>
			<input name="lastName"
				type="text"
				onChange={formChangeHandler}
				value={formState.lastName}
				/>
			<br/>

			<label htmlFor="email"><strong>Email</strong>: </label>
			<input name="email"
				type="text"
				onChange={formChangeHandler}
				value={formState.email}
				/>
			<br/>

			<label htmlFor="password"><strong>Change Password</strong>: </label>
			<input name="password"
				type="passowrd"
				onChange={formChangeHandler}
				value={formState.password}
				/>
			<br/>
			
			<button onClick={clickHandler}>Submit Changes</button>
			
		</form>

	</div>	
	);

}

export default ProfilePage;