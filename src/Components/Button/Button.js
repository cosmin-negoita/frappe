import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: max-content max-content;
    justify-content: center;
    grid-gap: 5px;
    line-height: 16px;
    outline: 0;
    border-radius: var(--radius-inner);
    transition: all 0.2s ease-in, border-color 0.2s ease-in;
    background: ${props => props.disabled ? "var(--gray-1)" : (props.type === "primary" ? "var(--brand)" : "transparent")};
    border: 1px solid ${props => props.disabled ? "var(--gray-2)" : (props.type === "primary" ? "var(--brand)" : (props.type === "secondary" ? "var(--gray-3)" : "transparent"))};
    color: ${props => props.disabled ? "var(--gray-4)" : (props.type === "primary" ? "var(--gray-0)" : (props.type === "secondary" ? "var(--gray-5)" : "transparent"))};
    font-weight: ${props => props.type === "primary" ? "700" : "500"};
    font-size: ${props => props.size === "large" ? "var(--scale2)" : (props.size === "small" ? "var(--scale-1)" : "var(--scale1)")};
    padding: ${props => props.size === "large" ? "16px" : (props.size === "small" ? "6px" : "11px")};

    &:hover {
        background: ${props => props.disabled ? "var(--gray-1)" : (props.type === "primary" ? "var(--brand-dark)" : "transparent")};
        border-color: ${props => props.disabled ? "var(--gray-2)" : (props.type === "primary" ? "var(--brand-dark)" : (props.type === "secondary" ? "var(--brand)" : "transparent"))};
        box-shadow: ${props => props.disabled ? "none" : "0 0 0 4px var(--brand-light)"};
        cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
    }
`;

// Button Types: primary (default), secondary
// Button Sizes: small, normal (default), large

export default function Button(props) {
    return <StyledButton className={props.className} type={props.type || "primary"} size={props.size || "normal"} onClick={props.onClick} disabled={props.disabled}>{props.children}</StyledButton>
}