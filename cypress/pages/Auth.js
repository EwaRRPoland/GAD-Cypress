export const testUsers = {
  regularUser: {
    email: Cypress.env('USER_EMAIL') || '[NOT SET]',
    password: Cypress.env('USER_PASSWORD') || '[NOT SET]',
    id: Number(Cypress.env('USER_ID')) || '[NOT SET]',
  },
  admin: {
    email: Cypress.env('ADMIN_EMAIL') || '[NOT SET]',
    password: Cypress.env('ADMIN_PASSWORD') || '[NOT SET]',
  },
};
