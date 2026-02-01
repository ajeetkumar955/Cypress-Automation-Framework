const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.cy.js",
    baseUrl: process.env.BASE_URL,
    env: {
      standard: process.env.STANDARD,
      lockedOut: process.env.LOCKED_OUT,
      problem: process.env.PROBLEM,
      performanceGlitch: process.env.PERFORMANCE_GLITCH,
      error: process.env.ERROR,
      visual: process.env.VISUAL,
      invalid: process.env.INVALID,
      password: process.env.PASSWORD,
    },

    setupNodeEvents(on, config) {
      return config;
    },
  },
});
