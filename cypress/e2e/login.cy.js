import {login} from "../fixtures/selectors"
describe("Login Functionalities", function(){
    beforeEach(function () {
        cy.visit("/")
    });
    it("Validlogin", function(){
        cy.get(login.emailField).type("dammy@pickt.io")
        cy.get(login.passwordField).type("Password")
        cy.get(login.loginButton).click()
    })
    it("invalidLogin", function(){
        cy.get(login.emailField).type("dami@gamil.com")
        cy.get(login.passwordField).type("password")
        cy.get(login.loginButton).click()
    })
})