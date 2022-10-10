import createUserFactory from "../factories/userFactory";

beforeEach(() => {
  cy.resetDatabase();
});

describe("Test POST /signup", () => {
  it("Test user registration", () => {
    const user = createUserFactory();
    
    cy.visit("http://localhost:5173/signup");

    cy.get("#username").type(user.username);
    cy.get("#email").type(user.email);
    cy.get("#password").type(user.password);

    cy.contains("Sign Up").click();

    cy.url().should("equal", "http://localhost:5173/");
  });
});
