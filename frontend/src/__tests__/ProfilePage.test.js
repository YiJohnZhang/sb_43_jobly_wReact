import React from 'react';
import { render } from '@testing-library/react';
import ProfilePage from '../ProfilePage';

//	Smoke Test
test('ProfilePage: smoke test', () => {
	render(<ProfilePage />);
});

//	Snapshot Test (may be applicable if there is context/state that can override props)
test('ProfilePage: snapshot', () => {

	const {asFragment} = render(<ProfilePage />);
	expect(asFragment()).toMatchSnapshot();

});