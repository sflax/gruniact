import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import { fetchUser, saveUser, User } from './services/users';

function App() {
    const [user, setUser] = useState<User>({name: 'unknown', email: ''});

    useEffect(() => {
        fetchUser().then(u => setUser(u));
    }, []);

    const foo = () => {
        const name = document.querySelector('input')?.value;
        if (!name) {
            return;
        }
        saveUser({...user, name}).then(u => setUser(u));
    }
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Welcome {user.name}
                </p>
                <p>
                    <input type="text"/>
                    <button onClick={foo}>Change name</button>
                </p>
            </header>
        </div>
    );
}

export default App;
