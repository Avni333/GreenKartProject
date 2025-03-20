describe('Testcases for Visible', () => {

    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    })
     it('Testcase Approach 1', () => {
    cy.get('.product:visible').should('have.length', 30) //visible is ued to count only visible elements 
     })

    it('Testcase Approach 2', () => {
        //parent-child chaining
        cy.get('.products').find('.product').should('have.length', 30)
    })

    it('Testcase Approach 3', () => {
        //siblings chaining , from 30 elements, now select only 1 element ie at 8th position and add it into cart
        cy.get('.products').find('.product').eq(8).contains('ADD TO CART').click()  
    })

    //Add few elements to Cart
    it.only('Add few element sto Cart',()=>{
        cy.get("input[placeholder='Search for Vegetables and Fruits']").type('ca').type('{enter}')
        cy.get('.products').find('.product').should('have.length', 4)
        console.log('Total products found:' ,4)     // it is not cypress command, it is javascript printing command
        cy.get('.products').find('.product').each(($el,index,$li)=>{
        var name = $el.find('h4.product-name').text()
        if(name.includes('Cashews'))
            {
           cy.wrap($el).find('button').click()
             
         } })
    
    })



})