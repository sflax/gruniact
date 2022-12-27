export interface User {
    email: string;
    name: string;
}
const url = 'http://localhost:3003/user';

export function fetchUser(): Promise<User> {
    // GET request
    return fetch(`${url}/stam`).then(res => res.json())
}

export function saveUser(user: User) {
    // POST request
    const body = JSON.stringify(user);
    const method = 'POST';
    const headers = {
        'content-type': 'application/json'
    }
    return fetch(url, {method, headers, body}).then(res => res.json());
}
