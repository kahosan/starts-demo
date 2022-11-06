import { describe, expect, it } from 'vitest';
import { cleanup, fireEvent, render } from '@testing-library/react';
import App from '../src/App';

describe('<App />', () => {
  const app = render(<App />);

  it('should render', () => {
    expect(app.queryByText('Hello, World!')).toBeTruthy();
  });

  it('increment the counter', () => {
    const button = app.getByRole('button');
    fireEvent.click(button);

    expect(app.queryByText('Count: 1')).toBeTruthy();

    cleanup();
  });
});
