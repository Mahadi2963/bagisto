describe('Remove cart Product', () => {
    before(() => {
        // Log in as the user
        cy.visit('http://127.0.0.1:8000');
        cy.visit('http://127.0.0.1:8000/customer/login');
        cy.get("input[placeholder='email@example.com']").type('sabiha@gmail.com');
        cy.get("#password").type('password123');
        cy.get("button[class='primary-button block w-full max-w-[374px] py-4 px-11 m-0 ltr:ml-0 rtl:mr-0 mx-auto rounded-2xl text-base text-center']").click();
        cy.url().should('include', 'http://127.0.0.1:8000');
    });

    it('should remove cart product successfully', () => {

        cy.get("div[class='flex items-center gap-x-5'] div div span[aria-label='Shopping Cart']").click()

        cy.wait(10000);

        cy.get("div[class='flex items-center gap-x-5'] div button[type='button']").click()

        cy.get("body > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > button:nth-child(2)").click()

    });
});