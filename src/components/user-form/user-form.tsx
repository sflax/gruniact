import { FormEvent } from 'react';
import { User } from '../../models/user';

export interface UserFormProps {
    onUser?: (user: Partial<User>) => void;
}

export default function UserForm({onUser}: UserFormProps) {
    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!onUser) {
            return;
        }
        const form = e.target as HTMLFormElement;
        const data = new FormData(form);
        const user = [...data.entries()].reduce((acc, [key, value]) => ({...acc, [key]: value}), {} as Partial<User>);
        onUser(user);
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="email" name="email" placeholder="email"/>
            <input type="text" name="fname" placeholder="first name"/>
            <input type="text" name="lname" placeholder="last name"/>
            <input type="password" name="password" placeholder="Your password "/>
            <button type="submit">Add User</button>
        </form>
    );
}
