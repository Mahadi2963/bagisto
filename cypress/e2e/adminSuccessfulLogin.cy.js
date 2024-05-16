describe('Admin Successful Login', () => {
    it('should log in successfully with correct credentials', () => {

        cy.visit('http://127.0.0.1:8000/admin/login');


        cy.get('input[name="email"]').type('admin@example.com');
        cy.get('input[name="password"]').type('admin123');

        // Click on the login button
        cy.get("button[aria-label='Sign In']").click();


        cy.url().should('include', 'http://127.0.0.1:8000/admin/dashboard');
    });
});
