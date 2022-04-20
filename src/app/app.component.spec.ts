import { render, screen } from '@testing-library/angular';
import { AppComponent } from './app.component';

describe('SecondTestComponent', () => {
    it('should create', async() => {
        await render(AppComponent);

        expect(screen.getByText('tic-tac-toe-angular app is running!'));
    });
});
