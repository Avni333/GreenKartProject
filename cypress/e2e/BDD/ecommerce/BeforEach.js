beforeEach(()=>{
    //steps matter,so write step wise
   
    cy.fixture('example.json').then(function(data){
    this.data=data // this.data can be used by other files under the same folder because of cucumber allows it
})
})