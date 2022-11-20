import React from 'react';
import { render } from '@testing-library/react';
import Box from './Box';

it('renders without crashing', function() {
	render(<Box key={1} height={100} width={100} backgroundColor="red" />);
});

it('matches snapshot', function() {
	const { asFragment } = render(<Box key={2} height={200} width={200} backgroundColor="yellow" />);
	expect(asFragment()).toMatchSnapshot();
});
