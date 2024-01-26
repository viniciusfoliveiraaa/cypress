import * as postRequest from '../requests/post-board-requests'
import * as deleteRequest from '../requests/delete-board-requests'

describe('Delete - Board', () => {

     it('Validar excluir um board', () => {      

        postRequest.postBoard().then((response)  => {      

            const id =  response.body.id;
            
             deleteRequest.deleteBoard(id).should((response) => {
                expect(response.status).to.eq(200)
             })
        })
     })
})