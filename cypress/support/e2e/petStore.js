describe('PetStore API Inventory Testing', () => {
    it('Create user', () => {
        let body = {
            "id": 1,
            "username": Cypress.env('username'),
            "firstName": "Cipung",
            "lastName": "Gemoy",
            "email": "cipung123@gmail.com",
            "password": Cypress.env('password'),
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

    const LoginUser = {
        method : "GET",
        url : "/user/login",
        qs : {
            username : Cypress.env('username'),
            password : Cypress.env('password')
        }
    }
    it('Login registered user', () => {
        cy.request(LoginUser).as('LoginUser');
        cy.get('@LoginUser').then(LoginUser => {
            expect(LoginUser.status).to.equal(200);
        })
    })

})