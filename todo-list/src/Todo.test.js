import React, { useState } from 'react';
import { render } from '@testing-library/react';
import Todo from './Todo';

it('renders without crashing', function() {
	render(<Todo task="Test" />);
});

it('matches snapshot', function() {
	const { asFragment } = render(<Todo task="test" />);
	expect(asFragment()).toMatchSnapshot();
});
