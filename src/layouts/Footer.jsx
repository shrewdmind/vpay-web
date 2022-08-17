import React from 'react';
import { FooterLogo } from '../assets/FooterLogo';
import { HalfArrow } from '../assets/halfArrow';
import { FiveStar } from '../assets/fivestar';



export default function FooterComponent() {
    return (
        <footer className="inset-x-0 bottom-0">
            <div className="xl:hidden flex flex-row justify-center items-center pt-[50px] pb-[30px]">
                <FiveStar/>
                <p className="pl-[12px] text-[#00000080] font-[300] leading-[21px] text-[12px] sm:text-[14px]">
                    Trusted by thousands of people
                </p>
            </div>
            <section>
                <div className="grid justify-items-center">
                    <FooterLogo />
                    <div className="rotate-90 py-[15px]"><HalfArrow /></div>
                </div>
            </section>   
            <div className="text-[10px] text-center py-[15px]">
                <a href="https://github.com/shrewdmind">codename shrewdmind inc</a>
            </div>
        </footer>
    );
};