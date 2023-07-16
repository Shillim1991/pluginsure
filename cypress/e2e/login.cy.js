import {login} from "../fixtures/selectors.js";


describe("testing login functionality", function () {
    beforeEach(function () {
        cy.visit('/')


    });


    it("LOGIN - I Should be able to login in my account with valid credentials", function () {
cy.get(login.loginbackBttn).click()
cy.get(login.emailfield).type("goodies@yopmail.com")
cy.get(login.passwordfield).type("Goodie1234$")
cy.get(login.summit).click()
cy.get(login.loginmesssage).should('contain.text', 'success')
//cy.title(login.title).should('eq','pluginsure')
      
    });

 })