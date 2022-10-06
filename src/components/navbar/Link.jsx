import React from 'react';

export default function LinkList(props) {
    return (
        <li className="z-20 lg:pl-[26px] pl-[40px] xl:pl-[46px] font-medium sm:inline-block py-[7.5px] hover:bg-[#0D1D32] hover:text-white sm:hover:bg-transparent sm:hover:text-[#aed124] pr-[100px] sm:pr-0 rounded-[5px]"><a href='/'>{props.name}</a></li>
    );
};
