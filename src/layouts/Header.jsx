import React from "react";
import NavBar from "../components/navbar/Nav";

export default function HeaderComponent() {
    return (
        <header className="pt-[31px] md:pt-[41px] px-[30px] sm:px-[50px]">    
            <section className="flex flex-row items-center">
                <div className="relative flex-1">
                    <svg className="absolute z-[-10] left-[-2px] 2xl:scale-[1.5]" width="28" height="33" viewBox="0 0 28 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.6298 31.1895C11.4797 22.9125 0.394768 9.86922 0.394768 9.86922C0.394768 9.86922 2.27616 -8.13873 27.9762 4.73739C27.9762 4.73739 25.7798 39.4665 18.6298 31.1895Z" fill="#DBFB58"/>
                    </svg>
                    <h2 className="text-[20px] 2xl:text-[30px] pl-[10px] font-semibold">Vpay</h2>
                </div>
                <div className="order-last pl-[15px] sm:order-none text-[12px] xl:text-[14px] 2xl:text-[16px] sm:flex sm:flex-row-reverse">
                    <NavBar />
                    <div className='nav-pop-up sm:hidden absolute transform translate-x-[-93.5%] translate-y-[20px] bg-[#DBFB58] w-1/2 h-[150px] z-[10] opacity-[0.95] rounded-[20px]'>
                    </div> 
                </div>
                <div className="justify-end flex flex-row text-[14px] 2xl:text-[16px] items-center sm:pl-[30px] 2xl:pl-[50px]">
                    <button className="w-[90px] xl:w-[102px] 2xl:w-[130px] h-[34px] xl:h-[40px] 2xl:h-[50px] sm:h-[40px] ml-[0px] whitespace-nowrap bg-[#0D1D32] text-white rounded-[30px]">Sign Up</button>
                </div>
            </section>
        </header>
    );
}