
import * as postrequest from '../requests/post-board-requests'

describe('Post - Board', () => {

     it('Validar inserção de um board', () => {

        postrequest.postBoard().should((response) => {
            expect(response.status).to.eq(200)
        })
     })
})