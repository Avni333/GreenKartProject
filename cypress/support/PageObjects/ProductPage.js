import CartPage from './CartPage'

class ProductPage{
    //after login do validation of page
    pageValidation(){
      return  cy.contains('Shop Name')
    }

   //verify page has 4 cards of products
    getCardCount(){
        return cy.get('app-card')
    }
   //Adding  products into the cart

    addfirstproduct()
    {
        cy.get('app-card').eq(0).contains('button','Add').click()
    }
    addproducttoCart(productName)
    {
        cy.get('app-card').filter(`:contains("${productName}")`).then((data)=>{

            cy.wrap(data).should('have.length',1)
            //as there is more Add in that container, so use button along with Add for more specific 
            cy.wrap(data).contains('button','Add').click()
        })
    }

     CheckoutPage(){
        cy.contains('a','Checkout').click()
        return new CartPage()
     }

    
}

export default ProductPage;