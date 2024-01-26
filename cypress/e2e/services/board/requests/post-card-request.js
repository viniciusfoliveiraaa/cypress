/// <reference types="cypress"/>

const payload = require('../payloads/add-card.json')
const authorzation = require('../payloads/authorization.json')

function postCard(){

    return cy.request({

          method: 'POST',
          url: "cards",
          failOnStatusCode: false,
          qs: {
            idList: payload.idList,
            key: authorzation.key,
            token: authorzation.token           
          }
    })
}

export { postCard};