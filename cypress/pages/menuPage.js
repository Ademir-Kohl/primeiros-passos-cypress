class MenuPage {

    selectorsList() {
        const selectors = {
        myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
        prformaceButton: '[href="/web/index.php/performance/viewPerformanceModule"]'
        }

        return selectors
    }  

       accessmyInfo() {
        cy.get(this.selectorsList().myInfoButton).click()
       }

       accessorPerformace() {
        cy.get(this.selectorsList().prformaceButton).click()
       }

}

export default MenuPage