import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import Button from './Button'; // Supondo que o arquivo do seu componente esteja nesse caminho

describe('Button component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Button title="Test Button" />);
    getByText('Test Button');
  });

  it('executes onPress function when clicked', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(<Button title="Test Button" onPress={onPressMock} />);
    const btn = getByText('Test Button');
    fireEvent.press(btn);
    expect(onPressMock).toHaveBeenCalled();
  });

  it('applies the correct background color', () => {
    const { getByTestId } = render(<Button title="Test Button" color="#000" />);
    const btn = getByTestId('button');
    expect(btn.parent.props.style.backgroundColor).toEqual('#000');
  });
});