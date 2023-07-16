const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "baseUrl": "https://plug-frontend.vercel.app/register",
    "defaultCommandTimeout": 8000,
    "pageLoadTimeout": 20000,
   "viewportHeight": 800,
   "viewportWidth": 1500
   }
   
   // setupNodeEvents(on, config) {
      // implement node event listeners here
    //},
 // },
});