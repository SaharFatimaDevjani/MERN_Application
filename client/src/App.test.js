import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the site header and home hero', () => {
  render(<App />);
  expect(screen.getAllByText(/heaven traders/i).length).toBeGreaterThan(0);
  expect(screen.getByRole('heading', { level: 1, name: /quality products/i })).toBeInTheDocument();
});
