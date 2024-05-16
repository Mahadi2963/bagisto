describe('Update Profile', () => {
    it('should update the user profile successfully', () => {
        cy.visit('http://127.0.0.1:8000');
        cy.visit('http://127.0.0.1:8000/customer/login');
        cy.get("input[placeholder='email@example.com']").type('sabiha@gmail.com');
        cy.get("#password").type('password123');
        cy.get("button[class='primary-button block w-full max-w-[374px] py-4 px-11 m-0 ltr:ml-0 rtl:mr-0 mx-auto rounded-2xl text-base text-center']").click();
        cy.url().should('include', 'http://127.0.0.1:8000');


        cy.visit('http://127.0.0.1:8000/iphone-14-pro-max');
        cy.get("span[class='text-2xl icon-arrow-down']").click()
        cy.get("div[class='flex gap-x-4 items-center px-4 py-2.5 border border-navyBlue rounded-xl cursor-pointer']").click()

        cy.get("input[placeholder='Title']").type("Good")
        cy.get("textarea[placeholder='Comment']").type("Overall Good")

        cy.get("button[class='primary-button w-full max-w-[374px] py-4 px-11 rounded-2xl text-center']").click();
        cy.visit('http://127.0.0.1:8000/iphone-14-pro-max');


    });
});
