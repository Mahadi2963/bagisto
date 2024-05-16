describe('User Sign-up', () => {
    it('should sign up and create a new account successfully', () => {

        cy.visit('http://127.0.0.1:8000')
        cy.visit('http://127.0.0.1:8000/customer/register')


        cy.get("input[placeholder='First Name']").type('Umme');
        cy.get("input[placeholder='Last Name']").type('Sabiha');

        cy.get("input[placeholder='email@example.com']").type('sabiha@gmail.com');


        cy.get("input[placeholder='Password']").type('password123');
        cy.get("input[placeholder='Confirm Password']").type('password123');

        cy.get("button[class='primary-button block w-full max-w-[374px] py-4 px-11 mx-auto m-0 ltr:ml-0 rtl:mr-0 rounded-2xl text-base text-center']").click();

        cy.url().should('include', 'http://127.0.0.1:8000/customer/login');

    });
});
