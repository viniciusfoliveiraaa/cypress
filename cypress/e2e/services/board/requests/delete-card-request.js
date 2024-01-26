/// <reference types="cypress"/>

const authorzation = require('../payloads/authorization.json')

function deleteCard(id){

    return cy.request({

          method: 'DELETE',
          url: "cards/"+ id,
          failOnStatusCode: false,
          qs: authorzation
    })
}

export {deleteCard};