describe('Tic tac toe', () => {
  it('starts with an empty board', () => {
    cy.visit('/');

    cy.get('.board').within(() => {
      cy.get('.cell').should('have.class', 'empty');
    });
  });

  it('starts with the player X', () => {
    cy.visit('/');

    cy.get('.turn').should('have.class', 'turn-X');
  });
});
