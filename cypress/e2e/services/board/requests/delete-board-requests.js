/// <reference types="cypress"/>

const authorzation = require('../payloads/authorization.json')

function deleteBoard(id){

    return cy.request({

          method: 'DELETE',
          url: "boards/"+ id,
          failOnStatusCode: false,
          qs: authorzation
    })
}

export {deleteBoard};