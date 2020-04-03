import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { sum } from './App.js';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Sum 1 + 1 should be equal to 2', () => {
  expect(sum(1, 1)).toBe(2);
});
