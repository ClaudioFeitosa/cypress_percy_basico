describe('Ticketbox', () => {
    beforeEach(() => cy.visit('https://ticketbox-backstopjs-tat.s3.eu-central-1.amazonaws.com/index.html'));
  
    it('Checks for the initial state', () => {
      cy.percySnapshot();
    });

    it('validate format when I have a invald email', () =>{

        cy.get('#email').type('emailinvalido')
        cy.percySnapshot();
    });

  it('enable submition after all mandatory fields are filled', () => {
    cy.fillMandatoryFields();
    cy.percySnapshot();
  })


  it('update agrement base on full name tickets and type', () =>{
    cy.get('#first-name').type('Claudio');
    cy.get('#last-name').type('Feitosa');
    cy.get('#ticket-quantity').select('4');
    cy.get('#vip').check();

    cy.percySnapshot();
  })

  const successfulFormSubmission = 'Shows a success message after form submission'
  it(successfulFormSubmission, () => {
    cy.fillMandatoryFields();
    cy.percySnapshot(successfulFormSubmission, {
      percyCSS: `.success span { display: none; }`
        });
  });
});
