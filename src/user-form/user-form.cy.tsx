import UserForm from './user-form';

describe('user-form', () => {
    // beforeEach(() => {
    //     cy.mount(<UserForm/>);
    // });

    it('should display with 4 elements and button', () => {
        cy.mount(<UserForm/>);
        cy.get('input').should('have.length', 4);
        cy.get('button').should('have.length', 1);
    });


    it('should raise data', () => {
        cy.mount(<UserForm/>);
        cy.get('input').last().should('have.attr', 'type', 'password');
    });
});
