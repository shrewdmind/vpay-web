import React from 'react';
import headerNavBar from './List';
import CreateList from './CreateList';
import { NavBarIcon }  from '../../assets/navbar';

export default function NavBar() {
    return (
        <nav className="nav">
            <ul className="flex sm:flex-row flex-col">{headerNavBar.map(CreateList)}</ul>
            <div className="sm:hidden"><NavBarIcon /></div>
        </nav>
    );
};