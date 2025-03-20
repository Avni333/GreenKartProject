class ConfirmationPage{

   checkoutPage(){
        cy.get('#country').type('India')
        cy.get('.suggestions > ul > li > a').click()
        //cy.get("label[for='checkbox2']").click()
        cy.get("input[value='Purchase']").click()
            } 
    
    validateSuccessMessage(){
       return  cy.get('.alert.alert-success.alert-dismissible')
    }

}
export default ConfirmationPage;