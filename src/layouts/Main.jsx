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
                            <div className="absolute z-[-10] w-[187px] h-[187px] bg-[#E93314] rounded-full opacity-20 blur-2xl right-1/2 top-1/2 transform translate-x-[115%] translate-y-[200%] sm:translate-x-[170%] sm:translate-y-[0%] xl:translate-x-[180%] xl:translate-y-[10%]"></div>
                            <div className="absolute z-[-10] w-[187px] h-[187px] bg-[#DBFB58] rounded-full opacity-20 blur-2xl right-1/2 top-1/2 transform translate-x-[25%] translate-y-[200%] sm:translate-x-[90%] sm:translate-y-[0%] xl:translate-x-[100%] xl:translate-y-[10%]"></div>
                            <div className="absolute z-[-10] w-[187px] h-[187px] bg-[#1F365C] rounded-full opacity-20 blur-2xl right-1/2 top-1/2 transform translate-x-[70%] translate-y-[260%] sm:translate-x-[130%] sm:translate-y-[60%] xl:translate-x-[140%] xl:translate-y-[70%]"></div>
                        </div>
                        <p className="text-[14px] pb-[13px] font-[500] xl:text-[14px] 2xl:text-[16px] xl:leading-[21px] 2xl:pb-[26px]">
                            We Provide
                        </p>
                        <div className="absolute left-[90px] top-[14px] xl:left-[100px] animate-bounce">
                            <Arrow/>
                        </div>
                        <h1 className="text-[34px] sm:text-[60px] md:text-[65px] lg:text-[76px] xl:text-[76px] 2xl:text-[80px] lg:pt-[18px] lg:pb-[15px] font-[700] p-[0px] xl:pr-[80px] sm:pr-[100px] md:pr-[100px] leading-[38px] sm:leading-[70px] xl:leading-[84px] 2xl:leading-[94px] 2xl:pr-[200px] 2xl:pt-[10px]">
                            Easiest Payment for any business
                        </h1>
                        <p className="text-[13px] sm:text-[13.5px] xl:text-[15px] 2xl:text-[16px] leading-[19px] md:leading-[22.5px] xl:pr-[50px] 2xl:pr-[150px] xl:leading-[22.5px] pt-[27px] 2xl:pt-[45px] font-[300] sm:pr-[40px] md:pr-[120px]">
                            Speed up your business payments. Use VPay for secure invoicing and bill payments for your every day business transactions and payable tools.
                        </p>
                        <div className="absolute left-[50%] xl:left-[65%] top-[-20px] md:inline-block xl:top-[-70px]">
                            <Thread />
                        </div>
                    </section>
                    <section className="text-[14px] flex flex-col sm:flex-row justify-center items-center md:justify-start pt-[40px] pb-[20px] sm:pt-[35px]">
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
                        <div className="absolute top-1/2 left-1/2 transform translate-x-[1800%] 2xl:translate-x-[2500%] translate-y-[-350%] hidden xl:inline-block">
                            <Thread />
                        </div>
                    </section>
                                     
                </div> 
                <div className="atm-card-section relative md:p-[50px]">
                    <div className='w-[275px] h-[475px] m-auto relative'>
                        <div className="z-[10] absolute top-0 left-[14%] xl:left-[0%] animate-updown-motion"><CardSvgTop /></div>
                        <div className="absolute top-[100px] left-[-16%] xl:left-[-32%] animate-[updown_3s_linear_1s_infinite]"><CardSvgBottom /></div>
                        <div className="hidden md:absolute md:inline-block top-1/2 left-1/2 transform translate-x-[-100%] translate-y-[330%] xl:translate-x-[-120%] xl:translate-y-[340%] ">
                            <Shadow />
                        </div>
                    </div>
                    {/* <div className="absolute z-20 rotate-180 top-[-30px] sm:top-[-50px] md:top-[30px] w-full xl:hidden h-[20%]"><Wave/></div> */}
                    <div className="absolute top-[95%] right-[12%] xl:right-[180%] 2xl:right-[240%] xl:top-[70%] 2xl:top-[75%]">
                        <File />
                    </div>
                </div>
            </section>
        </main>
    );
};