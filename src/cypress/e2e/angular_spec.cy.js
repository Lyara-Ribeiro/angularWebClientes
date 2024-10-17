describe('Testando minha aplicacao angular', () => {
  it('Deve carregar minha pagina inicial', () => {
    //cy.wait(5000);
    //cy.visit('localhost:4200'); // Sem barra no final
   cy.visit('https://buscacepinter.correios.com.br/app/endereco/index.php'); // Sem barra no final
           // Digitar o endereço no campo de busca
           cy.get('#endereco').type('sqs 416');

           // Esperar um momento para que a sugestão apareça
           cy.wait(1000); // Espera um segundo para que as sugestões sejam carregadas
   
           // Selecionar o dropdown de CEP Promocional
           cy.get('select[name="tipo"]').select('CEP Promocional');
   
           // Submeter a busca (caso necessário, dependendo da lógica da página)
           cy.get('#btnBuscar').click();
   
           // Verificar se a página retornou resultados (ajuste conforme necessário)
           cy.url().should('include', 'resultado');
           cy.get('.resultado').should('exist'); // Verifica se a seção de resultado existe
            // Selecionar o dropdown de tipo de busca
        cy.get('select[name="tipo"]').select('CEP Promocional'); // Abre o dropdown e seleciona a opção

        // Submeter a busca (caso necessário, dependendo da lógica da página)
        cy.get('#btnBuscar').click();

        // Verificar se a página retornou resultados (ajuste conforme necessário)
        cy.url().should('include', 'resultado');
        cy.get('.resultado').should('exist'); // Verifica se a seção de resultado exist
       });
   });
   