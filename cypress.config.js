const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ck74c1',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
