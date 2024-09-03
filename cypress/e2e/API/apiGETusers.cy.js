describe('httpGAD tests GET users', () => {
  it('response code should be 200 and body should not be empty', () => {
    cy.request('http://localhost:3000/api/users').then(response => {
      const status = response.status;
      const body = response.body;

      assert.equal(200, status);
        assert.isNotEmpty(body, 'Response body is not empty');
        cy.log('Response body:', response.body);
    });
  });
});
