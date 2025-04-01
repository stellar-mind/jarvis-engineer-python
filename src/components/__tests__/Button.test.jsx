import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import Button from './Button'; // Path to your Button component

describe('<Button />', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Button />);
    getByText('Button');
  });

  it('executes onPress function when clicked', () => {
    const onPress = jest.fn();
    const { getByText } = render(<Button onPress={onPress} />);
    
    fireEvent.press(getByText('Button'));
    
    expect(onPress).toHaveBeenCalled();
  });

  it('applies correct backgroundColor', () => {
    const { getByTestId } = render(<Button />);
    const button = getByTestId('button');
    
    expect(button.props.style.backgroundColor).toBe('blue');
  });
});