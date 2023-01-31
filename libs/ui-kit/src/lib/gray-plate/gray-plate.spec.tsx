import { render } from '@testing-library/react';

import GrayPlate from './gray-plate';

describe('GrayPlate', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GrayPlate />);
    expect(baseElement).toBeTruthy();
  });
});
