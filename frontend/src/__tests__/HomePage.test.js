import React from 'react';
import { render } from '@testing-library/react';
import HomePage from '../HomePage';

//	Smoke Test
test('HomePage: smoke test', () => {
	render(<HomePage />);
});

//	Snapshot Test (may be applicable if there is context/state that can override props)
test('HomePage: snapshot', () => {

	const {asFragment} = render(<HomePage />);
	expect(asFragment()).toMatchSnapshot();

});