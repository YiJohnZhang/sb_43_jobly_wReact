import React from 'react';
import { render } from '@testing-library/react';
import CompanyCard from '../CompanyCard';

//	Smoke Test
test('CompanyCard: smoke test', () => {
	render(<CompanyCard />);
});

//	Snapshot Test (may be applicable if there is context/state that can override props)
test('CompanyCard: snapshot', () => {

	const {asFragment} = render(<CompanyCard />);
	expect(asFragment()).toMatchSnapshot();

});