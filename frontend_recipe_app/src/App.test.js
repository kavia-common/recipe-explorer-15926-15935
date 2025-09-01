import { render, screen } from '@testing-library/react';
import App from './App';

test('renders sign in screen', () => {
  render(<App />);
  const signInBtn = screen.getByText(/sign in/i);
  expect(signInBtn).toBeInTheDocument();
});
