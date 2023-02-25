/*const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});*/


const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "baseUrl": "https://village-square.pickt.io/",
    "defaultCommandTimeout": 60000,
    "pageLoadTimeout": 60000,
    "viewportHeight": 800,
    "viewportWidth": 1500,

    "reporter": "mocha-junit-reporter",
    "reporterOptions": {
      "mochaFile": "cypress/reports/junit/test-results.[hash].xml",
      "testsuitesTitle": false
    }
  },
});

