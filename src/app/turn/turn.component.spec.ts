import { render, screen } from '@testing-library/angular';
import { TurnComponent } from './turn.component';

describe('Turn', () => {
  it('display the name of the player', async () => {
    const { container } = await render(TurnComponent, {
      componentProperties: {
        player: 'X',
      },
    });

    const player = container.querySelector('.player');

    expect(player!.innerHTML).toContain('X');
  });
});
