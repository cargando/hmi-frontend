import { render } from '@testing-library/react';

import TrendsLib from './trends-lib';

describe('TrendsLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TrendsLib />);
    expect(baseElement).toBeTruthy();
  });
});
