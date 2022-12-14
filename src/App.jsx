import React from 'react';
import HeaderComponent from './layouts/Header';
import FooterComponent from './layouts/Footer';
import MainComponent from './layouts/Main';

export default function App() {
    return (
        <section className="">
             
            <div className="flex flex-col font-poppings w-auto xl:px-[30px] 2xl:w-[1600px] mx-auto 2xl:pt-[40px]">
                <HeaderComponent />
                <MainComponent />
                <FooterComponent />
            </div>
        </section>
    );
};