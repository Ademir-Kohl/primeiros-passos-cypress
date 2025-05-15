class LoginPage {

   selectorsList() {
       const selectors = {
        usernameField: "[name='username']",
        passwordField: "[name='password']",
        loginButton: "[type='submit']",
        wrongCredentialAlert: "[role='alert']",
       }

       return selectors
    }

    accessLoginPage() {
        cy.visit('/auth/login')
    }

    loginWithUser(username, passworld) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(passworld)
        cy.get(this.selectorsList().loginButton).click()
    }
}

export default LoginPage