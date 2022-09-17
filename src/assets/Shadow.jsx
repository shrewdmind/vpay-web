import React from "react";

const Shadow = () => {
    return (
        <svg width="190" height="75" viewBox="0 0 190 75" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_2_73)">
        <ellipse cx="95" cy="37.5" rx="67" ry="9.5" fill="#1F365C" fillOpacity="0.21"/>
        </g>
        <defs>
        <filter id="filter0_f_2_73" x="0" y="0" width="190" height="75" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="14" result="effect1_foregroundBlur_2_73"/>
        </filter>
        </defs>
        </svg>
    );
};

export { Shadow };