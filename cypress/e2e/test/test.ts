describe('Mi primera prueba automatizada', () => {
  it('Debe visitar una página y verificar el título', () => {
    cy.visit('https://example.cypress.io');
    cy.title().should('include', 'Kitchen Sink');
  });
});
