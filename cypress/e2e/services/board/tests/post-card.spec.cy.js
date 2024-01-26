
import * as postcard from '../requests/post-card-request'

describe('Post - Card', () => {

     it('Validar inserção de um card', () => {

        postcard.postCard().should((response) => {
            expect(response.status).to.eq(200)
        })
     })
})