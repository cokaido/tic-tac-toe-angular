import { render, screen } from '@testing-library/angular';
import { BoardComponent } from './board.component';

describe('Board', () => {
  it('starts with 9 empty cells', async () => {
    const { container } = await render(BoardComponent);

    const cells = container.querySelectorAll('.board .cell');

    expect(cells.length).toBe(9);
    cells.forEach((cell) => expect(cell.className).toContain('empty'));
  });
});
