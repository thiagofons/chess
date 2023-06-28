import React from 'react';
import { render } from '@testing-library/react';
import App from '../src/App';

test('componente App renderiza corretamente', () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});
