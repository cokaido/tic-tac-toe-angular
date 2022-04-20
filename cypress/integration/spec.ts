describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
    cy.contains('tic-tac-toe-angular app is running!');
  });
});
