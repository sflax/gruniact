import SuperButton from './super-button';

describe('super-button', () => {
    // this is sanity test
    it('should display default button', () => {
        cy.mount(<SuperButton label="test"/>);
        cy.get('button').should('exist');
        cy.get('button').should('have.attr', 'class', 'super-button');
        cy.get('span.label').should('have.text', 'test');
    });













    it('should display icon', () => {
        cy.mount(<SuperButton label="test"/>);
        cy.get('button').invoke('css', 'width').should('equal', '200px');
    });
});
