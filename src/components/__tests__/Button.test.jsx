import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import Button from '../Button';

describe('Button', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<Button title="Test Button"/>);
    expect(getByTestId('button')).toBeTruthy();
  });

  it('executes onPress function when clicked', () => {
    const mockOnPress = jest.fn();
    const { getByTestId } = render(<Button title="Test Button" onPress={mockOnPress} />);
    fireEvent.press(getByTestId('button'));
    expect(mockOnPress).toHaveBeenCalled();
  });

  it('applies correct backgroundColor', () => {
    const { getByTestId } = render(<Button title="Test Button" color='red'/>);
    expect(getByTestId('button').props.style.backgroundColor).toEqual('red');
  });
});