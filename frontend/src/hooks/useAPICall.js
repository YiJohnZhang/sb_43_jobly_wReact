import { useEffect } from 'react';
import JoblyAPI from '../helpers/api';

function useFetchAPI(url, options = {}){
	// this uses the `fetch` API rather than AXIOS

	const [response, setResponse] = useState(null);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
		// true?

	useEffect(() => {

		async function fetchData(){
			// work "options" in here

			try {

				const response = await fetch(url);
				const json = await response.json();
				setResponse(json);

			}catch(error){

				setError(error);

			}

			setIsLoading(false);

		}

		fetchData();

	}, [url]);

	return {response, error, isLoading};

}

export default useFetchAPI;