import { homePageElements } from "../elements/homepage.elements";
import { landingPageElements } from "../elements/landingPage.elements";

const elements = new homePageElements();
const lpEle = new landingPageElements();

export class loginActions {
  verifyHomePage() {
    elements.appLogo().should("be.visible");
    elements.cartIcon().should("be.visible");
    elements.hamburgerMenu().should("be.visible");
    elements.pageTitle().should("be.visible");
    elements.sortOption().should("be.visible");
    elements.products().should("be.visible").and("have.length", 6);
    elements.productImages().should("be.visible").and("have.length", 6);
    elements.productNames().should("be.visible").and("have.length", 6);
    elements.productDescription().should("be.visible").and("have.length", 6);
    elements.productPrice().should("be.visible").and("have.length", 6);
    elements.addToCartButtons().should("be.visible").and("have.length", 6);
  }

  verifyError_loginWithLockedUser() {
    lpEle
      .error()
      .should("be.visible")
      .and("contain.text", "Sorry, this user has been locked out.");
    lpEle.errorIcons().should("be.visible").and("have.length", 2);
    lpEle.errorCloseBtn().should("be.visible").click();
  }

  verifyError_loginWithInvalidUser() {
    lpEle
      .error()
      .should("be.visible")
      .and(
        "contain.text",
        "Username and password do not match any user in this service",
      );
    lpEle.errorIcons().should("be.visible").and("have.length", 2);
    lpEle.errorCloseBtn().should("be.visible").click();
  }
}
