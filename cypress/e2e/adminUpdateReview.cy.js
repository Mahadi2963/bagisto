describe('Update Customer Review', () => {
    it('should update customer review successfully through the admin panel', () => {
        // Login as admin
        cy.visit('http://127.0.0.1:8000/admin/login');
        cy.get('input[name="email"]').type('admin@example.com');
        cy.get('input[name="password"]').type('admin123');
        cy.get("button[aria-label='Sign In']").click();
        cy.url().should('include', 'http://127.0.0.1:8000/admin/dashboard');


        cy.visit("http://127.0.0.1:8000/admin/customers/customers")

        cy.visit("http://127.0.0.1:8000/admin/customers/reviews")

        cy.get("body > div:nth-child(1) > div:nth-child(5) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(4) > a:nth-child(2) > span:nth-child(1)").click()

        cy.get("select[name='status']").select('approved');

        cy.get("button[class='ltr:mr-11 rtl:ml-11 primary-button']").click()


    });
});
