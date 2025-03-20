Feature: End to End ecommerce validation

Scenario: Checout Page Validation
Given  Land on the page
When User login to the application
And   User adds item in the Cart and Do Checkout
And  Validate the total Price limit
Then Select the country submit and Verify Thank you message