import React from 'react';
import { CardSvgBottom, CardSvgTop } from '../assets/card';
import { Apple } from '../assets/apple';
import { FiveStar } from '../assets/fivestar';
import { HalfArrow } from '../assets/halfArrow';
import { Arrow } from '../assets/Arrow';
import { Thread } from "../assets/Thread";
import { File } from "../assets/File";
import { Shadow } from "../assets/Shadow";

export default function MainComponent() {
    return (
        <main className="main m-auto">
            <section className="pt-[50px] grid xl:grid-flow-col">
                <div className="content-section pt-[10px] md:pt-[47px] xl:pt-[75px] px-[30px] sm:px-[50px]">
                    <section className="relative">
                        <div className="relative scale-75 sm:scale-100">
                            <div className="absolute z-[-10] w-[187px] h-[187px] bg-[#E93314] rounded-full opacity-20 md:opacity-40 blur-2xl right-1/2 top-1/2 transform translate-x-[100%] translate-y-[200%] md:translate-x-[100%] md:translate-y-[0%]"></div>
                            <div className="absolute z-[-10] w-[187px] h-[187px] bg-[#DBFB58] rounded-full opacity-20 md:opacity-40 blur-2xl right-1/2 top-1/2 transform translate-x-[10%] translate-y-[200%] md:translate-x-[20%] md:translate-y-[0%]"></div>
                            <div className="absolute z-[-10] w-[187px] h-[187px] bg-[#1F365C] rounded-full opacity-20 md:opacity-40 blur-2xl right-1/2 top-1/2 transform translate-x-[55%] translate-y-[260%] md:translate-x-[60%] md:translate-y-[60%]"></div>
                        </div>
                        <p className="text-[14px] pb-[13px] font-[500] 2xl:text-[16px] 2xl:pb-[26px]">
                            We Provide
                        </p>
                        <div className="absolute left-[90px] top-[14px] 2xl:left-[110px] animate-bounce">
                            <Arrow/>
                        </div>
                        <h1 className="text-[38px] sm:text-[60px] lg:text-[76px] 2xl:text-[80px] lg:pt-[18px] lg:pb-[15px] font-[700] p-[0px] xl:pr-[450px] leading-[40px] sm:leading-[70px] 2xl:leading-[85px] 2xl:pr-[450px] 2xl:pt-[10px]">
                            Easiest Payment for any business
                        </h1>
                        <p className="text-[14px] text-center sm:text-[15px] leading-[19px] md:leading-[22.5px] xl:pr-[460px] 2xl:pr-[560px] 2xl:leading-[30px] pt-[27px] 2xl:pt-[45px] font-[300] sm:pr-[80px] md:pr-[120px]">
                            Speed up your business payments. Use VPay for secure invoicing and bill payments for your every day business transactions and payable tools.
                        </p>
                        <div className="absolute left-[50%] top-[-20px] xl:top-[120px] md:inline-block 2xl:top-[190px]">
                            <Thread />
                        </div>
                    </section>
                    <section className="text-[14px] flex flex-col md:flex-row justify-center items-center py-[40px] sm:py-[35px]">
                        <div className="flex flex-row items-center px-[25px] md:px-[34px] py-[10px] m-0 bg-[#DBFB58] rounded-[30px]">
                            <Apple />
                            <button className="pl-[9px]">Download</button>
                        </div>
                        <div className="flex flex-row justify-center items-center px-[15px] py-[10px] border-[1.5px] rounded-[30px] m-[20px] border-gray-300">
                            <a href="//" className="md:pl-[20px] pr-[5px]">
                                <button>How it works</button>
                            </a>
                            <div className="grid w-[17px] h-[17px] border-[1px] rounded-full border-[#00000080] place-content-center">
                                <div><HalfArrow/></div>
                            </div>
                        </div>
                    </section>
                    <section className="relative">
                        <div className="hidden xl:flex flex-row items-center">
                            <FiveStar/>
                            <p className="pl-[12px] text-[#00000080] font-[300] leading-[21px] text-[12px] sm:text-[14px]">
                                Trusted by thousands of people
                            </p>
                        </div>
                        <div className="absolute right-[450px] 2xl:right-[500px] top-[150px] xl:top-[490px] 2xl:top-[580px] hidden xl:inline-block">
                            <Thread />
                        </div>
                    </section>
                                     
                </div> 
                <div className="atm-card-section relative ">
                    <div className="atm-card h-[400px] xl:h-0"></div>
                    {/* <div className="absolute z-20 rotate-180 top-[-30px] sm:top-[-50px] md:top-[30px] w-full xl:hidden h-[20%]"><Wave/></div> */}
                    <div className="z-[10] absolute top-1/2 left-1/2 transform translate-x-[-36%] translate-y-[-68%] scale-[.85]"><CardSvgTop /></div>
                    <div className="absolute top-1/2 left-1/2 transform translate-x-[-60%] translate-y-[-42%] scale-[.85]"><CardSvgBottom /></div>
                    <div className="hidden sm:inline-block">
                        <Shadow />
                    </div>
                    <div className="absolute top-[95%] right-[12%] md:right-[50px] xl:top-[310px] 2xl:top-[390px] xl:right-[48%]">
                        <File />
                    </div>
                </div>
            </section>
        </main>
    );
};