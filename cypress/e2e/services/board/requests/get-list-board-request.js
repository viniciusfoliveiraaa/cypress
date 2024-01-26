/// <reference types="cypress"/>

const authorzation = require('../payloads/authorization.json')

function getBoard(id){

    return cy.request({

          method: 'GET',
          url: "boards/" + id + "/lists",
          failOnStatusCode: false,
          qs: authorzation
    })
}

export { getBoard};