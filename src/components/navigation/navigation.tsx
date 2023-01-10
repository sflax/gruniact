import React from 'react';
import './navigation.scss';

export default function Navigation() {
    return (
        <nav className="navigation">
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/user">Users</a>
                </li>
            </ul>
        </nav>
    );
}
