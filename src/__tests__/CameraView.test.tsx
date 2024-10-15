import React from 'react';
import { render } from '@testing-library/react-native';
import CameraView from '../components/CameraView';

describe('CameraView', () => {
  it('renders correctly', () => {
    const { getByText } = render(<CameraView />);
    expect(getByText('Camera View Component')).toBeTruthy();
  });
});