Cypress.on('fail', (error) => {
    debugger
    throw error
})

it('calls the "fail" callback when this test fails', () => {
})

describe('TEST-T1', () => {

    it('TEST-R1', () => {

        // Navigate to google
        cy.visit('https://www.google.com/');

        // Click for Turkish Landscape
        cy.get('#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input').click()
            .type('Turkish Landscape')
            .should('have.value', 'Turkish Landscape')
            .type('{enter}');

        // Click on images
        cy.get('#hdtb-msb-vis > div:nth-child(2) > a')
            .should('contain', 'Images')
            .click()
    })
})