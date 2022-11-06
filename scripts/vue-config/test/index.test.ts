import { cleanup, fireEvent, render } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import App from '../src/App.vue';

describe('<App />', () => {
  const app = render(App);
  it('should render', () => {
    expect(app.queryByText('Hello, World!')).toBeTruthy();
  });

  it('increment the counter', async () => {
    const button = app.getByRole('button');
    await fireEvent.click(button);

    expect(app.queryByText('Count: 1')).toBeTruthy();

    cleanup();
  });
});
