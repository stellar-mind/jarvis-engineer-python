import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import Button from '../Button'; // Caminho para o arquivo Button

describe('Button', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Button title="Click me" onPress={() => {}} />);
    getByText('Click me'); // Verificando se o texto do botão está correto
  });

  it('executes onPress function on press', () => {
    const onPressMock = jest.fn(); // Criando um mock para a função onPress
    const { getByText } = render(<Button title="Click me" onPress={onPressMock} />);

    fireEvent.press(getByText('Click me')); // Simulando o pressionamento do botão
    
    expect(onPressMock).toHaveBeenCalled(); // Verificando se a função onPress foi chamada
  });

  it('applies correct backgroundColor', () => {
    const { getByTestId } = render(<Button title="Click me" onPress={() => {}} color="#000000" />); // Garanta que você tem essa prop na sua componente

    expect(getByTestId('button')).toHaveStyle({ backgroundColor: '#000000' }); // Verificando se a cor do botão está correta
  });
});