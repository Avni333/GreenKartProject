import HomePage from '../support/PageObjects/HomePage';
import ProductPage from '../support/PageObjects/ProductPage'


describe('Test Page', ()=>{
   
     beforeEach(()=>{
        //steps matter,so write step wise
        cy.visit(Cypress.env('url')+"loginpagePractise/#")
        cy.fixture('example.json').then((data)=>{
        const homePage = new HomePage();
        homePage.login(data.username , data.password)
    })
   
    })
    const productpage = new ProductPage()
    

   it('Verify login succesful',()=>{
         productpage.pageValidation().should('be.visible')
   })
   
   it('Verify elements added to Cart',()=>{
    
    productpage.getCardCount().should('have.length', 4)

   })
  
   it('Verify Checkout is succesful',()=>{
    productpage.addfirstproduct()
    productpage.addproducttoCart("Nokia Edge")
    //productpage.addproducttoCart("iphone X")
    const cartpage = productpage.CheckoutPage()
    cartpage.sumofProductsinCart().then((sum)=>{
        expect(sum).to.be.lessThan(200000) 
    })
    const confirmationPage = cartpage.submitOrder()
    confirmationPage.checkoutPage()
    confirmationPage.validateSuccessMessage().should('contain','Success')
   })


   

})