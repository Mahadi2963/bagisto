


describe('Delete a Product', () => {
    it('should delete a product successfully through the admin panel', () => {
        // Login as admin
        cy.visit('http://127.0.0.1:8000/admin/login');
        cy.get('input[name="email"]').type('admin@example.com');
        cy.get('input[name="password"]').type('admin123');
        cy.get("button[aria-label='Sign In']").click();
        cy.url().should('include', 'http://127.0.0.1:8000/admin/dashboard');


        cy.get("i[class='hidden icon-menu text-2xl p-1.5 rounded-md cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-950 max-lg:block']").click()


        cy.visit('http://127.0.0.1:8000/admin/catalog/products')

        cy.get("label[for='mass_action_select_record_19']").click()
        //Paste Product ID here.


        cy.get("button[class='inline-flex w-full max-w-max cursor-pointer appearance-none items-center justify-between gap-x-2 rounded-md border dark:border-gray-800 bg-white dark:bg-gray-900 px-2.5 py-1.5 text-center leading-6 text-gray-600 dark:text-gray-300 transition-all marker:shadow hover:border-gray-400 dark:hover:border-gray-400 focus:border-gray-400 dark:focus:border-gray-400 focus:ring-black'] span[class='icon-sort-down text-2xl']").click()

        cy.get("a[class='flex gap-1.5 whitespace-no-wrap rounded-b px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-950']").click()

        cy.get("div[tag='div'] button:nth-child(2)").click()

        cy.visit('http://127.0.0.1:8000/admin/catalog/products')




    });
});





