describe('Update Existing Category', () => {
    it('should update category successfully through the admin panel', () => {
        // Login as admin
        cy.visit('http://127.0.0.1:8000/admin/login');
        cy.get('input[name="email"]').type('admin@example.com');
        cy.get('input[name="password"]').type('admin123');
        cy.get("button[aria-label='Sign In']").click();
        cy.url().should('include', 'http://127.0.0.1:8000/admin/dashboard');


        cy.get("i[class='hidden icon-menu text-2xl p-1.5 rounded-md cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-950 max-lg:block']").click()

        cy.visit('http://127.0.0.1:8000/admin/catalog/categories');


        cy.get("body > div:nth-child(1) > div:nth-child(5) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > p:nth-child(7) > span:nth-child(1)").click();

        cy.get("body > div:nth-child(1) > div:nth-child(5) > div:nth-child(2) > form:nth-child(2) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(2)").clear().type('Updated Category Name');

        cy.get("button[class='primary-button']").click();

    });
});


