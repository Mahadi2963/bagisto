describe('Track Order', () => {
    it('should track order successfully', () => {

        cy.visit('http://127.0.0.1:8000');
        cy.visit('http://127.0.0.1:8000/customer/login');
        cy.get("input[placeholder='email@example.com']").type('sabiha@gmail.com');
        cy.get("#password").type('password123');
        cy.get("button[class='primary-button block w-full max-w-[374px] py-4 px-11 m-0 ltr:ml-0 rtl:mr-0 mx-auto rounded-2xl text-base text-center']").click();
        cy.url().should('include', 'http://127.0.0.1:8000');

        cy.visit("http://127.0.0.1:8000/customer/account/orders")

        cy.wait(10000)

        cy.get("span[class='cursor-pointer rounded-md p-1.5 text-2xl transition-all hover:bg-gray-200 max-sm:place-self-center icon-eye']").click()

    });
});
