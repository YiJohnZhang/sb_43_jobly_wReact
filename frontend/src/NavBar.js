import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import UserDetailsContext from './context/UserDetailsContext.js'

const ACTIVE_STYLE = {
	fontWeight: 'bold'
}

function NavBar() {

	const {sessionUsername} = useContext(UserDetailsContext);


	return (
	<table id="navigationTable" className='fullWidth'><tbody><tr>

		{/* group 1 (align left) */}
		<td><NavLink exact activeStyle={ACTIVE_STYLE} to="/">Home</NavLink></td>

		{sessionUsername &&
		<React.Fragment>
			<td><NavLink activeStyle={ACTIVE_STYLE} to="/companies">Companies</NavLink></td>
			<td><NavLink activeStyle={ACTIVE_STYLE} to="/jobs">Jobs</NavLink></td>
			<td><NavLink activeStyle={ACTIVE_STYLE} to="/profile">Profile</NavLink></td>
		</React.Fragment>}
		<td className='fullWidth'></td>
		{/* group 2 (align right) */}
			{/* if signed out */}
		{!sessionUsername &&
		<React.Fragment>
			<td><NavLink activeStyle={ACTIVE_STYLE} to="/signup">Sign Up</NavLink></td>
			<td><NavLink activeStyle={ACTIVE_STYLE} to="/login">Login</NavLink></td>
		</React.Fragment>
		}
			{/* if signed in */}
		{sessionUsername &&
		<td><NavLink to="/logout">Logout</NavLink></td>}

	</tr></tbody></table>
	);
}

export default NavBar;