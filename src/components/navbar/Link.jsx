import React from 'react';

export default function LinkList(props) {
    return (
        <li className="pl-[26px] xl:pl-[46px] font-medium hidden sm:inline-block"><a href='/'>{props.name}</a></li>
    );
};
