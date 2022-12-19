import React from 'react';
import { render } from '@testing-library/react';
import NavBar from '../NavBar';

//	Smoke Test
test('NavBar: smoke test', () => {
	render(<NavBar />);
});

//	Snapshot Test (may be applicable if there is context/state that can override props)
test('NavBar: snapshot', () => {

	const {asFragment} = render(<NavBar />);
	expect(asFragment()).toMatchSnapshot();

});