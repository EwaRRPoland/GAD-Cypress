
// import { user1Data, newUser1Data } from '../../support/data/apiDataUsers';

// describe('httpGAD tests create user', () => {
//     let accessToken;

//     const request1 = {
//         method: 'POST',
//         url: 'http://localhost:3000/api/login',
//         body: {
//             email: user1Data.email,
//             password: user1Data.password
//         },
//         failOnStatusCode: false
//     };

//     it('response code should be 200 and should return access_token', () => {
//         cy.request(request1).then(response => {
//             const status = response.status;
//             assert.equal(200, status);
//             assert.isNotNull(response.body.access_token, 'Access token is present');
//             accessToken = response.body.access_token;
//             cy.log('Access Token:', accessToken);
//         });
//     });

//     it('response code should be 200 and should return user ID', () => {
//         cy.request({
//             method: 'PUT',
//             url: 'http://localhost:3000/api/users/16',
//             body: newUser1Data,
//             headers: {
//                 Authorization: `Bearer ${accessToken}`
//             },
//             failOnStatusCode: false
//         }).then(response => {
//             const status = response.status;
//             cy.log('Response Status:', status);
//             cy.log('Response Body:', response.body);
//             assert.equal(200, status);
//             assert.equal(newUser1Data.email, response.body.email);
//             assert.isNotNull(response.body.id, 'User ID should not be null');
//             console.log('Created user ID:', response.body.id);
//         });
//     });
// });

import { user1Data, newUser1Data } from '../../support/data/apiDataUsers';
import { user2Data, newUser2Data } from '../../support/data/apiDataUsers';

describe('httpGAD tests create user', () => {
    let accessToken;
    let userId;

    const request1 = {
        method: 'POST',
        url: 'http://localhost:3000/api/users',
        body: user2Data,
        failOnStatusCode: false
    };

    it('response code should be 201 and should return user ID', () => {
        cy.request(request1).then(response => {
            const status = response.status;
            userId = response.body.id; // Store user ID
            assert.equal(201, status);
            assert.equal(user2Data.email, response.body.email);
            assert.isNotNull(userId, 'User ID should not be null');
            cy.log('Created user ID:', userId);
        });
    });

    const request2 = {
        method: 'POST',
        url: 'http://localhost:3000/api/login',
        body: {
            email: user2Data.email,
            password: user2Data.password
        },
        failOnStatusCode: false
    };

    it('response code should be 200 and should return access_token', () => {
        cy.request(request2).then(response => {
            const status = response.status;
            assert.equal(200, status);
            assert.isNotNull(response.body.access_token, 'Access token is present');
            accessToken = response.body.access_token;
            cy.log('Access Token:', accessToken);
        });
    });

    it('response code should be 200 and should return updated user data', () => {
        cy.request({
            method: 'PUT',
            url: `http://localhost:3000/api/users/${userId}`, // Use stored user ID
            body: newUser2Data,
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
            failOnStatusCode: false
        }).then(response => {
            const status = response.status;
            cy.log('Response Status:', status);
            cy.log('Response Body:', response.body);
            assert.equal(200, status);
            assert.equal(newUser2Data.email, response.body.email);
            assert.isNotNull(response.body.id, 'User ID should not be null');
            console.log('Updated user ID:', response.body.id);
        });
    });
});
