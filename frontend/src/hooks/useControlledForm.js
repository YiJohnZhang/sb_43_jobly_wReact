import { useState } from 'react';

function useControlledForm(INITIAL_FORM_STATE){

	const [formState, setFormState] = useState(INITIAL_FORM_STATE);

	function updateFormState(formName, formValue){

		const newFormState = {
			...formState, 
			[formName]: formValue	
		}

		setFormState(newFormState)

	}

	// reset form state, i.e. on submit
	function resetFormState(){

		setFormState(INITIAL_FORM_STATE);

	}

	function overwriteForm(newFormObject){

		setFormState(newFormObject);

	}

	return [formState, updateFormState, resetFormState, overwriteForm];
		// later: formic form validation

}

export default useControlledForm;