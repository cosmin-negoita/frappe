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
        background: transparent;
        box-shadow: inset 0 0 0 1px var(--gray-3);
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
        <StyledDiv isContained={props.isContained || false} containerSize={props.containerSize || "32px"}>
            {props.type === "heart" &&
                <svg width={size} height={size} viewBox="0 0 16 16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.1818 2C9.85182 2 8.68091 2.65538 8 3.64763C7.31909 2.65538 6.14818 2 4.81818 2C2.71182 2 1 3.64763 1 5.675C1 11.1875 8 14.25 8 14.25C8 14.25 15 11.1875 15 5.675C15 3.64763 13.2882 2 11.1818 2Z" vectorEffect="non-scaling-stroke" strokeWidth="1.5" stroke={selectedColor} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.00681 11.4571C6.40954 10.5016 3.5459 8.41297 3.5459 5.67509" vectorEffect="non-scaling-stroke" strokeWidth="1.5" stroke={selectedColor} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            }
            {props.type === "arrow-right" &&
                <svg className={props.className} width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 2.5L15.5 8L10 13.5" stroke={selectedColor} vectorEffect="non-scaling-stroke" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15.5 8H0.5" stroke={selectedColor} vectorEffect="non-scaling-stroke" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            }
            {props.type === "arrow-left" &&
                <svg className={props.className} width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 2.5L0.5 8L6 13.5" stroke={selectedColor} vectorEffect="non-scaling-stroke" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M0.5 8H15.5" stroke={selectedColor} vectorEffect="non-scaling-stroke" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            }
            {props.type === "chevron-right" &&
                <svg className={props.className} width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 4L10 8L6 12" stroke={selectedColor} vectorEffect="non-scaling-stroke" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            }
            {props.type === "chevron-left" &&
                <svg className={props.className} width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 12L6 8L10 4" stroke={selectedColor} vectorEffect="non-scaling-stroke" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            }
            {props.type === "chevron-up" &&
                <svg className={props.className} width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 10L8 6L4 10" stroke={selectedColor} vectorEffect="non-scaling-stroke" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            }
            {props.type === "chevron-down" &&
                <svg className={props.className} width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6L8 10L4 6" stroke={selectedColor} vectorEffect="non-scaling-stroke" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            }
            {props.type === "plus" &&
                <svg className={props.className} width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 8H15M8 1L8 15" stroke={selectedColor} vectorEffect="non-scaling-stroke" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
            }
            {props.type === "minus" &&
                <svg className={props.className} width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 8H15" stroke={selectedColor} vectorEffect="non-scaling-stroke" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
            }
            {props.type === "checkmark" &&
                <svg className={props.className} width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 7.72727L6.63636 11.3636L13 5" stroke={selectedColor} vectorEffect="non-scaling-stroke" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            }
        </StyledDiv>
    )
}