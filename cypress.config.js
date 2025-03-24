const { defineConfig } = require ("cypress");

//const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@cypress/browserify-preprocessor");
// This is required for the preprocessor to be able to generate JSON reports after each run, and more,
//await preprocessor.addCucumberPreprocessorPlugin(on, config);
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprendTransformerToOptions,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");

 //copy-pasted from cucumber document config file
async function setupNodeEvents(on, config)   //async function due to await
{
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    browserify(preprendTransformerToOptions(config, browserify.defaultOptions)),
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}



module.exports = defineConfig({

  defaultCommandTimeout: 6000,
    
  env:{
    url:'https://rahulshettyacademy.com/',
    //userId: 'Anita',
    //password: 'Anita123'
  },
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
   setupNodeEvents,        
   specPattern: 'cypress/e2e/BDD/*.feature'    //specPattern is used to run specific files
  },
});
