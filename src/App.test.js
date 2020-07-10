import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Notes', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Notes/i);
  expect(linkElement).toBeInTheDocument();
});
