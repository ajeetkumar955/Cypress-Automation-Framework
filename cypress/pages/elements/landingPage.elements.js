export class landingPageElements {
  logo() {
    return cy.get(".login_logo");
  }
  usernameInput() {
    return cy.get('input[data-test="username"]');
  }
  passwordInput() {
    return cy.get('input[data-test="password"]');
  }
  loginBtn() {
    return cy.get('input[data-test="login-button"]');
  }
  error() {
    return cy.get('h3[data-test="error"]');
  }
  errorCloseBtn() {
    return cy.get('button[data-test="error-button"]');
  }
  errorIcons() {
    return cy.get('svg[data-icon="times-circle"]');
  }
}
