export class homePageElements {
  appLogo() {
    return cy.get(".app_logo");
  }
  cartIcon() {
    return cy.get('a[data-test="shopping-cart-link"]');
  }
  hamburgerMenu() {
    return cy.get("button#react-burger-menu-btn");
  }
  pageTitle() {
    return cy.get('[data-test="title"]');
  }
  sortOption() {
    return cy.get('select[data-test="product-sort-container"]');
  }
  products() {
    return cy.get('[data-test="inventory-item"]');
  }
  productImages() {
    return cy.get("img.inventory_item_img");
  }
  productNames() {
    return cy.get('[data-test="inventory-item-name"]');
  }
  productDescription() {
    return cy.get('[data-test="inventory-item-desc"]');
  }
  productPrice() {
    return cy.get('[data-test="inventory-item-price"]');
  }
  addToCartButtons() {
    return cy.get('button[data-test*="add-to-cart-"]');
  }
  logoutOption() {
    return cy.get('[data-test="logout-sidebar-link"]');
  }
}
