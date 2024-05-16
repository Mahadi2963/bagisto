describe('Add New Product', () => {
    it('should add a new product successfully through the admin panel', () => {
        // Login as admin
        cy.visit('http://127.0.0.1:8000/admin/login');
        cy.get('input[name="email"]').type('admin@example.com');
        cy.get('input[name="password"]').type('admin123');
        cy.get("button[aria-label='Sign In']").click();
        cy.url().should('include', 'http://127.0.0.1:8000/admin/dashboard');


        cy.get("i[class='hidden icon-menu text-2xl p-1.5 rounded-md cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-950 max-lg:block']").click()


        cy.visit('http://127.0.0.1:8000/admin/catalog/products')

        cy.get('.flex-1 > .flex > .flex > div > .primary-button').click()
        cy.get("select[name='type']").select('simple')
        cy.get("select[name='attribute_family_id']").select('1')
        cy.get("input[name='sku']").type('01')
        cy.get("div[class='flex gap-x-2.5 items-center'] button[type='submit']").click()

        cy.visit('http://127.0.0.1:8000/admin/catalog/products')
        cy.contains('Product created successfully').should('be.visible');

    });
});




