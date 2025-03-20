import ConfirmationPage from './ConfirmationPage';
class CartPage{


    sumofProductsinCart(){
        let sum = 0;
        return cy.get('tr>td:nth-child(4)>strong').each(($el)=>{
           let amount = Number($el.text().split(' ')[1].trim()); // to convert string into Number() or parseInt()
           sum = sum+amount }).then(()=>{
            return sum; //it is returning sum value to cy.get() ,so need to another return to return it via function
           })
        
           }


    submitOrder(){
        cy.get("button[class='btn btn-success']").click()
        return new ConfirmationPage()
         }

}

export default CartPage;