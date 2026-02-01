import { loginActions } from "../pages/actions/login.actions";

const actions = new loginActions();

describe("Login", () => {
  it("Standard User", () => {
    cy.loginAs("standard");
    actions.verifyHomePage();
    cy.logout();
  });

  it("Locaked Out User", () => {
    cy.loginAs("lockedOut");
    actions.verifyError_loginWithLockedUser();
  });

  it("Problem User", () => {
    cy.loginAs("problem");
    actions.verifyHomePage();
    cy.logout();
  });

  it("Performance Glitch User", () => {
    cy.loginAs("performanceGlitch");
    actions.verifyHomePage();
    cy.logout();
  });

  it("Error User", () => {
    cy.loginAs("error");
    actions.verifyHomePage();
    cy.logout();
  });

  it("Visual User", () => {
    cy.loginAs("visual");
    actions.verifyHomePage();
    cy.logout();
  });

  it("Invalid Credential User", () => {
    cy.loginAs("invalid");
    actions.verifyError_loginWithInvalidUser();
  });
});
