describe('Google Image Turkish Landscape', () => {
    it('Automation for Jira [TEST-T1]', () => {
        cy.visit('https://www.google.com/')

        cy.get('#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input').click()
            .type('Turkish Landscape')
            .should('have.value', 'Turkish Landscape')
            .type('{enter}')
        cy.get('#hdtb-msb-vis > div:nth-child(2) > a').click()
    })
})