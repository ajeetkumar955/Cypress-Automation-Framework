import { homePage } from "../pages/actions/verifyHomePage";
import { landingPageElements } from "../pages/elements/landingPage.elements";
const actions = new homePage();
const lpEle = new landingPageElements();

describe("Login", () => {
  it("Standard User", () => {
    cy.loginAs("standard");
    actions.verifyHomePage();
    cy.logout();
  });

  it("Locaked Out User", () => {
    cy.loginAs("lockedOut");
    lpEle
      .error()
      .should("be.visible")
      .and("contain.text", "Sorry, this user has been locked out.");
    lpEle.errorIcons().should("be.visible").and("have.length", 2);
    lpEle.errorCloseBtn().should("be.visible").click();
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
    lpEle
      .error()
      .should("be.visible")
      .and(
        "contain.text",
        "Username and password do not match any user in this service",
      );
    lpEle.errorIcons().should("be.visible").and("have.length", 2);
    lpEle.errorCloseBtn().should("be.visible").click();
  });
});
