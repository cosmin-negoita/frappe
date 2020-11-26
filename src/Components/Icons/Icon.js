import React from 'react';
import {getColor} from "../Colors.js";

function IconHeart(props) {
    const selectedColor = getColor(props.color) || getColor("--gray-0");
    return (
        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.6364 1C11.1164 1 9.77818 1.749 9 2.883C8.22182 1.749 6.88364 1 5.36364 1C2.95636 1 1 2.883 1 5.2C1 11.5 9 15 9 15C9 15 17 11.5 17 5.2C17 2.883 15.0436 1 12.6364 1Z" stroke={selectedColor} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9.00736 11.8081C7.18191 10.7161 3.90918 8.3291 3.90918 5.2001" stroke={selectedColor} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}
function IconArrowRight(props) {
    const selectedColor = getColor(props.color) || getColor("--gray-0");
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 2.5L15.5 8L10 13.5" stroke={selectedColor} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15.5 8H0.5" stroke={selectedColor} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}
function IconPlus(props) {
    const selectedColor = getColor(props.color) || getColor("--gray-0");
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 8H15M8 1L8 15" stroke={selectedColor} strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
    );
}
function IconMinus(props) {
    const selectedColor = getColor(props.color) || getColor("--gray-0");
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 8H15" stroke={selectedColor} strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
    );
}

export {
    IconHeart, IconArrowRight, IconPlus, IconMinus
}