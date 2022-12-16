// import React from 'react';
// import { Link } from 'react-router-dom';
import useAuthenticationDependentRedirect from './hooks/useAuthenticationDependentRedirect';
import useControlledForm from './hooks/useControlledForm';

function ProfilePage({firstname, lastname, email}){

	useAuthenticationDependentRedirect();

	const INITIAL_FORM_STATE = {firstname, lastname, email, password: ''};

	const [formState, setFormState] = useControlledForm(INITIAL_FORM_STATE);

	function formChangeHandler(){

		const {name, value} = evt.target

		setFormState(name, value);

	}

	function clickHandler(){

		evt.preventDefault();

		// if successful, refresh?
			history.push('/profile');
			// how to referesh?

		

	}

	return(
	<div className="page">

		<form>

			<label htmlFor="firstname"><strong>First Name</strong>: </label>
			<input name="firstname"
				type="text"
				onChange={formChangeHandler}
				value={formState.firstname}
				/>

			<label htmlFor="lastname"><strong>Last Name</strong>: </label>
			<input name="lastname"
				type="text"
				onChange={formChangeHandler}
				value={formState.lastname}
				/>

			<label htmlFor="email"><strong>Email</strong>: </label>
			<input name="email"
				type="text"
				onChange={formChangeHandler}
				value={formState.email}
				/>

			<label htmlFor="password"><strong>Confirm Password</strong>: </label>
			<input name="password"
				type="passowrd"
				onChange={formChangeHandler}
				value={formState.password}
				/>
			
			<button onClick={clickHandler}>Submit Changes</button>
			
		</form>

	</div>	
	);

}

export default ProfilePage;