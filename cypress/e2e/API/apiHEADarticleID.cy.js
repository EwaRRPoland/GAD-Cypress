describe('httpGAD tests HEAD article by ID - info about article', () => {
  it('response code should be 200 and response headers should not be empty', () => {
    cy.request('HEAD', 'http://localhost:3000/api/articles/40').then(response => {
      const status = response.status;
      const headers = response.headers;

      assert.equal(200, status);
      assert.isNotEmpty(headers, 'Response headers is not empty');
      cy.log('Response headers:', response.headers);
    });
  });
});
