describe('Testando minha aplicacao angular', () => {
  it('Deve carregar minha pagina inicial', () => {
    cy.wait(5000);
    cy.visit('http://localhost:4200'); // Sem barra no final
  })
})
