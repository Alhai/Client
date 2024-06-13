describe('Flux d\'abonnement et de panier', () => {
    it('S\'abonne à un plan et ajoute un produit au panier', () => {
        cy.visit('http://localhost:4200/shop');

        cy.contains('button', 'Je M\'abonne').first().click();

        cy.url().should('include', '/unique');

        cy.contains('button', 'J\'achète ma box').click();

        cy.get('button[aria-label="Panier d\'achat"]').find('span').contains('1');
    });
});
