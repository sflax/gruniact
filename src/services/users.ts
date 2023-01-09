export interface User {
    id?: number;
    email: string;
    fname: string;
    lname: string;
    password?: string;
}

const URL = 'http://localhost:3003/user';

export const DEFAULT_USER: User = {email: '', fname: '', lname: ''};


export class Users {
    constructor(public readonly url: string) {
    }

    all() {
        return fetch(this.url).then(res => res.json());
    }

    byId(id: number): Promise<User> {
        return fetch(`${this.url}/${id}`).then(res => res.json());
    }
}
