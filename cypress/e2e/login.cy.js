import { errorMessages } from "../../src/components/Login"

describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })
  describe('Error Messages', () => {
    it('Email input throws error for tea@gmail.', () => {
      cy.get('[data-cy="email-input"]').type("tea@gmail.");
      cy.contains(errorMessages.email);
    })
    it('Password input throws error for 1234', () => {
      cy.get('[data-cy="password-input"]').type("1234");
      cy.contains(errorMessages.password);
    })
    it('Button is disabled for unvalidated inputs', () => {
      cy.get('[data-cy="submit-button"]').should("be.disabled");
    })
  })
  describe('Form inputs validated', () => {
    it('button enabled for validated inputs', () => {
      cy.get('[data-cy="email-input"]').type("tea@gmail.com");
      cy.get('[data-cy="password-input"]').type("1234Aa**");
      cy.get('[data-cy="check-control"]').click();
      cy.get('[data-cy="submit-button"]').should("not.be.disabled");
    })
  })
})