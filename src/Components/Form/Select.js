import React, {useState} from "react";
import styled, {css} from "styled-components";
import {StyledFormField, FormElementAppearance} from "./FormElementAppearance.js";
import "../Typography/Typography.css";
import {SmallBodyText} from "../Typography/Typography.js";
import Icon from "../Icons/Icon.js";

const StyledSelectDiv = styled.div`
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

const StyledSelect = styled.select.attrs(props => ({
    size: props.size || "normal"
}))`
    ${FormElementAppearance}
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
    const chevronColor = props.disabled ? "--gray-4" : "--gray-5";

    return (
        <StyledFormField>
            {props.label && <label className="text--label">{props.label}</label>}
            <StyledSelectDiv>
                <Icon type="chevron-down" color={chevronColor} />
                <StyledSelect size={props.size} name={props.name} className={props.className} value={props.value} onChange={props.onChange} isValid={props.isValid} disabled={props.disabled}>
                    {props.children}
                </StyledSelect>
            </StyledSelectDiv>
            {props.isValid === false && <SmallBodyText>{props.errorMessage}</SmallBodyText>}
        </StyledFormField>
        )
}