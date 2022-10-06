import React from 'react';
import headerNavBar from './List';
import { NavBarIcon }  from '../../assets/navbar';
import LinkList from './Link';
import 'flowbite';

export default function NavBar() {
    return (
        <nav className="nav">
            <div class="hidden sm:block sm:w-auto" id="navbar-default">
                <ul className="flex sm:flex-row flex-col sm:inline-block absolute sm:relative right-[40px] sm:right-0 z-10 top-[76px] sm:top-0 rounded-[5px] backdrop-blur-[40px] bg-[#DBFB58] sm:bg-transparent">
                    {
                        headerNavBar.map(hn => <LinkList name={hn.name} key={hn.name} />)
                    }
                </ul>
            </div>
            <button className="sm:hidden" data-collapse-toggle="navbar-default" aria-controls="navbar-default" aria-expanded="false"><NavBarIcon /></button>
        </nav>
    );
};