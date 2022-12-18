// import { useState, useEffect } from 'react';

// function useLocalStorage(propertyKey, defaultValue = ''){

// 	const [state, setState] = useState(() => {

// 		const initialState = localStorage.getItem(propertyKey) || defaultValue;
// 		console.log(`setProperty, initialState: ${initialState}`)
// 		return initialState;

// 	});

// 	useEffect(() => {

// 		if(state){
// 			localStorage.setItem(propertyKey, state);
// 		console.log(`Effect: ${state}`);}

// 	}, [state]);

// 	// /**	setProperty(propertyValue)
// 	//  *	Set the value of the Local Storage `propertyKey` with `propertyValue`.
// 	//  *	@param {*} propertyValue
// 	//  */
// 	 function setProperty(propertyValue){

// 		// setState((state) => {console.log('run'); return propertyValue});
// 		console.log(`setProperty, ${propertyKey} before: ${state}`);
// 		console.log(`setProperty, Passed: ${propertyKey}, ${propertyValue}`);
// 		setState(() => propertyValue);
// 		setState(() => {
// 			console.log('setProperty, asfd')

// 		});
// 		console.log(`${propertyKey} after: ${state}`)

// 	}

// 	return [state, setProperty];

// }

function useLocalStorage(propertyKey, defaultValue = undefined){

	let propertyValue = localStorage.getItem(propertyKey) || defaultValue;

	/**	setProperty(propertyValue)
	 *	Set the value of the Local Storage `propertyKey` with `propertyValue`.
	 *	@param {*} newValue
	 */
	 function setProperty(newValue){

		localStorage.setItem(propertyKey, newValue);

	}

	return [propertyValue, setProperty];

}

export default useLocalStorage;