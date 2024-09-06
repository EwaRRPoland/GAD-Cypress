// data users
import { user1Data } from '../../support/data/apiDataUsers';
import { user2Data } from '../../support/data/apiDataUsers';
import { user3Data } from '../../support/data/apiDataUsers';

// data - articles
import { article1Data, article1DataPATCH, newArticle1Data } from '../../support/data/apiDataArticles';
import { article2Data, article2DataPATCH, newArticle2Data } from '../../support/data/apiDataArticles';
import { article3Data, article3DataPATCH, newArticle3Data } from '../../support/data/apiDataArticles';

describe('httpGAD tests create user', () => {
    let accessToken1;
    let accessToken2;
    let accessToken3;
    let userId1;
    let userId2;
    let userId3;
    let articleId1;
    let articleId2;
    let articleId3;

    // create user1
    const request1 = {
        method: 'POST',
        url: 'http://localhost:3000/api/users',
        body: user1Data,
        failOnStatusCode: false
    };

    it('response code should be 201 and should return user ID', () => {
        cy.request(request1).then(response => {
            const status = response.status;
            userId1 = response.body.id; // Store user ID
            assert.equal(201, status);
            assert.equal(user1Data.email, response.body.email);
            assert.isNotNull(userId1, 'User ID should not be null');
            cy.log('Created user ID:', userId1);
        });
    });
    // create user2
    const request2 = {
        method: 'POST',
        url: 'http://localhost:3000/api/users',
        body: user2Data,
        failOnStatusCode: false
    };

    it('response code should be 201 and should return user ID', () => {
        cy.request(request2).then(response => {
            const status = response.status;
            userId2 = response.body.id; // Store user ID
            assert.equal(201, status);
            assert.equal(user2Data.email, response.body.email);
            assert.isNotNull(userId2, 'User ID should not be null');
            cy.log('Created user ID:', userId2);
        });
    });
    // create user3
    const request3 = {
        method: 'POST',
        url: 'http://localhost:3000/api/users',
        body: user3Data,
        failOnStatusCode: false
    };

    it('response code should be 201 and should return user ID', () => {
        cy.request(request3).then(response => {
            const status = response.status;
            userId3 = response.body.id; // Store user ID
            assert.equal(201, status);
            assert.equal(user3Data.email, response.body.email);
            assert.isNotNull(userId3, 'User ID should not be null');
            cy.log('Created user ID:', userId3);
        });
    });

    // login and auth. user1
    const request4 = {
        method: 'POST',
        url: 'http://localhost:3000/api/login',
        body: {
            email: user1Data.email,
            password: user1Data.password
        },
        failOnStatusCode: false
    };

    it('response code should be 200 and should return access_token', () => {
        cy.request(request4).then(response => {
            const status = response.status;
            assert.equal(200, status);
            assert.isNotNull(response.body.access_token, 'Access token is present');
            accessToken1 = response.body.access_token;
            cy.log('Access Token:', accessToken1);
        });
    });
    // login and auth. user2
    const request5 = {
        method: 'POST',
        url: 'http://localhost:3000/api/login',
        body: {
            email: user2Data.email,
            password: user2Data.password
        },
        failOnStatusCode: false
    };

    it('response code should be 200 and should return access_token', () => {
        cy.request(request5).then(response => {
            const status = response.status;
            assert.equal(200, status);
            assert.isNotNull(response.body.access_token, 'Access token is present');
            accessToken2 = response.body.access_token;
            cy.log('Access Token:', accessToken2);
        });
    });
// login and auth. user3
    const request6 = {
        method: 'POST',
        url: 'http://localhost:3000/api/login',
        body: {
            email: user3Data.email,
            password: user3Data.password
        },
        failOnStatusCode: false
    };

    it('response code should be 200 and should return access_token', () => {
        cy.request(request6).then(response => {
            const status = response.status;
            assert.equal(200, status);
            assert.isNotNull(response.body.access_token, 'Access token is present');
            accessToken3 = response.body.access_token;
            cy.log('Access Token:', accessToken3);
        });
        });
    
   // create article1
it('response code should be 201 and should create article1', () => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:3000/api/articles',
        body: article1Data,
        headers: {
            Authorization: `Bearer ${accessToken1}`
        },
        failOnStatusCode: false
    }).then(response => {
        const status = response.status;
        cy.log('Response Status:', status);
        cy.log('Response Body:', response.body);
        articleId1 = response.body.id; // Store article ID
        assert.equal(status, 201, 'Response status should be 201');
        assert.isNotNull(articleId1, 'Article ID should not be null');
        assert.containsAllKeys(response.body, Object.keys(article1Data), 'Response body should contain the request body fields');
        cy.log('Created article ID:', articleId1);
    });
});
    // create article2
it('response code should be 201 and should create article2', () => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:3000/api/articles',
        body: article2Data,
        headers: {
            Authorization: `Bearer ${accessToken2}`
        },
        failOnStatusCode: false
    }).then(response => {
        const status = response.status;
        cy.log('Response Status:', status);
        cy.log('Response Body:', response.body);
        articleId2 = response.body.id; // Store article ID
        assert.equal(status, 201, 'Response status should be 201');
        assert.isNotNull(articleId2, 'Article ID should not be null');
        assert.containsAllKeys(response.body, Object.keys(article2Data), 'Response body should contain the request body fields');
        cy.log('Created article ID:', articleId2);
    });
});
    // create article3
