import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button from './Button';

describe('Button component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Button title="Test Button" />);

    expect(getByText('Test Button')).toBeTruthy();
  });

  it('executes onPress function when clicked', () => {
    const onPress = jest.fn();

    const { getByText } = render(<Button title="Test Button" onPress={onPress} />);

    fireEvent.press(getByText('Test Button'));

    expect(onPress).toHaveBeenCalled();
  });

  it('applies correct background color', () => {
    const { getByTestId } = render(<Button title="Test Button" color="#123456" />);

    expect(getByTestId('button')).toHaveStyle({ backgroundColor: '#123456' });
  });
});