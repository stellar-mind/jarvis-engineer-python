import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import Button from '../Button';

describe('Button', () => {
  const onPressMock = jest.fn();

  it('renders correctly', () => {
    const { getByText } = render(<Button onPress={onPressMock} title="Test Button" backgroundColor="#FF0000" />);
    
    expect(getByText('Test Button')).toBeDefined();
  });

  it('calls onPress when pressed', () => {
    const { getByText } = render(<Button onPress={onPressMock} title="Test Button" backgroundColor="#FF0000" />);

    fireEvent.press(getByText('Test Button'));

    expect(onPressMock).toHaveBeenCalled();
  });

  it('applies correct background color', () => {
    const { getByTestId } = render(
      <Button
        onPress={onPressMock}
        title="Test Button"
        backgroundColor="#FF0000"
      />
    );

    expect(getByTestId('button')).toHaveStyle({ backgroundColor: '#FF0000' });
  });
});
