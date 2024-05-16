describe('Export Customer Info', () => {
    it('should export customer info successfully through the admin panel', () => {
        // Login as admin
        cy.visit('http://127.0.0.1:8000/admin/login');
        cy.get('input[name="email"]').type('admin@example.com');
        cy.get('input[name="password"]').type('admin123');
        cy.get("button[aria-label='Sign In']").click();
        cy.url().should('include', 'http://127.0.0.1:8000/admin/dashboard');

        cy.visit("http://127.0.0.1:8000/admin/customers/customers")
        cy.get("button[class='transparent-button hover:bg-gray-200 dark:hover:bg-gray-800 dark:text-white']").click()

        cy.get("div[class='flex justify-end px-4 py-2.5'] button[type='button']").click()

        cy.wait(5000)

        cy.visit("http://127.0.0.1:8000/admin/dashboard")



    });
});


