describe('Update Profile', () => {
    it('should update the user profile successfully', () => {
        cy.visit('http://127.0.0.1:8000');
        cy.visit('http://127.0.0.1:8000/customer/login');
        cy.get("input[placeholder='email@example.com']").type('sabiha@gmail.com');
        cy.get("#password").type('password123');
        cy.get("button[class='primary-button block w-full max-w-[374px] py-4 px-11 m-0 ltr:ml-0 rtl:mr-0 mx-auto rounded-2xl text-base text-center']").click();
        cy.url().should('include', 'http://127.0.0.1:8000');


        cy.visit('http://127.0.0.1:8000/customer/account/profile');

        cy.wait(5000);

        cy.get("a[class='secondary-button py-3 px-5 border-[#E9E9E9] font-normal']").click()

        cy.wait(5000);

        cy.get("input[placeholder='Phone']").clear().type('01712345678');

        cy.get("button[class='primary-button block m-0 w-max py-3 px-11 rounded-2xl text-base text-center']").click()

    });
});
