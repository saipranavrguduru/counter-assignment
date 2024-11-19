import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';


beforeEach(() => {
  render(<Counter />);
});

test('renders counter message', () => {
  expect(screen.getByText(/Counter/i)).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const countElement = screen.getByTestId('count');
  expect(countElement.textContent).toBe('0');
});

test('clicking + increments the count', () => {
  const countElement = screen.getByTestId('count');
  const incrementButton = screen.getByText('+');

  // Simulate a click on the increment button
  fireEvent.click(incrementButton);

  // Verify the count is incremented
  expect(countElement.textContent).toBe('1');
});

test('clicking - decrements the count', () => {
  const countElement = screen.getByTestId('count');
  const decrementButton = screen.getByText('-');

  // Simulate a click on the decrement button
  fireEvent.click(decrementButton);

  // Verify the count is decremented
  expect(countElement.textContent).toBe('-1');

});
