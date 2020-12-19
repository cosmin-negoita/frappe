import React, {useState} from "react";
import styled, {css} from "styled-components";
import {StyledFormField, FormElementAppearance} from "./FormElementAppearance.js";
import "../Typography/Typography.css";
import {SmallBodyText} from "../Typography/Typography.js";
import Icon from "../Icons/Icon.js";

const StyledSelectDiv = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 1fr 40px;
    align-items: center;

    & div {
        grid-column: 2;
        grid-row: 1;
        z-index: 2;
        justify-self: center;
        pointer-events: none;
    }
`;
const StyledIcon = styled(Icon)`
    position: absolute;
    top: calc(50% - 8px);
    left: ${props => props.fieldSize === "small" ? "7px" : (props.fieldSize === "large" ? "17px" : "12px")};
`;
const StyledSelect = styled.select.attrs(props => ({
    size: props.size || "normal"
}))`
    ${FormElementAppearance}
    ${props => props.icon && 
        `padding-left: ${props.size === "small" ? "30px" : (props.size === "large" ? "50px" : "40px")};`
    }
    overflow: visible;
    line-height: 22px;
    appearance: none;
    grid-column: 1 / 3;
    grid-row: 1;

    &:hover {
        cursor: pointer;
        box-shadow: 0 0 0 4px var(--brand-light);
    }
    &:disabled {
        cursor: not-allowed;
    }
    &:disabled:hover {
        box-shadow: none;
    }
`;

export default function Select(props) {
    const iconColor = props.disabled ? "--gray-4" : "--gray-5";

    return (
        <StyledFormField>
            {props.label && <label className="text--label">{props.label}</label>}
            <StyledSelectDiv>
                {props.icon &&
                    <StyledIcon fieldSize={props.size} type={props.icon} color={iconColor} />
                }
                <Icon type="chevron-down" color={iconColor} />
                <StyledSelect icon={props.icon} size={props.size} name={props.name} className={props.className} value={props.value} onChange={props.onChange} isValid={props.isValid} disabled={props.disabled}>
                    {props.children}
                </StyledSelect>
            </StyledSelectDiv>
            {props.isValid === false && <SmallBodyText style={{color: "var(--error)"}}>{props.errorMessage}</SmallBodyText>}
        </StyledFormField>
        )
}