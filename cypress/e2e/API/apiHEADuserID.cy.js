describe('httpGAD tests HEAD users by ID - info about user', () => {
  it('response code should be 200 and response headers should not be empty', () => {
    cy.request('HEAD', 'http://localhost:3000/api/users/9').then(response => {
      const status = response.status;
      const headers = response.headers;

      assert.equal(200, status);
      assert.isNotEmpty(headers, 'Response headers is not empty');
      cy.log('Response headers:', response.headers);
    });
  });
});
