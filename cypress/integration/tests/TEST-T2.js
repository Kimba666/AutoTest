describe('TEST-T2', () => {

    it('TEST-R2', options => {

        // Navigate to google
        cy.visit('https://www.google.com/')

        // Search for Kittens
        cy.get('#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input').click()
            .type('Kittens')
            .should('have.value', 'Kittens')
            .type('{enter}')

        // Click on images
        cy.get('#hdtb-msb-vis > div:nth-child(2) > a').click()
    })
})