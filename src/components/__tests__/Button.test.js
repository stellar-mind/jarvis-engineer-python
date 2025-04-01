import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import Button from '../Button'; 

describe('Button', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Button title="Test Button"/>);
    expect(getByText('Test Button')).toBeTruthy();
  });

  it('executes onPress function when clicked', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(<Button title="Test Button" onPress={onPressMock}/>);
    fireEvent.press(getByText('Test Button'));
    expect(onPressMock).toHaveBeenCalled();
  });

  it('applies the correct background color', () => {
    const { getByTestId } = render(<Button testID="button" title="Test Button" color="#123456"/>);
    expect(getByTestId('button').props.style.backgroundColor).toEqual('#123456');
  });
});