import { useState, useEffect } from 'react';

function useLocalStorage(propertyKey, defaultValue){

	const [value, setValue] = useState(() => {

		let parsedValue;

		try{

			parsedValue = JSON.parse(window.localStorage.getItem(propertyKey) || defaultValue);

		}catch(error){
		}

		return parsedValue;

	});

	/**	setProperty(propertyValue)
	 *	Set the value of the Local Storage `propertyKey` with `propertyValue`.
	 *	@param {*} propertyValue
	 */
	 function setProperty(propertyValue){

		// setState((state) => {console.log('run'); return propertyValue});
		const newPropertyValue = propertyValue;
		console.log(newPropertyValue === propertyValue)
		setValue(() => newPropertyValue);
		console.log(value);
		console.log(propertyKey)
		console.log(propertyValue);

	}

	useEffect(() => {

		window.localStorage.setItem(propertyKey, JSON.stringify(value));
		console.log(value);

	}, [value])

	return [value, setProperty];

}

export default useLocalStorage;