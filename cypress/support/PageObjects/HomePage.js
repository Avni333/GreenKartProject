

class HomePage {
     user= "#username"
     password="#password"

    login(username, password) 
    {
       cy.get(this.user).type(username)
       cy.get(this.password).type(password)
       cy.contains('Sign In').click()
       
    }
} 
export default HomePage;
