import { validateUser } from './users';

describe('users', () => {
    it('should return valid user', () => {
        const u = {name: 'test', email: 'test'};
        expect(validateUser(u)).toEqual(u);
    });

    it('should throw error for invalid user', () => {
        const u = {name: 'test'} as any;
        expect(() => validateUser(u)).toThrow();
    });
});
