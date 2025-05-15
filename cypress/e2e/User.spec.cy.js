import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'

const loginPage = new LoginPage()
const dashboard = new DashboardPage()
const menuPage = new MenuPage()

describe('Orange HRM Tests', () => {

  const selectorsList = {
   
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    lestNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    genericCombobox:".oxd-select-text--arrow",
    secondItemCombobox:".oxd-select-dropdown > :nth-child(2)",
    thirddItemCombobox:".oxd-select-dropdown > :nth-child(2)",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']",
  }
  
    it.only('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
      
      
   
      menuPage.accessmyInfo()
      
      cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
      cy.get(selectorsList.lestNameField).clear().type('LastNameTest')
      cy.get(selectorsList.genericField).eq(2).clear().type('NicknameTest')
      cy.get(selectorsList.genericField).eq(3).clear().type('Employee')
      cy.get(selectorsList.genericField).eq(4).clear().type('OtherIdTest')
      cy.get(selectorsList.genericField).eq(5).clear().type('Drivers License Number Test')
      cy.get(selectorsList.genericField).eq(6).clear().type('2025-03-10')
      cy.get(selectorsList.dateCloseButton).click()
      cy.get(selectorsList.submitButton).eq(0).click({ force: true })
      cy.get('.oxd-toast')
      cy.get(selectorsList.genericCombobox).eq(0).click({ force: true })
      cy.get(selectorsList.secondItemCombobox).click()
      cy.get(selectorsList.genericCombobox).eq(1).click({ force: true })
      cy.get(selectorsList.thirddItemCombobox).click()

    })
    it('Login - Fail', () => {
      cy.visit('/auth/login')
      cy.get(selectorsList. usernameField).type(userData.userFail.username)
      cy.get(selectorsList.passwordField).type(userData.userFail.password)
      cy.get(selectorsList.loginButton).click()
      cy.get(selectorsList.wrongCredentialAlert)
    })
  })
