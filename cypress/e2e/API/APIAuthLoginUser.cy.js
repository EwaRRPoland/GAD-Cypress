import { user1Data } from '../../support/data/apiDataUsers';

describe('httpGAD tests login user', () => {
   
    const request1 = {
        method: 'POST',
        url: 'http://localhost:3000/api/login',
        body: {
            email: user1Data.email,
            password: user1Data.password
        },
        failOnStatusCode: false
    };

    it('response code should be 200 and should return access_token', () => {
        cy.request(request1).then(response => {
            const status = response.status;
            assert.equal(200, status);
            assert.isNotNull(response.body.access_token, 'Access token is present');
            cy.log('Access Token:', response.body.access_token);
        });
    });
});
