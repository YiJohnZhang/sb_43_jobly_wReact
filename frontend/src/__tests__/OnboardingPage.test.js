import React from 'react';
import { render } from '@testing-library/react';
import OnboardingPage from '../OnboardingPage';

//	Smoke Test
test('OnboardingPage: smoke test', () => {
	render(<OnboardingPage />);
});

//	Snapshot Test (may be applicable if there is context/state that can override props)
test('OnboardingPage: snapshot', () => {

	const {asFragment} = render(<OnboardingPage />);
	expect(asFragment()).toMatchSnapshot();

});