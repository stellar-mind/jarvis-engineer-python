import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import Button from '../Button'; // add the correct path according to your file structure

test('renders correctly', () => {
  const { getByText } = render(<Button title="Click me" />);

  expect(getByText('Click me')).toBeTruthy();
});

test('executes onPress callback on press', () => {
  const onPress = jest.fn();
  const { getByText } = render(<Button title="Click me" onPress={onPress} />);

  fireEvent.press(getByText('Click me'));

  expect(onPress).toHaveBeenCalled();
});

test('applies correct background color', () => {
  const { getByTestId } = render(<Button title="Click me" color="blue" />);

  expect(getByTestId('button').props.style.backgroundColor).toBe('blue');
});