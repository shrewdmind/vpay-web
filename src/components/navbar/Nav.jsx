import React from 'react';
import headerNavBar from './List';
import { NavBarIcon }  from '../../assets/navbar';
import LinkList from './Link';

export default function NavBar() {
    return (
        <nav className="nav">
            <ul className="flex sm:flex-row flex-col sm:inline-block absolute sm:relative transform translate-x-[-350%] translate-y-[100%] px-[20px]">
                {
                    headerNavBar.map(hn => <LinkList name={hn.name} key={hn.name} />)
                }
            </ul>
            <div className="sm:hidden"><NavBarIcon /></div>
        </nav>
    );
};