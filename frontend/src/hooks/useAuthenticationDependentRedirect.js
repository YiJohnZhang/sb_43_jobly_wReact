import { useHistory } from "react-router-dom";

/**	useAuthenticationDependentRedirect
 *	A hook for client-side redirecting of pages to protect content. Also validates authentication.
 *	@param {boolean} authenticationRequired 
 *		does this page require the presence, absence, or doesn't care of a webtoken?
 */
function useAuthenticationDependentRedirect(authenticationRequired = true, redirectPath = '/'){

	const history = useHistory();

	// sign in required, go to home if not signed in
	if(authenticationRequired && !localStorage.getItem('jwt'))
		history.push('/');
	
	// sign in or signed out doesn't matter
	if(authenticationRequired === undefined){
		return;
	}

	// sign out required, return to previous page if signed in
	if(authenticationRequired === false && localStorage.getItem('jwt'))
		history.goBack();

}

export default useAuthenticationDependentRedirect;