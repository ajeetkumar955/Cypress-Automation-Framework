import { homePageElements } from "../elements/homepage.elements";

const elements = new homePageElements();

export class homePage {
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
}
