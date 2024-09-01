import { user1Data } from '../../support/data/apiDataUsers';
describe('httpGAD tests create user', () => {
   
    const request1 = {
        method: 'POST',
        url: 'http://localhost:3000/api/users',
        body: user1Data,
        failOnStatusCode: false
    };

    it('response code should be 201 and should return user ID', () => {
        cy.request(request1).then(response => {
            const status = response.status;
            //const userId = response.body.id;
            assert.equal(201, status);
            assert.equal(user1Data.email, response.body.email);
            assert.isNotNull(response.body.id, 'User ID should not be null');
            cy.log('Created user ID:', response.body.id);
        });
    });
});

