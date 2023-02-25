import{login} from "../fixtures/selectors"
export const validLogin = () => {
    cy.visit("/")
    cy.get(login.emailField).type("dammy@pickt.io")
    cy.get(login.passwordField).type("Damilola")
    cy.get(login.loginButton).click()
}