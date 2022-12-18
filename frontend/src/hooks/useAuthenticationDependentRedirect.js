import { useHistory } from "react-router-dom";

/**	useAuthenticationDependentRedirect
 *	A hook for client-side redirecting of pages to protect content. Also validates authentication.
 *	@param {boolean} authenticationRequired 
 *		does this page require the present or absence of valid authentication?
 */
function useAuthenticationDependentRedirect(authenticationRequired = true, redirectPath = '/'){

	// validate authentication token

	const history = useHistory();
/*
	// sign in required, not signed in
	if(authenticationRequired)
		// check user session is signed out
			history.push(redirectPath)
	
	// sign in or signed out doesn't matter
	if(authenticationRequired === undefined)
		history.push(redirectPath)

	// sign out required, signed in
	if(!authenticationRequired)
		// check user session is signed
			history.goBack();
*/
}

export default useAuthenticationDependentRedirect;