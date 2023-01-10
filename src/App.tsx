import React from 'react';
import './App.scss';
import { Outlet } from 'react-router-dom';
import Navigation from './components/navigation/navigation';

function App() {
    return (
        <div className="app">
            <h2>GRUNIACT</h2>
            <Navigation />
            <Outlet/>
        </div>
    );
}

export default App;
