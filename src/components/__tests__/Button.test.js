import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import Button from '../Button';

describe('Button component', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<Button title="Test Button" />);

    expect(getByTestId('button')).toBeDefined();
  });

  it('should execute onPress function when clicked', () => {
    const onPress = jest.fn();

    const { getByTestId } = render(<Button title="Test Button" onPress={onPress} />);

    fireEvent.press(getByTestId('button'));

    expect(onPress).toHaveBeenCalled();
  });

  it('should render with correct backgroundColor', () => {
    const { getByTestId } = render(<Button title="Test Button" color="#FF0000" />);

    expect(getByTestId('button')).toHaveStyle({ backgroundColor: '#FF0000' });
  });
});
