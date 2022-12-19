import React from 'react';
import { render } from '@testing-library/react';
import CompaniesPage from '../CompaniesPage';

//	Smoke Test
test('CompaniesPage: smoke test', () => {
	render(<CompaniesPage />);
});

//	Snapshot Test (may be applicable if there is context/state that can override props)
test('CompaniesPage: snapshot', () => {

	const {asFragment} = render(<CompaniesPage />);
	expect(asFragment()).toMatchSnapshot();

});