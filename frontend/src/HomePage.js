import { useContext } from 'react';
import { Link } from 'react-router-dom';

import UserDetailsContext from './context/UserDetailsContext';

function HomePage(){

	const {sessionUsername} = useContext(UserDetailsContext);
	
	return(
	<div className="page">
		
		<div className="part75pctWidth textAlignCenter">
			<h1>Jobly</h1>
			<p>Just <Link to="/jobs">job postings</Link> and <Link to="/companies">companies</Link>.</p>

			{/* if logged in, username */}
			{sessionUsername && <h2>Welcome back, {sessionUsername}</h2>}
		</div>
	</div>
	);

}

export default HomePage;