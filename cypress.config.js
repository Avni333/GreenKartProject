//const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
//const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
// This is required for the preprocessor to be able to generate JSON reports after each run, and more,
//await preprocessor.addCucumberPreprocessorPlugin(on, config);

const { defineConfig } = require ("cypress");
module.exports = defineConfig({

  defaultCommandTimeout: 6000,
 
  env:{
    url:'https://rahulshettyacademy.com/',
    //userId: 'Anita',
    //password: 'Anita123'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
