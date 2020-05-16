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
    cy.get('input[placeholder="Description"]').type('this is description');
    cy.get('input[placeholder="Description"]').should('have.value','this is description')
    cy.get('input[placeholder="Description"]').should('not.have.value','this is description')
  })
})