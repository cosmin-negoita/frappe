import React from "react";
import styled from "styled-components";
import Icon from "../Icons/Icon.js";

const StyledButton = styled.button.attrs(props => ({
    childrenNo: props.childrenNo
}))`
    display: grid;
    grid-template-rows: 1fr;
    justify-content: center;
    grid-template-columns: ${props => props.rightIcon ? (props.leftIcon ? "max-content max-content max-content" : "max-content max-content") : (props.leftIcon ? "max-content max-content" : "max-content")};
    grid-gap: ${props => props.rightIcon ||  props.leftIcon ? "5px" : "0"};
    line-height: 16px;
    outline: 0;
    border-radius: var(--radius-inner);
    transition: all 0.2s ease-in, border-color 0.2s ease-in;
    background: ${props => props.disabled ? "var(--gray-1)" : (props.type === "primary" ? "var(--brand)" : "transparent")};
    border: 1px solid ${props => props.isValid === false ? "var(--error)" : (props.disabled ? "var(--gray-2)" : (props.type === "primary" ? "var(--brand)" : (props.type === "secondary" ? "var(--gray-3)" : "transparent")))};
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
    const type = props.type || "primary";
    const size = props.size || "normal";
    const iconColor = props.disabled ? "--gray-4" : (type === "primary" ? "--gray-0" : "--gray-5");
    return (
        <StyledButton isValid={props.isValid} className={props.className} type={type} size={size} onClick={props.onClick} leftIcon={props.leftIcon} rightIcon={props.rightIcon} disabled={props.disabled}>
            {props.leftIcon && <Icon type={props.leftIcon} color={iconColor} /> }
            {props.children}
            {props.rightIcon && <Icon type={props.rightIcon} color={iconColor} /> }
        </StyledButton>
    )
}