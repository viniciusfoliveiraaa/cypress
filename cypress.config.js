const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://api.trello.com/1/',
    video: false
  },
})
