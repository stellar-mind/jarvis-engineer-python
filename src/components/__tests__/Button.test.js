import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';
import Button from './Button'; // path to your Button component

test('renders correctly', () => {
  const { getByText } = render(<Button title="Test Button" />);
  expect(getByText('Test Button')).toBeTruthy();
});

test('executes onPress on click', () => {
  const onPress = jest.fn();
  const { getByText } = render(<Button title="Test Button" onPress={onPress} />);
  
  fireEvent.press(getByText('Test Button'));
  expect(onPress).toHaveBeenCalled();
});

test('applies correct background color', () => {
  const { getByText } = render(<Button title="Test Button" color="red" />);
  expect(getByText('Test Button').parent.style.backgroundColor).toBe('red');
});