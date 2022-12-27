export interface User {
    email: string;
    name: string;
}
const url = 'http://localhost:3003/user';

export const DEFAULT_USER = {name: 'unknown', email: ''};

export function fetchUser(): Promise<User> {
    // GET request
    return fetch(`${url}/stam`, {headers: {bootcamp: '1'}})
        .then(res => {
            if (res.status !== 200) {
                return DEFAULT_USER;
            }
            return res.json();
        });
}

export function saveUser(user: User) {
    // POST request
    const body = JSON.stringify(user);
    const method = 'POST';
    const headers = {
        'content-type': 'application/json',
        bootcamp: '1'
    }
    return fetch(url, {method, headers, body}).then(res => res.json());
}


export function validateUser(user: User) {
    if (!Object.keys(user).length) {
        throw new Error('missing inputs');
    }
    if (!user.email) {
        throw new Error('missing email');
    }
    if (!user.name) {
        throw new Error('missing name');
    }
    return user;
}
