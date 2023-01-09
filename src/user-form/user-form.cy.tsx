import UserForm from './user-form';

describe('', () => {
    it('should display form', () => {
        cy.mount(<UserForm/>);
        cy.get('input').should('have.length', 4);
    });


    it('should raise data', () => {
        cy.mount(<UserForm/>);

        cy.get('input').should('have.length', 3);
    });
});
