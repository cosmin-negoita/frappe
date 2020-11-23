import React from 'react';

const availableColors = [
    {name: "gray-5", value: "#242E33"},
    {name: "gray-4", value: "#64737A"},
    {name: "gray-0", value: "#FFFFFF"},
    {name: "brand", value: "#5786FF"}
];

function IconHome(props) {
    const selectedColor = availableColors.filter(color => color.name === props.color)[0].value;
    return (
        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.6364 1C11.1164 1 9.77818 1.749 9 2.883C8.22182 1.749 6.88364 1 5.36364 1C2.95636 1 1 2.883 1 5.2C1 11.5 9 15 9 15C9 15 17 11.5 17 5.2C17 2.883 15.0436 1 12.6364 1Z" stroke={selectedColor} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9.00736 11.8081C7.18191 10.7161 3.90918 8.3291 3.90918 5.2001" stroke={selectedColor} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}
function IconArrowRight(props) {
    const selectedColor = availableColors.filter(color => color.name === props.color)[0].value;
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 2.5L15.5 8L10 13.5" stroke={selectedColor} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15.5 8H0.5" stroke={selectedColor} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}
function IconChevronRight(props) {
    const selectedColor = availableColors.filter(color => color.name === props.color)[0].value;
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 12L10 8L6 4" stroke={selectedColor} strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}

export {
    IconHome, IconChevronRight, IconArrowRight
}