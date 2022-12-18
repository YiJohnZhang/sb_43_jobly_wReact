import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

const ACTIVE_STYLE = {
	fontWeight: 'bold'
}

const NavBar = () => (
<table id="navigationTable" className='fullWidth'><tbody><tr>

	{/* group 1 (align left) */}
	<td><NavLink exact activeStyle={ACTIVE_STYLE} to="/">Home</NavLink></td>

	{localStorage.getItem('jwt') &&
	<React.Fragment>
		<td><NavLink activeStyle={ACTIVE_STYLE} to="/companies">Companies</NavLink></td>
		<td><NavLink activeStyle={ACTIVE_STYLE} to="/jobs">Jobs</NavLink></td>
		<td><NavLink activeStyle={ACTIVE_STYLE} to="/profile">Profile</NavLink></td>
	</React.Fragment>}
	<td className='fullWidth'></td>
	{/* group 2 (align right) */}
		{/* if signed out */}
	{!localStorage.getItem('jwt') &&
	<React.Fragment>
		<td><NavLink activeStyle={ACTIVE_STYLE} to="/signup">Sign Up</NavLink></td>
		<td><NavLink activeStyle={ACTIVE_STYLE} to="/login">Login</NavLink></td>
	</React.Fragment>
	}
		{/* if signed in */}
	{localStorage.getItem('jwt') &&
	<td><NavLink to="/logout">Logout</NavLink></td>}
	
</tr></tbody></table>
);

export default NavBar;