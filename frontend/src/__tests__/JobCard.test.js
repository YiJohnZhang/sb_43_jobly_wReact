import React from 'react';
import { render } from '@testing-library/react';
import JobCard from '../JobCard';

//	Smoke Test
test('JobCard: smoke test', () => {
	render(<JobCard />);
});

//	Snapshot Test (may be applicable if there is context/state that can override props)
test('JobCard: snapshot', () => {

	const {asFragment} = render(<JobCard />);
	expect(asFragment()).toMatchSnapshot();

});