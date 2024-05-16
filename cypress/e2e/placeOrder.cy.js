describe('Place Order', () => {
    it('should place order a product to the successfully', () => {

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

        cy.wait(10000)

        cy.get("div[class='flex items-center gap-x-5'] div div[class='fixed z-[1000] bg-white overflow-hidden max-sm:!w-full inset-y-0 ltr:right-0 rtl:left-0'] div[class='w-full h-full overflow-auto bg-white pointer-events-auto'] div[class='flex flex-col h-full w-full'] div[class='flex-1 min-h-0 min-w-0 overflow-auto'] div[class='flex flex-col h-full'] div[class='pb-8'] div a[class='block w-full mx-auto py-4 px-11 bg-navyBlue rounded-2xl text-white text-base font-medium text-center cursor-pointer max-sm:px-5']").click()

        cy.visit("http://127.0.0.1:8000/checkout/onepage")

        cy.get("body > div:nth-child(2) > main:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > label:nth-child(2)").click()

        cy.get("button[class='primary-button py-3 px-11 rounded-2xl']").click()

        cy.get("body > div:nth-child(2) > main:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > label:nth-child(2)").click()


        cy.wait(10000)


        cy.get("body > div:nth-child(2) > main:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > label:nth-child(2)").click()


        cy.get("button[class='primary-button w-max py-3 px-11 bg-navyBlue rounded-2xl max-sm:text-sm max-sm:px-6 max-sm:mb-10']").click()

        cy.visit("http://127.0.0.1:8000/checkout/cart")

        cy.wait(2000)

        cy.visit('http://127.0.0.1:8000');

    });
});


