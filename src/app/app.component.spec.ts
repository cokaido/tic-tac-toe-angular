import { render, screen } from '@testing-library/angular';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

describe('App', () => {
  it('has a board', async () => {
    const { container } = await render(AppComponent, { imports: [AppModule] });

    const board = container.querySelector('.board');

    expect(board).toBeInTheDocument();
  });

  it('has a turn', async () => {
    const { container } = await render(AppComponent, { imports: [AppModule] });

    const turn = container.querySelector('.turn');

    expect(turn).toBeInTheDocument();
  });
});
