import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const heading = screen.getByText(/Sundae order/i);
  expect(heading).toBeInTheDocument();
});
