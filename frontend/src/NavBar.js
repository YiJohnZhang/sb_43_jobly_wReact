import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import AuthenticationContext from './context/AuthenticationContext';

const ACTIVE_STYLE = {
	fontWeight: 'bold'
}

const NavBar = () => (
<table><tbody><tr>

	{/* group 1 (align left) */}
	<td><NavLink exact activeStyle={ACTIVE_STYLE} to="/">Home</NavLink></td>

		{/* if signed in */}
	<td><NavLink activeStyle={ACTIVE_STYLE} to="/companies">Companies</NavLink></td>
	<td><NavLink activeStyle={ACTIVE_STYLE} to="/jobs">Jobs</NavLink></td>
	<td><NavLink activeStyle={ACTIVE_STYLE} to="/profile">Profile</NavLink></td>

	{/* group 2 (align right) */}
		{/* if signed out */}
	<td><NavLink activeStyle={ACTIVE_STYLE} to="/signup">Sign Up</NavLink></td>
	<td><NavLink activeStyle={ACTIVE_STYLE} to="/login">Login</NavLink></td>
		{/* if signed in */}
	<td><NavLink to="/logout">Logout</NavLink></td>
	
</tr></tbody></table>
);

export default NavBar;