describe('Tic tac toe', () => {
  it('Starts with an empty board', () => {
    cy.visit('/');

    cy.get('.board').within(() => {
      cy.get('.cell').should('have.class', 'empty');
    });
  });
});
