describe('EXT-D1', () => {

    it('EXT-R1', () => {

        //Navigate to Google
        cy.visit('https://www.google.com/');

        //Click search field and enter value
        cy.get('#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input').click()
            .type('Tiger cub')
            .should('have.value', 'Tiger cub')
            .type('{enter}');

        //Click on Images to view images
        cy.get('#hdtb-msb-vis > div:nth-child(2) > a')
            .should('contain', 'Images')
            .click()
    })
})