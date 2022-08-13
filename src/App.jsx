import React from 'react';
import HeaderComponent from './layouts/Header';
import FooterComponent from './layouts/Footer';
import MainComponent from './layouts/Main';

export default function App() {
    return (
        <section className="">
            <div className="flex flex-col font-poppings w-auto 2xl:w-[1400px] px-[30px] mx-auto">
                <HeaderComponent />
                <MainComponent />
                <FooterComponent />
            </div>
        </section>

    );
};