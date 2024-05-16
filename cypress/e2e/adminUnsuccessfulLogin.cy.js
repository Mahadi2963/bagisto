describe('Admin Unsuccessful Login', () => {


    it('should display an error message with incorrect credentials', () => {

        cy.visit('http://127.0.0.1:8000/admin/login');

        cy.get('input[name="email"]').type('wrong_admin@example.com');
        cy.get('input[name="password"]').type('wrong_password');


        cy.get("button[aria-label='Sign In']").click();

        cy.get('.text-sm.flex.items-center.break-all').should('be.visible');
    });
});
