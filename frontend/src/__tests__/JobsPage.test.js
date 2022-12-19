import React from 'react';
import { render } from '@testing-library/react';
import JobsPage from '../JobsPage';

//	Smoke Test
test('JobsPage: smoke test', () => {
	render(<JobsPage />);
});

//	Snapshot Test (may be applicable if there is context/state that can override props)
test('JobsPage: snapshot', () => {

	const {asFragment} = render(<JobsPage />);
	expect(asFragment()).toMatchSnapshot();

});