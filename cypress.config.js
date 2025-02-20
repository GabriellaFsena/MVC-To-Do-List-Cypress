const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://todomvc.com/examples/react/dist/' // Define a URL base
  }
});
