import React from 'react';
import { CardSvgBottom, CardSvgTop } from '../assets/card';
import { Apple } from '../assets/apple';
import { FiveStar } from '../assets/fivestar';
import { FooterLogo } from '../assets/FooterLogo';
import { HalfArrow } from '../assets/halfArrow';

export default function MainComponent() {
    return (
        <main className="main m-auto">
            <section className="pt-[50px] ">
                <div className="content-section pt-[20px] sm:pt-[47px] grid grid-flow-row">
                    <section>
                        <p className="text-[14px] pb-[13px] font-[500] 2xl:text-[16px] 2xl:pb-[26px]">
                            We Provide
                        </p>
                        <h1 className="text-[35px] sm:text-[76px] font-[700] p-[0px] leading-[42px] sm:leading-[84px] 2xl:pr-[250px] 2xl:pt-[10px]">
                            Easiest Payment for any business
                        </h1>
                        <p className="text-[12px] sm:text-[15px] leading-[19px] md:leading-[22.5px] 2xl:leading-[30px] pt-[27px] 2xl:pt-[45px] font-[300] sm:pr-[80px] md:pr-[120px] 2xl:pr-[250px]">
                            Speed up your business payments. Use VPay for secure invoicing and bill payments for your every day business transactions and payable tools.
                        </p>
                    </section>
                    <section className="text-[14px] flex flex-row items-center py-[40px] sm:py-[35px]">
                        <div className="flex flex-row items-center px-[15px] md:px-[34px] py-[10px] m-0 bg-[#DBFB58] rounded-[30px]">
                            <Apple />
                            <button className="pl-[9px]">Download</button>
                        </div>
                            <a href="//" className="pl-[20px] pr-[10px]">
                                How it works
                            </a>
                        <div className="grid w-[17px] h-[17px] border-[1px] rounded-full border-[#00000080] place-content-center">
                            <div><HalfArrow/></div>
                        </div>
                    </section>
                    <section>
                        <div className="flex flex-row items-center">
                            <FiveStar/>
                            <p className="pl-[13px] text-[#00000080] font-[300] leading-[21px] text-[12px] sm:text-[14px]">
                                Trusted by thousands of people
                            </p>
                        </div>
                    </section>
                    <section>
                        <div className="grid justify-items-center py-[35px]">
                            <FooterLogo />
                            <div className="rotate-90 py-[15px]"><HalfArrow /></div>
                        </div>
                    </section>                    
                </div> 
                <div className="atm-card-section relative ">
                    <div className="w-[283px] hidden xl:inline"><CardSvgTop /></div>
                    <div className="absolute z-[-10] top-[102px] right-[67px] hidden xl:inline"><CardSvgBottom /></div>
                </div>
            </section>
        </main>
    );
};