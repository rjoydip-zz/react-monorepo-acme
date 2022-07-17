/// <reference types="cypress" />

it('e2e test', () => {
  cy.visit('/')
  cy.get('[aria-label=greet]').should(
    'have.text',
    'Greeting from @acme/ui Greet component'
  )
})
