describe('httpGAD tests create user', () => {
   
    const request1 = {
        method: 'POST',
        url: 'http://localhost:3000/api/users',
        body: {
            email: 'Agatea@exa.com',
            firstname: 'Aga',
            lastname: 'Tea',
            password: '123koala23',
            avatar: '789.jpg'
        },
        failOnStatusCode: false
    };

    it('response code should be 201', () => {
        cy.request(request1).then(response => {
            const status = response.status;
            assert.equal(201, status);
            assert.equal('Agatea@exa.com', response.body.email);
        });
    });
});
