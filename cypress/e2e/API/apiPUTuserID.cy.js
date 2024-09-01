
import { user1Data, newUser1Data } from '../../support/data/apiDataUsers';

describe('httpGAD tests create user', () => {
    let accessToken;

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
            accessToken = response.body.access_token;
            cy.log('Access Token:', accessToken);
        });
    });

    it('response code should be 201 and should return user ID', () => {
        cy.request({
            method: 'PUT',
            url: 'http://localhost:3000/api/users/11',
            body: newUser1Data,
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
            failOnStatusCode: false
        }).then(response => {
            const status = response.status;
            cy.log('Response Status:', status);
            cy.log('Response Body:', response.body);
            assert.equal(200, status);
            assert.equal(newUser1Data.email, response.body.email);
            assert.isNotNull(response.body.id, 'User ID should not be null');
            console.log('Created user ID:', response.body.id);
        });
    });
});
