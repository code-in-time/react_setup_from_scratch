describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/') // change URL to match your dev URL
  })
})

describe('Add a Todo', () => {
  it('should test the name input', () => {
    cy.get('input[placeholder="Name"]').type('this is text');
    cy.get('input[placeholder="Name"]').should('have.value','this is text')
    cy.get('input[placeholder="Name"]').should('not.have.value','this is text1')
  })

  it('should test the description input', () => {
    cy.get('input[placeholder="Description"]').type('this is a description');
    cy.get('input[placeholder="Description"]').should('have.value','this is a description')
    cy.get('input[placeholder="Description"]').should('not.have.value','this is a description1')
  })

  it('should test that a Todo is added', () => {
    cy.get('input[placeholder="Name"]').clear() .type('this is text');
    cy.get('input[placeholder="Description"]').clear().type('this is a description');
    cy.get('button.Button').contains('Add Todo').click()

    cy.get('.TodoArea').find('.itemName').contains('this is text')
    cy.get('.TodoArea').find('.itemDesc').contains('this is a description')



  })
})