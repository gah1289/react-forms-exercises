import { render, screen } from '@testing-library/react';
import App from './App';

test('renders H1', () => {
	render(<App />);
	const h1 = screen.getAllByText(/Color/i);
	expect(h1[0]).toBeInTheDocument();
});
