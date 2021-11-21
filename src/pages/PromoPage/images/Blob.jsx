import React from 'react';

const Blob = ({ fill = '#88D7E2' }) => {
    return (
        <svg
            width="529"
            height="573"
            viewBox="0 0 529 573"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter0_f_20_659)">
                <circle
                    cx="242.5"
                    cy="286.5"
                    r="136.5"
                    fill={fill}
                    fillOpacity="0.6"
                />
            </g>
            <defs>
                <filter
                    id="filter0_f_20_659"
                    x="-44"
                    y="0"
                    width="573"
                    height="573"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    />
                    <feGaussianBlur
                        stdDeviation="75"
                        result="effect1_foregroundBlur_20_659"
                    />
                </filter>
            </defs>
        </svg>
    );
};
export default Blob;
