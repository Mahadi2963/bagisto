describe('Add to Cart', () => {
    it('should add a product to the cart successfully', () => {

        cy.visit('http://127.0.0.1:8000');
        cy.visit('http://127.0.0.1:8000/customer/login');
        cy.get("input[placeholder='email@example.com']").type('sabiha@gmail.com');
        cy.get("#password").type('password123');
        cy.get("button[class='primary-button block w-full max-w-[374px] py-4 px-11 m-0 ltr:ml-0 rtl:mr-0 mx-auto rounded-2xl text-base text-center']").click();
        cy.url().should('include', 'http://127.0.0.1:8000');

        cy.get('#app > header > div.gap-4.flex-wrap.px-4.pb-4.pt-6.hidden.shadow-sm.max-lg\\:flex > form > div > input').type('iPhone');

        cy.get('#app > header > div.gap-4.flex-wrap.px-4.pb-4.pt-6.hidden.shadow-sm.max-lg\\:flex > form').submit();

        cy.visit("http://127.0.0.1:8000/iphone-14-pro-max")

        cy.get("button[class='secondary-button w-full max-w-full']").click()


        cy.get("div[class='flex items-center gap-x-5'] div div span[aria-label='Shopping Cart']").click();

    });
});


