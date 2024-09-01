// describe('httpGAD tests GET user by ID', () => {
//   it('response code should be 200 and body should not be empty', () => {
//     cy.request('http://localhost:3000/api/users/30').then(response => {
//       const status = response.status;
//       const body = response.body;

//       assert.equal(200, status);
//         assert.isNotEmpty(body, 'Response body is not empty');
//         cy.log('Response body:', response.body);
//     });
//   });
// });
describe('httpGAD tests GET user by ID', () => {
  it('response code should be 200 and body should not be empty', () => {
    cy.request({
      method: 'GET',
      url: 'http://localhost:3000/api/users/9',
      headers: {
        'Authorization': 'Bearer your_access_token_here'
      }
    }).then(response => {
      const status = response.status;
      const body = response.body;

      assert.equal(200, status);
      assert.isNotEmpty(body, 'Response body is not empty');
      cy.log('Response body:', response.body);
    });
  });
});
