import { useState, useEffect } from 'react';

function useLocalStorage(propertyKey, defaultValue){

	const [state, setState] = useState(() => {

		let parsedValue;

		try{

			parsedValue = JSON.parse(window.localStorage.getItem(propertyKey) || defaultValue);

		}catch(error){
		}

		return parsedValue;

	});

	useEffect(() => {

		window.localStorage.setItem(propertyKey, state);

	}, [state])

	/**	setProperty(propertyValue)
	 *	Set the value of the Local Storage `propertyKey` with `propertyValue`.
	 *	@param {*} propertyValue
	 */
	function setProperty(propertyValue){

		setState(propertyValue);

	}

	return [state, setProperty];

}

export default useLocalStorage;