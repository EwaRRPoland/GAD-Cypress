describe('httpGAD tests login user', () => {
   
    const request1 = {
        method: 'POST',
        url: 'http://localhost:3000/api/login',
        body: {
            email: 'Agatea@exa.com',
            password: '123koala23'
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
