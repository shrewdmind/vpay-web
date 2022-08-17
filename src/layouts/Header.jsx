import React from "react";
import NavBar from "../components/navbar/Nav";

export default function HeaderComponent() {
    return (
        <header className="pt-[31px] md:pt-[41px] px-[30px] sm:px-[50px]">
            <section className="flex flex-row items-center">
                <div className="relative flex-1">
                    <svg className="absolute z-[-10] left-[-2px]" width="28" height="33" viewBox="0 0 28 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.6298 31.1895C11.4797 22.9125 0.394768 9.86922 0.394768 9.86922C0.394768 9.86922 2.27616 -8.13873 27.9762 4.73739C27.9762 4.73739 25.7798 39.4665 18.6298 31.1895Z" fill="#DBFB58"/>
                    </svg>
                    <h2 className="text-[20px] pl-[10px] font-semibold">Vpay</h2>
                </div>
                <div className="order-last pl-[15px] sm:order-none text-[12px] xl:text-[14px] sm:flex sm:flex-row-reverse"><NavBar /></div>
                <div className="justify-end flex flex-row text-[14px] items-center sm:pl-[30px]">
                    <button className="w-[90px] xl:w-[102px] h-[34px] xl:h-[40px] sm:h-[40px] ml-[0px] whitespace-nowrap bg-[#0D1D32] text-white rounded-[30px]">Sign Up</button>
                </div>
            </section>
        </header>
    );
}