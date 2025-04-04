import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import Header from './Header';

describe('Header Component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<Header />);

    expect(getByTestId('header-component')).toBeTruthy();
  });

  it('executes onPress function when button is clicked', () => {
    const onPressMock = jest.fn();

    const { getByTestId } = render(<Header onPress={onPressMock} />);

    fireEvent.press(getByTestId('header-button'));

    expect(onPressMock).toHaveBeenCalled();
  });

  it('applies correct backgroundColor', () => {
    const { getByTestId } = render(<Header backgroundColor="red" />);

    expect(getByTestId('header-component')).toHaveStyle({ backgroundColor: 'red' });
  });
});