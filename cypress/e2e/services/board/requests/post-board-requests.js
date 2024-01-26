/// <reference types="cypress"/>

const payload = require('../payloads/add-board.json')
const authorzation = require('../payloads/authorization.json')

function postBoard(){

    return cy.request({

          method: 'POST',
          url: "boards",
          failOnStatusCode: false,
          qs: {
            name: payload.name,
            key: authorzation.key,
            token: authorzation.token           
          }
    })
}

export { postBoard};