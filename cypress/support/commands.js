import { homePageElements } from "../pages/elements/homePage.elements";
import { landingPageElements } from "../pages/elements/landingPage.elements";
const hpEle = new homePageElements();
const lpEle = new landingPageElements();

Cypress.Commands.add("loginAs", (user) => {
  cy.visit("/");
  lpEle.usernameInput().type(Cypress.env(user));
  lpEle.passwordInput().type(Cypress.env("password"));
  lpEle.loginBtn().click();
});

Cypress.Commands.add("logout", () => {
  hpEle.hamburgerMenu().click();
  hpEle.logoutOption().click();
});
