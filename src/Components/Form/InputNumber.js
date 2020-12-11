import React, {useState} from "react";
import styled from "styled-components";

import {StyledFormField, FormElementAppearance} from "./FormElementAppearance.js";
import "../Typography/Typography.css";
import {SmallBodyText} from "../Typography/Typography.js";
import Button from "../Button/Button.js";
import Icon from "../Icons/Icon.js";

const StyledNumberDiv = styled.div`
    display: grid;
    grid-template-columns: 40px 1fr 40px;
    grid-template-rows: 1fr;

    & .minus-button, & .plus-button {
        z-index: 2;
        grid-gap: 0;
        display: grid;
        align-items: center;
        justify-items: center;
        grid-row: 1;
    }
    & .minus-button {
        grid-column: 1 / 2;
    }
    & .plus-button {
        grid-column: 3 / 4;
    }
`;

const StyledInputNumber = styled.input.attrs(props => ({
    type: "number"
}))`
    ${FormElementAppearance}
    width: 100%;
    grid-column: 1 / 4;
    grid-row: 1;
    text-align: center;
    appearance: none;
    -moz-appearance: textfield;
    margin: 0;
    z-index: 1;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;

export default function Input(props) {
    const size = props.size || "normal";

    return (
        <StyledFormField>
            {props.label && <label className="text--label">{props.label}</label>}
            <StyledNumberDiv>
                <Button size={size} onClick={props.onMinusClick} className="minus-button" disabled={props.disabled || props.value <= props.min} leftIcon="minus"></Button>
                <StyledInputNumber size={size} isValid={props.isValid} name={props.name} min={props.min} max={props.max} className={props.className} value={props.value} onChange={props.onChange} disabled={props.disabled} />
                <Button size={size} onClick={props.onPlusClick} className="plus-button" disabled={props.disabled || props.value >= props.max} leftIcon="plus"></Button>
            </StyledNumberDiv>
            {props.isValid === false && <SmallBodyText style={{color: "var(--error)"}}>{props.errorMessage}</SmallBodyText>}
        </StyledFormField>
    )
}