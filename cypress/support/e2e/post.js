it('Create user', () => {
    let body = {
        "id": 1,
        "username": Cypress.env('username'),
        "firstName": "Cipung",
        "lastName": "Gemoy",
        "email": "cipung123@gmail.com",
        "password": "Cipung123",
        "phone": "08976543218",
        "userStatus": 0
    }
    console.log(body)
    cy.request('POST', '/user', body).as('createUser');
    //add new Todo item by defining Todo name
    cy.get('@createUser').then(createUser => {
        expect(createUser.status).to.equal(200);
    })
})