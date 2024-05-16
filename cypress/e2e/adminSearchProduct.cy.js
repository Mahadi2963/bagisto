describe('Search a Product', () => {
    it('should search a product successfully through the admin panel', () => {
        // Login as admin
        cy.visit('http://127.0.0.1:8000/admin/login');
        cy.get('input[name="email"]').type('admin@example.com');
        cy.get('input[name="password"]').type('admin123');
        cy.get("button[aria-label='Sign In']").click();
        cy.url().should('include', 'http://127.0.0.1:8000/admin/dashboard');


        cy.get("i[class='hidden icon-menu text-2xl p-1.5 rounded-md cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-950 max-lg:block']").click()


        cy.visit('http://127.0.0.1:8000/admin/catalog/products')

        cy.get("input[placeholder='Search'][name='search']").click()

        cy.get("input[placeholder='Search'][name='search']").type("iPhone")

        cy.get('input[name="search"]').type('{enter}');

        cy.contains('iPhone').should('be.visible');








    });
});



