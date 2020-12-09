import React from "react";
import styled from "styled-components";
import {FormElementAppearance} from "./FormElementAppearance.js";
import "../Typography/Typography.css";

const StyledLabel = styled.label`
    position: relative;
    display: grid;
    align-items: center;
    grid-gap: var(--su-10);
    user-select: none;
    height: 20px;
    padding-left: var(--su-30);
    font-size: var(--scale1);
    line-height: 16px;
    color: var(--gray-5);
`;
const StyledInputRadio = styled.input.attrs(props => ({
    type: "radio",
    size: props.size || "normal"
}))`
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    cursor: pointer;
    width: 20px;
    height: 20px;
`;
const StyledCheckmark = styled.div.attrs(props =>({
    checked: props.checked
}))`
    ${FormElementAppearance}
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    display: grid;
    align-items: center;
    justify-items: center;
    cursor: pointer;
    border-radius: 10px;
    pointer-events: none;

    ${StyledInputRadio}:hover ~ & {
        border-color: var(--brand);
        box-shadow: 0 0 0 4px var(--brand-light); 
    }
    ${StyledInputRadio}:checked ~ & {
        baackground-color: var(--gray-0);
        border-color: var(--brand);
        box-shadow: inset 0 0 0 4px var(--brand);
    }
    ${StyledInputRadio}:disabled ~ &, ${StyledInputRadio}:disabled:hover {
        background-color: var(--gray-1);
        border-color: var(--gray-2);
        box-shadow: none;
        cursor: not-allowed;
    }
`;

export default function RadioButton(props) {
    return (
        <StyledLabel className={props.className} >
            <StyledInputRadio checked={props.checked} onChange={props.onChange} name={props.name} value={props.value} disabled={props.disabled} />
            <StyledCheckmark isValid={props.isValid}></StyledCheckmark>
            {props.children}
        </StyledLabel>
    );
}