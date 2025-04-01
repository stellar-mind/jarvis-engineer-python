import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import Button from '../Button'; // Substitute with path to your Button component

describe('Button', () => {
  const onPressMock = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render properly', () => {
    const { getByText } = render(<Button title="Test Button" onPress={onPressMock} />);

    expect(getByText('Test Button')).toBeTruthy();
  });

  it('should call onPress when pressed', () => {
    const { getByText } = render(<Button title="Test Button" onPress={onPressMock} />);

    fireEvent.press(getByText('Test Button'));

    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('should apply correct background color', () => {
    const { getByText } = render(<Button title="Test Button" color="red" onPress={onPressMock} />);
    expect(getByText('Test Button').parent.style.backgroundColor).toBe('red');
  });
});