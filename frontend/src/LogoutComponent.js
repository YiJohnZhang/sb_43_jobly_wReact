import { useContext } from "react";
import { useHistory } from "react-router-dom";

import useAuthenticationDependentRedirect from './hooks/useAuthenticationDependentRedirect';
import UserDetailsContext from './context/UserDetailsContext';

function LogoutComponent(){

	useAuthenticationDependentRedirect(false);

	const {setSessionUsername} = useContext(UserDetailsContext);
	const history = useHistory();

	function logout(){

		//	how do i make this a purely behavior and no rendering component?
		setSessionUsername(undefined);
		localStorage.removeItem('jwt');
		localStorage.removeItem('currentUser');
		localStorage.removeItem('jobsApplied');
		history.push('/');
		setTimeout(() => {history.go(0)}, 100);
		// history.go(0);

	}

	logout();

	return null;
}

export default LogoutComponent;