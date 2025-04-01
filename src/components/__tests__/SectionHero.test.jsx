import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SectionHero from '../SectionHero';

describe('SectionHero', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<SectionHero />);
    expect(getByTestId('SectionHero')).toBeTruthy();
  });

  it('executes onPress function correctly when button is clicked', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <SectionHero onPress={onPressMock} buttonText="Click me" />
    );

    fireEvent(getByText('Click me'), 'press');

    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('renders correct backgroundColor', () => {
    const { getByTestId } = render(
      <SectionHero backgroundColor="red" />
    );
    
    expect(getByTestId('SectionHero')).toHaveStyle({ backgroundColor: 'red' });
  });
});
