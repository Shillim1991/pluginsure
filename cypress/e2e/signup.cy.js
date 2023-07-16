import {signup} from "../fixtures/selectors.js";


describe("Given I am on the orders page", function () {
    beforeEach(function () {
        cy.visit('/')


    });


    it("signup - I Should be able to signup  my account with valid credentials", function () {
      cy.get(signup.firstNamefield).type('maurice')
     cy.get(signup.lastNamefield).type('shillim')
     cy.get(signup.emailField).type('goodies@yopmail.com')
     cy.get(signup.passwordField).type('Goodie1234$')
     cy.get(signup.confirmpasswordField).type('Goodie1234$')
     cy.get(signup.getaCode).click()
     cy.get(signup.signupmesssage).should('contain.text', 'success')
     cy.get(signup.enterCode).type('847019')
     cy.get(signup.summit).click()
     cy.get(signup.proceed).click()
     
     

     







        
      
    });

 })