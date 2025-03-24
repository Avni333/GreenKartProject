import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
//import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import HomePage from "../../../support/PageObjects/HomePage";
import ProductPage from "../../../support/PageObjects/ProductPage";

const homePage = new HomePage();
const productpage = new ProductPage();

Given("Land on the page", () => {
  cy.visit(Cypress.env("url") + "loginpagePractise/#");
});

When("User login to the application", function() {
  homePage.login(this.data.username, this.data.password);
  productpage.pageValidation().should('be.visible');
  productpage.getCardCount().should('have.length', 4);
});

When("User adds item in the Cart and Do Checkout", function() {
  productpage.addfirstproduct();
  productpage.addproducttoCart(this.data.productName);
  this.cartpage = productpage.CheckoutPage()    //we used this ,so we can use cartpage object inside other function
});

When("Validate the total Price limit", function(){
    this.cartpage.sumofProductsinCart().then(function(sum) {
    expect(sum).to.be.lessThan(200000) 
    })

});

Then("Select the country submit and Verify Thank you message", function() {
  const confirmationPage = this.cartpage.submitOrder();
  confirmationPage.checkoutPage();
  confirmationPage.validateSuccessMessage().should("contain", "Success");
});