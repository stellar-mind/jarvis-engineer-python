import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Button } from '../Button';

describe('Button', () => {
    const onPressMock = jest.fn();

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders correctly', () => {
        const { getByText } = render(<Button onPress={onPressMock}>Click Me</Button>);
        expect(getByText('Click Me')).toBeTruthy();
    });

    it('invokes onPress prop when clicked', () => {
        const { getByText } = render(<Button onPress={onPressMock}>Click Me</Button>);
        fireEvent.press(getByText('Click Me'));
        expect(onPressMock).toHaveBeenCalled();
    });

    it('applies background color correctly', () => {
        const { getByTestId } = render(<Button onPress={onPressMock} backgroundColor='blue'/>);
        expect(getByTestId('button')).toHaveStyle({ backgroundColor: 'blue' });
    });
});