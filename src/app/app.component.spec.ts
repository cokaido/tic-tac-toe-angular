import { render, screen } from '@testing-library/angular';
import { AppComponent } from './app.component';

describe('Board', () => {
  it('has 9 cells', async () => {
    const { container } = await render(AppComponent);

    const cells = container.querySelectorAll('.board .cell');

    expect(cells.length).toBe(9);
  });

  it('starts with empty cells', async () => {
    const { container } = await render(AppComponent);

    const cells = container.querySelectorAll('.board .cell');

    cells.forEach((cell) => expect(cell.className).toContain('empty'));
  });
});
