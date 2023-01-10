import { useEffect, useState } from 'react';
import { User } from '../services/users';
import './users.scss';
import UserForm from '../components/user-form/user-form';

const URL = 'http://localhost:3003/user';

export default function Users() {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        // on component load, fetch users
        fetch(URL)
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);

    const handleDelete = async (id: number) => {
        if (!window.confirm('Are you suer')) {
            return;
        }
        await fetch(`http://localhost:3003/user/${id}`, {method: 'delete'});
        setUsers(users.filter(u => u.id !== id));
    }

    const handleAdd = async (user: Partial<User>) => {
        // post request to save in db
        fetch(URL, {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(res => {
                // if this is an error response, display it
                if (res.message) {
                    console.error(res.message)
                } else {
                    // add the user to the list
                    user.id = res.id;
                    setUsers([...users, user as User]);
                }
            })
    };

    return (
        <>
            <UserForm onUser={handleAdd}/>
            <table className="users">
                <thead>
                <tr>
                    <th>id</th>
                    <th>email</th>
                    <th>first name</th>
                    <th>last name</th>
                    <th>delete</th>
                </tr>
                </thead>
                <tbody>
                {users.map((u: User, i) => (<tr key={i}>
                    <td>{u.id}</td>
                    <td>{u.email}</td>
                    <td>{u.fname}</td>
                    <td>{u.lname}</td>
                    <td>
                        <button onClick={() => handleDelete(u.id as number)}>DELETE</button>
                    </td>
                </tr>))}
                </tbody>
            </table>
        </>
    );
}