it('response code should be 201 and should create article3', () => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:3000/api/articles',
        body: article3Data,
        headers: {
            Authorization: `Bearer ${accessToken3}`
        },
        failOnStatusCode: false
    }).then(response => {
        const status = response.status;
        cy.log('Response Status:', status);
        cy.log('Response Body:', response.body);
        articleId3 = response.body.id; // Store article ID
        assert.equal(status, 201, 'Response status should be 201');
        assert.isNotNull(articleId3, 'Article ID should not be null');
        assert.containsAllKeys(response.body, Object.keys(article3Data), 'Response body should contain the request body fields');
        cy.log('Created article ID:', articleId3);
    });
});
    
    // update article1 PUT newArticle1Data
it('response code should be 200 and should update newArticle1Data', () => {
    cy.request({
        method: 'PUT',
        url: `http://localhost:3000/api/articles/${articleId1}`,
        body: newArticle1Data,
        headers: {
            Authorization: `Bearer ${accessToken1}`
        },
        failOnStatusCode: false
    }).then(response => {
        const status = response.status;
        cy.log('Response Status:', status);
        cy.log('Response Body:', response.body);
        assert.equal(status, 200, 'Response status should be 200');
        assert.isNotNull(articleId1, 'Article ID should not be null');
        assert.containsAllKeys(response.body, Object.keys(newArticle1Data), 'Response body should contain the updated fields');
        cy.log('Updated article ID:', articleId1);
    });
});
    // update article2 PUT newArticle2Data
it('response code should be 200 and should update newArticle2Data', () => {
    cy.request({
        method: 'PUT',
        url: `http://localhost:3000/api/articles/${articleId2}`,
        body: newArticle2Data,
        headers: {
            Authorization: `Bearer ${accessToken2}`
        },
        failOnStatusCode: false
    }).then(response => {
        const status = response.status;
        cy.log('Response Status:', status);
        cy.log('Response Body:', response.body);
        assert.equal(status, 200, 'Response status should be 200');
        assert.isNotNull(articleId2, 'Article ID should not be null');
        assert.containsAllKeys(response.body, Object.keys(newArticle2Data), 'Response body should contain the updated fields');
        cy.log('Updated article ID:', articleId2);
    });
});
    // update article3 PUT newArticle3Data
it('response code should be 200 and should update newArticle3Data', () => {
    cy.request({
        method: 'PUT',
        url: `http://localhost:3000/api/articles/${articleId3}`,
        body: newArticle3Data,
        headers: {
            Authorization: `Bearer ${accessToken3}`
        },
        failOnStatusCode: false
    }).then(response => {
        const status = response.status;
        cy.log('Response Status:', status);
        cy.log('Response Body:', response.body);
        assert.equal(status, 200, 'Response status should be 200');
        assert.isNotNull(articleId3, 'Article ID should not be null');
        assert.containsAllKeys(response.body, Object.keys(newArticle3Data), 'Response body should contain the updated fields');
        cy.log('Updated article ID:', articleId3);
    });
});


  // delete user1
    it('response code should be 200 and user1 should be deleted', () => {
        cy.request({
            method: 'DELETE',
            url: `http://localhost:3000/api/users/${userId1}`, // Use stored user ID
            headers: {
                Authorization: `Bearer ${accessToken1}`
            },
            failOnStatusCode: false
        }).then(response => {
            const status = response.status;
            cy.log('Response Status:', status);
            assert.equal(200, status);

            // Verify user is deleted by trying to fetch the user
            cy.request({
                method: 'GET',
                url: `http://localhost:3000/api/users/${userId1}`,
                headers: {
                    Authorization: `Bearer ${accessToken1}`
                },
                failOnStatusCode: false
            }).then(getResponse => {
                assert.equal(404, getResponse.status, 'User should not be found');
            });
        });
    });
    // delete user2
    it('response code should be 200 and user2 should be deleted', () => {
        cy.request({
            method: 'DELETE',
            url: `http://localhost:3000/api/users/${userId2}`, // Use stored user ID
            headers: {
                Authorization: `Bearer ${accessToken2}`
            },
            failOnStatusCode: false
        }).then(response => {
            const status = response.status;
            cy.log('Response Status:', status);
            assert.equal(200, status);

            // Verify user is deleted by trying to fetch the user
            cy.request({
                method: 'GET',
                url: `http://localhost:3000/api/users/${userId2}`,
                headers: {
                    Authorization: `Bearer ${accessToken2}`
                },
                failOnStatusCode: false
            }).then(getResponse => {
                assert.equal(404, getResponse.status, 'User should not be found');
            });
        });
    });
    // delete user3
    it('response code should be 200 and user3 should be deleted', () => {
        cy.request({
            method: 'DELETE',
            url: `http://localhost:3000/api/users/${userId3}`, // Use stored user ID
            headers: {
                Authorization: `Bearer ${accessToken3}`
            },
            failOnStatusCode: false
        }).then(response => {
            const status = response.status;
            cy.log('Response Status:', status);
            assert.equal(200, status);

            // Verify user is deleted by trying to fetch the user
            cy.request({
                method: 'GET',
                url: `http://localhost:3000/api/users/${userId3}`,
                headers: {
                    Authorization: `Bearer ${accessToken3}`
                },
                failOnStatusCode: false
            }).then(getResponse => {
                assert.equal(404, getResponse.status, 'User should not be found');
            });
        });
    });
});
