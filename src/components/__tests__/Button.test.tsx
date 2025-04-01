import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import Button from './Button'; //Assuming your button component is in the same directory

describe("Button component", () => {

  const mockFunc = jest.fn();
  const { getByTestId } = render(<Button onPress={mockFunc} backgroundColor='red' />);

  it("renders correctly", () => {
    expect(getByTestId("button-component")).toBeDefined();
  });

  it("executes function onPress when clicked", () => {
    const button = getByTestId("button-component");
    fireEvent.press(button);
    expect(mockFunc).toHaveBeenCalled();
  });

  it("applies backgroundColor correctly", () => {
    const button = getByTestId("button-component");
    expect(button.props.style.backgroundColor).toEqual('red');
  });

});