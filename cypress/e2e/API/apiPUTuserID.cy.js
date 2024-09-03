import { user1Data, user1DataPATCH, newUser1Data } from '../../support/data/apiDataUsers';
import { user2Data, user2DataPATCH, newUser2Data } from '../../support/data/apiDataUsers';
import { user3Data, user3DataPATCH, newUser3Data } from '../../support/data/apiDataUsers';

describe('httpGAD tests create user', () => {
    let accessToken1;
    let accessToken2;
    let accessToken3;
    let userId1;
    let userId2;
    let userId3;

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

// update user1 PUT
    it('response code should be 200 and should return updated user1 data', () => {
        cy.request({
            method: 'PUT',
            url: `http://localhost:3000/api/users/${userId1}`, // Use stored user ID
            body: newUser1Data,
            headers: {
                Authorization: `Bearer ${accessToken1}`
            },
            failOnStatusCode: false
        }).then(response => {
            const status = response.status;
            cy.log('Response Status:', status);
            cy.log('Response Body:', response.body);
            assert.equal(200, status);
            assert.equal(newUser1Data.email, response.body.email);
            assert.isNotNull(userId1, 'User ID should not be null');
            console.log('Updated user ID:', userId1);
        });
    });
    // update user2 PUT
    it('response code should be 200 and should return updated user2 data', () => {
        cy.request({
            method: 'PUT',
            url: `http://localhost:3000/api/users/${userId2}`, // Use stored user ID
            body: newUser2Data,
            headers: {
                Authorization: `Bearer ${accessToken2}`
            },
            failOnStatusCode: false
        }).then(response => {
            const status = response.status;
            cy.log('Response Status:', status);
            cy.log('Response Body:', response.body);
            assert.equal(200, status);
            assert.equal(newUser2Data.email, response.body.email);
            assert.isNotNull(userId2, 'User ID should not be null');
            console.log('Updated user ID:', userId2);
        });
    });
    // update user3 PUT
    it('response code should be 200 and should return updated user3 data', () => {
        cy.request({
            method: 'PATCH',
            url: `http://localhost:3000/api/users/${userId3}`, // Use stored user ID
            body: newUser3Data,
            headers: {
                Authorization: `Bearer ${accessToken3}`
            },
            failOnStatusCode: false
        }).then(response => {
            const status = response.status;
            cy.log('Response Status:', status);
            cy.log('Response Body:', response.body);
            assert.equal(200, status);
            assert.equal(newUser3Data.email, response.body.email);
            assert.isNotNull(userId3, 'User ID should not be null');
            console.log('Updated user ID:', userId3);
        });
    });


// login and auth. user1 newUser1Data after PUT
    const request44 = {
        method: 'POST',
        url: 'http://localhost:3000/api/login',
        body: {
            email: newUser1Data.email,
            password: newUser1Data.password
        },
        failOnStatusCode: false
    };

    it('response code should be 200 and should return access_token', () => {
        cy.request(request44).then(response => {
            const status = response.status;
            assert.equal(200, status);
            assert.isNotNull(response.body.access_token, 'Access token is present');
            accessToken1 = response.body.access_token;
            cy.log('Access Token:', accessToken1);
        });
    });

    // login and auth. user2 newUser2Data after PUT
    const request45 = {
        method: 'POST',
        url: 'http://localhost:3000/api/login',
        body: {
            email: newUser2Data.email,
            password: newUser2Data.password
        },
        failOnStatusCode: false
    };

    it('response code should be 200 and should return access_token', () => {
        cy.request(request45).then(response => {
            const status = response.status;
            assert.equal(200, status);
            assert.isNotNull(response.body.access_token, 'Access token is present');
            accessToken2 = response.body.access_token;
            cy.log('Access Token:', accessToken2);
        });
    });
    // login and auth. user3 newUser3Data after PUT
    const request46 = {
        method: 'POST',
        url: 'http://localhost:3000/api/login',
        body: {
            email: newUser3Data.email,
            password: newUser3Data.password
        },
        failOnStatusCode: false
    };

    it('response code should be 200 and should return access_token', () => {
        cy.request(request46).then(response => {
            const status = response.status;
            assert.equal(200, status);
            assert.isNotNull(response.body.access_token, 'Access token is present');
            accessToken3 = response.body.access_token;
            cy.log('Access Token:', accessToken3);
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
