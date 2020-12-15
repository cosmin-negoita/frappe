import React from "react";
import styled from "styled-components";
import {getColor} from "../Colors.js";

const StyledDiv = styled.div`
    ${props => props.isContained && `
        display: grid;
        align-items: center;
        justify-items: center;
        width: ${props.containerSize};
        height: ${props.containerSize};
        background: ${props.background ? "var(--" + props.background + ")" : "transparent"};
        box-shadow: inset 0 0 0 1px ${props.borderColor ? "var(--" + props.borderColor + ")" : "var(--gray-3)"};
        border-radius: 50%;
    `}

    & svg {
        display: block;
    }
`;

export default function Icon(props) {
    const size = props.size ? props.size : "16";
    const selectedColor = getColor(props.color) || getColor("--gray-5");

    return (
        <StyledDiv background={props.background} borderColor={props.borderColor} isContained={props.isContained || false} containerSize={props.containerSize || "32px"}>
            {props.type === "heart" &&
                <svg width={size} height={size} viewBox="0 0 16 16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.1818 2C9.85182 2 8.68091 2.65538 8 3.64763C7.31909 2.65538 6.14818 2 4.81818 2C2.71182 2 1 3.64763 1 5.675C1 11.1875 8 14.25 8 14.25C8 14.25 15 11.1875 15 5.675C15 3.64763 13.2882 2 11.1818 2Z" vectorEffect="non-scaling-stroke" strokeWidth="1" stroke={selectedColor} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.00681 11.4571C6.40954 10.5016 3.5459 8.41297 3.5459 5.67509" vectorEffect="non-scaling-stroke" strokeWidth="1" stroke={selectedColor} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            }
            {props.type === "arrow-right" &&
                <svg className={props.className} width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 2.5L15.5 8L10 13.5" stroke={selectedColor} vectorEffect="non-scaling-stroke" strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15.5 8H0.5" stroke={selectedColor} vectorEffect="non-scaling-stroke" strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            }
            {props.type === "arrow-left" &&
                <svg className={props.className} width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 2.5L0.5 8L6 13.5" stroke={selectedColor} vectorEffect="non-scaling-stroke" strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M0.5 8H15.5" stroke={selectedColor} vectorEffect="non-scaling-stroke" strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            }
            {props.type === "chevron-right" &&
                <svg className={props.className} width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 4L10 8L6 12" stroke={selectedColor} vectorEffect="non-scaling-stroke" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            }
            {props.type === "chevron-left" &&
                <svg className={props.className} width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 12L6 8L10 4" stroke={selectedColor} vectorEffect="non-scaling-stroke" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            }
            {props.type === "chevron-up" &&
                <svg className={props.className} width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 10L8 6L4 10" stroke={selectedColor} vectorEffect="non-scaling-stroke" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            }
            {props.type === "chevron-down" &&
                <svg className={props.className} width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6L8 10L4 6" stroke={selectedColor} vectorEffect="non-scaling-stroke" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            }
            {props.type === "plus" &&
                <svg className={props.className} width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 8H15M8 1L8 15" stroke={selectedColor} vectorEffect="non-scaling-stroke" strokeWidth="1" strokeLinecap="round"/>
                </svg>
            }
            {props.type === "minus" &&
                <svg className={props.className} width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 8H15" stroke={selectedColor} vectorEffect="non-scaling-stroke" strokeWidth="1" strokeLinecap="round"/>
                </svg>
            }
            {props.type === "checkmark" &&
                <svg className={props.className} width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 7.72727L6.63636 11.3636L13 5" stroke={selectedColor} vectorEffect="non-scaling-stroke" strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            }
            {props.type === "home" &&
                <svg className={props.className} width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path vectorEffect="non-scaling-stroke" d="M0.666992 7.33332L6.86033 1.13999C7.16699 0.833323 7.57366 0.666656 8.00033 0.666656C8.42699 0.666656 8.83366 0.833323 9.14033 1.13999L15.3337 7.33332" stroke={selectedColor} strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path vectorEffect="non-scaling-stroke" d="M13.3337 5.33332V14C13.3337 14.7333 12.7337 15.3333 12.0003 15.3333H4.00033C3.26699 15.3333 2.66699 14.7333 2.66699 14V5.33332V0.666656" stroke={selectedColor}  strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path vectorEffect="non-scaling-stroke" d="M8.66667 10H7.33333C6.6 10 6 10.6 6 11.3333V15.3333H10V11.3333C10 10.6 9.4 10 8.66667 10Z" stroke={selectedColor} strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>                
            }
            {props.type === "globe" &&
                <svg className={props.className} width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path vectorEffect="non-scaling-stroke" d="M8.00033 15.3333C12.0504 15.3333 15.3337 12.0501 15.3337 7.99999C15.3337 3.9499 12.0504 0.666656 8.00033 0.666656C3.95024 0.666656 0.666992 3.9499 0.666992 7.99999C0.666992 12.0501 3.95024 15.3333 8.00033 15.3333Z" stroke={selectedColor} strokeWidth="1" strokeMiterlimit="10"/>
                    <path vectorEffect="non-scaling-stroke" d="M8.00033 10.6667C12.0504 10.6667 15.3337 9.47277 15.3337 8.00001C15.3337 6.52725 12.0504 5.33334 8.00033 5.33334C3.95024 5.33334 0.666992 6.52725 0.666992 8.00001C0.666992 9.47277 3.95024 10.6667 8.00033 10.6667Z" stroke={selectedColor} strokeWidth="1" strokeMiterlimit="10"/>
                    <path vectorEffect="non-scaling-stroke" d="M7.99967 15.3333C9.47243 15.3333 10.6663 12.0501 10.6663 7.99999C10.6663 3.9499 9.47243 0.666656 7.99967 0.666656C6.52692 0.666656 5.33301 3.9499 5.33301 7.99999C5.33301 12.0501 6.52692 15.3333 7.99967 15.3333Z" stroke={selectedColor} strokeWidth="1" strokeMiterlimit="10"/>
                </svg>                              
            }
            {props.type === "users" &&
                <svg className={props.className} width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path vectorEffect="non-scaling-stroke" d="M1 15V9.9091C1 8.50274 2.1391 7.36365 3.54548 7.36365H7.36371C8.77009 7.36365 9.90919 8.50274 9.90919 9.9091V15" stroke={selectedColor} strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path vectorEffect="non-scaling-stroke" d="M5.45431 7.36363C7.2116 7.36363 8.63617 5.93909 8.63617 4.18182C8.63617 2.42455 7.2116 1 5.45431 1C3.69703 1 2.27246 2.42455 2.27246 4.18182C2.27246 5.93909 3.69703 7.36363 5.45431 7.36363Z" stroke={selectedColor} strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path vectorEffect="non-scaling-stroke" d="M15.0001 15V13.0909C15.0001 11.6845 13.861 10.5454 12.4547 10.5454H10.5456H9.90918" stroke={selectedColor} strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path vectorEffect="non-scaling-stroke" d="M9.90868 10.4818C10.1123 10.5263 10.3287 10.5454 10.545 10.5454C12.3014 10.5454 13.7269 9.11997 13.7269 7.36361C13.7269 5.60725 12.3014 4.18179 10.545 4.18179C9.79413 4.18179 9.10049 4.4427 8.55957 4.88179" stroke={selectedColor} strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path vectorEffect="non-scaling-stroke" d="M7.44043 6.67085V6.66357" stroke={selectedColor} strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>                                                            
            }
            {props.type === "comment" &&
                <svg className={props.className} width={size} height={size} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path vectorEffect="non-scaling-stroke" d="M1 3.90909V11.1818C1 12.7891 2.30182 14.0909 3.90909 14.0909H4.63636C5.55273 14.0909 6.41091 14.52 6.96364 15.2545L7.83636 16.4182C8.11273 16.7818 8.54182 17 9 17C9.45818 17 9.88727 16.7818 10.1636 16.4182L11.0364 15.2545C11.5891 14.52 12.4473 14.0909 13.3636 14.0909H14.0909C15.6982 14.0909 17 12.7891 17 11.1818V3.90909C17 2.30182 15.6982 1 14.0909 1H3.90909C2.30182 1 1 2.30182 1 3.90909Z" stroke={selectedColor} strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path vectorEffect="non-scaling-stroke" d="M4.63672 6.09091H13.364" stroke={selectedColor} strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path vectorEffect="non-scaling-stroke" d="M4.63672 9H13.364" stroke={selectedColor} strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>                                                                            
            }
            {props.type === "eye" &&
                <svg className={props.className} width={size} height={size} viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path vectorEffect="non-scaling-stroke" d="M1 7.54545C1 7.54545 3.18182 1 9 1C14.8182 1 17 7.54545 17 7.54545C17 7.54545 14.8182 14.0909 9 14.0909C3.18182 14.0909 1 7.54545 1 7.54545Z" stroke={selectedColor} strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path vectorEffect="non-scaling-stroke" d="M8.99964 11.1818C11.008 11.1818 12.636 9.55376 12.636 7.54545C12.636 5.53714 11.008 3.90909 8.99964 3.90909C6.99134 3.90909 5.36328 5.53714 5.36328 7.54545C5.36328 9.55376 6.99134 11.1818 8.99964 11.1818Z" stroke={selectedColor} strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path vectorEffect="non-scaling-stroke" d="M9.00044 6.09091C8.20044 6.09091 7.5459 6.74546 7.5459 7.54546" stroke={selectedColor} strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>                                                                                           
            }
            {props.type === "articles" &&
                <svg className={props.className} width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path vectorEffect="non-scaling-stroke" d="M5.33333 12H14C14.7333 12 15.3333 11.4 15.3333 10.6667V1.99999C15.3333 1.26666 14.7333 0.666656 14 0.666656H5.33333C4.6 0.666656 4 1.26666 4 1.99999V10.6667C4 11.4 4.6 12 5.33333 12Z" stroke={selectedColor} strokeWidth="1" strokeMiterlimit="10"/>
                        <path vectorEffect="non-scaling-stroke" d="M8.00033 12V14C8.00033 14.7333 7.40033 15.3333 6.66699 15.3333H2.00033C1.26699 15.3333 0.666992 14.7333 0.666992 14V9.33333C0.666992 8.6 1.26699 8 2.00033 8H4.00033" stroke={selectedColor} strokeWidth="1" strokeMiterlimit="10"/>
                        <path vectorEffect="non-scaling-stroke" d="M6.66699 3.33334H11.3337" stroke={selectedColor} strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path vectorEffect="non-scaling-stroke" d="M6.66699 5.33334H12.667" stroke={selectedColor} strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path vectorEffect="non-scaling-stroke" d="M6.66699 7.33334H10.667" stroke={selectedColor} strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path vectorEffect="non-scaling-stroke" d="M6.66699 9.33334H12.0003" stroke={selectedColor} strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>                                                                                                          
            }
            {props.type === "settings" &&
                <svg className={props.className} width={size} height={size} viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path vectorEffect="non-scaling-stroke" d="M14.0033 9C14.0033 8.99273 14.0033 8.98545 14.0033 8.98545C14.0033 8.45455 14.1779 7.93818 14.5561 7.56L14.8179 7.29091C15.4215 6.68 15.5452 5.74182 15.1161 5C14.687 4.25818 13.8143 3.89455 12.9852 4.11273L12.6143 4.21455C12.127 4.34545 11.6106 4.27273 11.1743 4.01818C11.1233 3.98909 11.0652 3.95273 11.0143 3.92364C10.5779 3.67636 10.2579 3.26182 10.127 2.78182L10.0179 2.40364C9.79244 1.57455 9.04335 1 8.18517 1C7.32699 1 6.57062 1.57455 6.34517 2.40364L6.24335 2.77455C6.11244 3.26182 5.79971 3.67636 5.35608 3.91636C5.30517 3.94545 5.25426 3.97455 5.19608 4.01091C4.76699 4.26545 4.25062 4.33818 3.76335 4.20727L3.38517 4.11273C2.55608 3.89455 1.68335 4.25818 1.25426 5C0.825167 5.74182 0.948803 6.68 1.55244 7.29091L1.81426 7.56C2.18517 7.93818 2.36698 8.45455 2.36698 8.98545C2.36698 8.99273 2.36698 9 2.36698 9V9.01455C2.36698 9.54546 2.19244 10.0618 1.81426 10.44L1.55244 10.7091C0.948803 11.32 0.825167 12.2582 1.25426 13C1.68335 13.7418 2.55608 14.1055 3.38517 13.8873L3.75608 13.7855C4.24335 13.6545 4.75971 13.7273 5.19608 13.9818C5.24699 14.0109 5.30517 14.0473 5.35608 14.0764C5.79244 14.3236 6.11244 14.7382 6.24335 15.2182L6.34517 15.5891C6.57062 16.4255 7.32699 17 8.18517 17C9.04335 17 9.79971 16.4255 10.0252 15.5964L10.127 15.2255C10.2579 14.7455 10.5779 14.3309 11.0143 14.0836C11.0652 14.0545 11.1233 14.0255 11.1743 13.9891C11.6033 13.7273 12.127 13.6618 12.6143 13.7927L12.9852 13.8945C13.8143 14.1127 14.687 13.7491 15.1161 13.0073C15.5452 12.2655 15.4215 11.3273 14.8179 10.7164L14.5561 10.4473C14.1852 10.0691 14.0033 9.55273 14.0033 9.02182C14.0033 9.01455 14.0033 9.00727 14.0033 9Z" stroke={selectedColor} strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path vectorEffect="non-scaling-stroke" d="M8.18643 11.9091C9.79308 11.9091 11.0955 10.6066 11.0955 9C11.0955 7.39336 9.79308 6.09091 8.18643 6.09091C6.57979 6.09091 5.27734 7.39336 5.27734 9C5.27734 10.6066 6.57979 11.9091 8.18643 11.9091Z" stroke={selectedColor} strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>                                                                                                        
            }
            {props.type === "reset" &&
                <svg className={props.className} width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.46699 4.66666C2.68033 2.29332 5.14699 0.666656 8.00033 0.666656C12.0537 0.666656 15.3337 3.94666 15.3337 7.99999C15.3337 12.0533 12.0537 15.3333 8.00033 15.3333C3.94699 15.3333 0.666992 12.0533 0.666992 7.99999" stroke={selectedColor} strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1.33301 0.666656V4.66666H5.33301" stroke={selectedColor} strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>                
            }
            {props.type === "colors" &&
                <svg className={props.className} width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path d="M6.00033 1.99999V6.19999L1.46699 10.7333C1.20033 11 1.06699 11.2667 0.933659 11.6C0.866992 11.6667 0.866992 11.7333 0.866992 11.8667C0.866992 11.9333 0.800326 12.0667 0.800326 12.1333C0.666992 12.3333 0.666992 12.4667 0.666992 12.6667V1.99999C0.666992 1.26666 1.26699 0.666656 2.00033 0.666656H4.66699C5.40033 0.666656 6.00033 1.26666 6.00033 1.99999Z" stroke={selectedColor} strokeWidth="1" strokeMiterlimit="10"/>
                        <path d="M0.666992 12.6667C0.666992 11.2 1.86699 10 3.33366 10H14.0003C14.7337 10 15.3337 10.6 15.3337 11.3333V14C15.3337 14.7333 14.7337 15.3333 14.0003 15.3333H3.33366C1.86699 15.3333 0.666992 14.1333 0.666992 12.6667Z" stroke={selectedColor} strokeWidth="1" strokeMiterlimit="10"/>
                        <path d="M12.7335 6.99999L9.80013 9.99999H3.33346C2.60013 9.99999 1.93346 10.3333 1.4668 10.8L6.00013 6.19999L9.00013 3.19999C9.53346 2.66665 10.3335 2.66665 10.8668 3.19999L12.7335 5.06665C13.2668 5.66665 13.2668 6.46665 12.7335 6.99999Z" stroke={selectedColor} strokeWidth="1" strokeMiterlimit="10"/>
                        <path d="M12.6663 12H7.99967C7.59967 12 7.33301 12.2667 7.33301 12.6667C7.33301 13.0667 7.59967 13.3333 7.99967 13.3333H12.6663C13.0663 13.3333 13.333 13.0667 13.333 12.6667C13.333 12.2667 13.0663 12 12.6663 12Z" stroke={selectedColor} strokeWidth="1" strokeMiterlimit="10"/>
                    </g>
                </svg>                                
            }
            {props.type === "typography" &&
                <svg className={props.className} width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path d="M12.3337 4.66668H1.66699C1.13366 4.66668 0.666992 4.20001 0.666992 3.66668V2.33334C0.666992 1.80001 1.13366 1.33334 1.66699 1.33334H12.3337C12.867 1.33334 13.3337 1.80001 13.3337 2.33334V3.66668C13.3337 4.20001 12.867 4.66668 12.3337 4.66668Z" stroke={selectedColor} strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M14.3337 9.33334H1.66699C1.13366 9.33334 0.666992 8.86668 0.666992 8.33334C0.666992 7.80001 1.13366 7.33334 1.66699 7.33334H14.3337C14.867 7.33334 15.3337 7.80001 15.3337 8.33334C15.3337 8.86668 14.867 9.33334 14.3337 9.33334Z" stroke={selectedColor} strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M0.666992 12H10.0003" stroke={selectedColor} strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M0.666992 14.6667H14.0003" stroke={selectedColor} strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                </svg>                                               
            }
            {props.type === "grid" &&
                <svg className={props.className} width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path d="M6.00033 6.66666H1.33366C0.966992 6.66666 0.666992 6.36666 0.666992 5.99999V1.33332C0.666992 0.966656 0.966992 0.666656 1.33366 0.666656H6.00033C6.36699 0.666656 6.66699 0.966656 6.66699 1.33332V5.99999C6.66699 6.36666 6.36699 6.66666 6.00033 6.66666Z" stroke={selectedColor} strokeWidth="1" strokeMiterlimit="10"/>
                        <path d="M14.6663 6.66666H9.99967C9.63301 6.66666 9.33301 6.36666 9.33301 5.99999V1.33332C9.33301 0.966656 9.63301 0.666656 9.99967 0.666656H14.6663C15.033 0.666656 15.333 0.966656 15.333 1.33332V5.99999C15.333 6.36666 15.033 6.66666 14.6663 6.66666Z" stroke={selectedColor} strokeWidth="1" strokeMiterlimit="10"/>
                        <path d="M6.00033 15.3333H1.33366C0.966992 15.3333 0.666992 15.0333 0.666992 14.6667V10C0.666992 9.63334 0.966992 9.33334 1.33366 9.33334H6.00033C6.36699 9.33334 6.66699 9.63334 6.66699 10V14.6667C6.66699 15.0333 6.36699 15.3333 6.00033 15.3333Z" stroke={selectedColor} strokeWidth="1" strokeMiterlimit="10"/>
                        <path d="M14.6663 15.3333H9.99967C9.63301 15.3333 9.33301 15.0333 9.33301 14.6667V10C9.33301 9.63334 9.63301 9.33334 9.99967 9.33334H14.6663C15.033 9.33334 15.333 9.63334 15.333 10V14.6667C15.333 15.0333 15.033 15.3333 14.6663 15.3333Z" stroke={selectedColor} strokeWidth="1" strokeMiterlimit="10"/>
                    </g>
                </svg>
            }
            {props.type === "list" &&
                <svg className={props.className} width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path d="M14.667 6.66666H1.33366C0.966992 6.66666 0.666992 6.36666 0.666992 5.99999V1.33332C0.666992 0.966656 0.966992 0.666656 1.33366 0.666656H14.667C15.0337 0.666656 15.3337 0.966656 15.3337 1.33332V5.99999C15.3337 6.36666 15.0337 6.66666 14.667 6.66666Z" stroke={selectedColor} strokeWidth="1" strokeMiterlimit="10"/>
                        <path d="M14.667 15.3333H1.33366C0.966992 15.3333 0.666992 15.0333 0.666992 14.6667V10C0.666992 9.63334 0.966992 9.33334 1.33366 9.33334H14.667C15.0337 9.33334 15.3337 9.63334 15.3337 10V14.6667C15.3337 15.0333 15.0337 15.3333 14.667 15.3333Z" stroke={selectedColor} strokeWidth="1" strokeMiterlimit="10"/>
                    </g>
                </svg>                
            }
            {props.type === "button" &&
                <svg className={props.className} width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path d="M8.00033 15.3333C12.0504 15.3333 15.3337 12.0501 15.3337 7.99999C15.3337 3.9499 12.0504 0.666656 8.00033 0.666656C3.95024 0.666656 0.666992 3.9499 0.666992 7.99999C0.666992 12.0501 3.95024 15.3333 8.00033 15.3333Z" stroke={selectedColor} strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9.33301 5.33334H6.66634C5.93301 5.33334 5.33301 5.93334 5.33301 6.66668V9.33334C5.33301 10.0667 5.93301 10.6667 6.66634 10.6667H9.33301C10.0663 10.6667 10.6663 10.0667 10.6663 9.33334V6.66668C10.6663 5.93334 10.0663 5.33334 9.33301 5.33334Z" stroke={selectedColor} strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                </svg>
            }
            {props.type === "tabs" &&
                <svg className={props.className} width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path d="M14.0003 15.3333H2.00033C1.26699 15.3333 0.666992 14.7333 0.666992 14V1.99999C0.666992 1.26666 1.26699 0.666656 2.00033 0.666656H14.0003C14.7337 0.666656 15.3337 1.26666 15.3337 1.99999V14C15.3337 14.7333 14.7337 15.3333 14.0003 15.3333Z" stroke={selectedColor} strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8 0.666656V4.66666H15.3333" stroke={selectedColor} strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M3.33301 7.33334H11.9997" stroke={selectedColor} strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M3.33301 10H9.33301" stroke={selectedColor} strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M3.33301 12.6667H11.9997" stroke={selectedColor} strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                </svg>
            }
            {props.type === "pie-chart" &&
                <svg className={props.className} width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path d="M13.2003 13.2C11.867 14.5333 10.067 15.3333 8.00033 15.3333C3.93366 15.3333 0.666992 12.0667 0.666992 7.99999C0.666992 3.93332 3.93366 0.666656 8.00033 0.666656V7.99999L13.2003 13.2Z" stroke={selectedColor} strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M15.3333 7.99999C15.3333 9.99999 14.5333 11.8667 13.2 13.2L8 7.99999V0.666656C12.0667 0.666656 15.3333 3.93332 15.3333 7.99999Z" stroke={selectedColor} strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                </svg>                             
            }
            {props.type === "table" &&
                <svg className={props.className} width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path d="M14.0003 14.6667H2.00033C1.26699 14.6667 0.666992 14.0667 0.666992 13.3333V2.66668C0.666992 1.93334 1.26699 1.33334 2.00033 1.33334H14.0003C14.7337 1.33334 15.3337 1.93334 15.3337 2.66668V13.3333C15.3337 14.0667 14.7337 14.6667 14.0003 14.6667Z" stroke={selectedColor} strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M0.666992 4.66666H15.3337" stroke={selectedColor} strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M0.666992 8H15.3337" stroke={selectedColor} strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M0.666992 11.3333H15.3337" stroke={selectedColor} strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6 14.6667V1.33334" stroke={selectedColor} strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                </svg>                                            
            }
        </StyledDiv>
    )
}