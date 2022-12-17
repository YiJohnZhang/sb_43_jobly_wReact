import { Link } from 'react-router-dom';

function HomePage(){

	return(
	<div className="page">
		
		<div className='part75pctWidth textAlignCenter'>
			<h1>Jobly</h1>
			<p>Just <Link to="/jobs">job postings</Link> and <Link to="/companies">companies</Link>.</p>

			{/* if logged in, username */}
			<h2>Welcome back, {}</h2>
		</div>
	</div>
	);

}

export default HomePage;