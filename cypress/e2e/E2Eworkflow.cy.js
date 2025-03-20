describe("End to End Ecomemrece Test",()=>{
    
    it('submit Order',()=>{
    
        cy.visit("https://rahulshettyacademy.com/loginpagePractise/#")
        cy.get("#username").type('rahulshettyacademy')
        cy.get("#password").type('learning')
        cy.contains('Sign In').click()
        //assertion
        cy.contains('Shop Name').should('be.visible')
        cy.get('app-card').should('have.length', 4)

        //Add 1 item in cart
        cy.get('app-card').filter(':contains("Nokia Edge")').then((data)=>{

            cy.wrap(data).should('have.length',1)
            //as there is more Add in that container, so use button along with Add for more specific 
            cy.wrap(data).contains('button','Add').click()
        })

        //Add second item in cart
        cy.get('app-card').eq(0).contains('button','Add').click()
       // cy.get('app-card').eq(2).contains('button','Add').click()
        //Now go to cart by clicking on it, 'a' is a link tag
        cy.contains('a','Checkout').click()
        var sum = 0;
        //Now calculate the total amount and check limit is not crossed
        cy.get('tr>td:nth-child(4)>strong').each(($el)=>{
            // $el.text()= Rs. 65000 , with a space in between, so split it from space and get the amount whose index is [1]
            // index[0] =Rs. and index[1]=65000, after split() then use trim to remove unnecessary spaces in begin and end
           let amount = Number($el.text().split(' ')[1].trim()); // to convert string into Number() or parseInt()
            sum = sum+amount
             }).then(()=>{          //we used then() to make sure that all the elements are iterated and sum is calculated
            expect(sum).to.be.lessThan(200000)   //cypress is async,so we don't want to skip algorithm and go to next line 
             }) // if then() isn't used, then expect() will be executed very first. it is a chai library.

      

        //Now click Do Checkout
        cy.get("button[class='btn btn-success']").click()
        cy.get('#country').type('India')
        cy.get('.suggestions > ul > li > a').click()
        cy.get("label[for='checkbox2']").click()
        cy.get("input[value='Purchase']").click()

        //assert
        cy.get('.alert.alert-success.alert-dismissible').should('contain','Success')
    })

})


