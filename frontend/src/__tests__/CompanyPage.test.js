import React from 'react';
import { render } from '@testing-library/react';
import CompanyPage from '../CompanyPage';

//	Smoke Test
test('CompanyPage: smoke test', () => {
	render(<CompanyPage />);
});

//	Snapshot Test (may be applicable if there is context/state that can override props)
test('CompanyPage: snapshot', () => {

	const {asFragment} = render(<CompanyPage />);
	expect(asFragment()).toMatchSnapshot();

});