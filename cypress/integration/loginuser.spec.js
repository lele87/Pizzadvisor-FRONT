/// <reference types="Cypress" />

describe("Given a LoginUser Form", () => {
  describe("When the user types a username and a password in the input fields", () => {
    it("Then it should be logged", () => {
      const username = "lelo";
      const password = "lelo";

      cy.visit("/login");

      cy.get("label")
        .contains(/username/i)
        .type(username);

      cy.get("label")
        .contains(/password/i)
        .type(`${password}{enter}`);

      cy.url().should("include", "/home");
    });
  });
});
