describe('Delete Customer Review', () => {
    it('should delete customer review successfully through the admin panel', () => {
        // Login as admin
        cy.visit('http://127.0.0.1:8000/admin/login');
        cy.get('input[name="email"]').type('admin@example.com');
        cy.get('input[name="password"]').type('admin123');
        cy.get("button[aria-label='Sign In']").click();
        cy.url().should('include', 'http://127.0.0.1:8000/admin/dashboard');

        cy.visit("http://127.0.0.1:8000/admin/account")

        cy.get("input[placeholder='Name']").clear().type("Mahadi")
        cy.get("input[placeholder='Current Password']").type("admin123")
        cy.get("button[class='primary-button']").click()

        cy.visit("http://127.0.0.1:8000/admin");


    });
});


