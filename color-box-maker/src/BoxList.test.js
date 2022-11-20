import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';

function addBox(boxList, height = '200', width = '200', color = 'blue') {
	const heightInput = boxList.getByLabelText('Box Height (px)');
	const widthInput = boxList.getByLabelText('Box Width (px)');
	const backgroundInput = boxList.getByLabelText('Background Color');
	fireEvent.change(backgroundInput, { target: { value: color } });
	fireEvent.change(widthInput, { target: { value: width } });
	fireEvent.change(heightInput, { target: { value: height } });
	const button = boxList.getByText('Add Box');
	fireEvent.click(button);
}

it('renders without crashing', function() {
	render(<BoxList />);
});

it('matches snapshot', function() {
	const { asFragment } = render(<BoxList />);
	expect(asFragment()).toMatchSnapshot();
});

it('can add a new item', function() {
	// box does not exists yet
	expect(screen.queryByText('x')).not.toBeInTheDocument();
});

it('creates a box', function() {
	// box exists
	const boxList = render(<BoxList />);
	addBox(boxList);
	expect(screen.getByText('x')).toBeInTheDocument();
});
