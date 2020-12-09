import React from "react";
import styled from "styled-components";
import {FormElementAppearance} from "./FormElementAppearance.js";
import "../Typography/Typography.css";
import Icon from "../Icons/Icon.js";

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
const StyledInputCheckbox = styled.input.attrs(props => ({
    type: "checkbox"
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
    pointer-events: none;

    ${StyledInputCheckbox}:hover ~ & {
        border-color: var(--brand);
        box-shadow: 0 0 0 4px var(--brand-light); 
    }
    ${StyledInputCheckbox}:checked ~ & {
        background-color: var(--brand);
        border-color: var(--brand);
    }
    ${StyledInputCheckbox}:disabled ~ &, ${StyledInputCheckbox}:disabled:hover {
        background-color: var(--gray-1);
        border-color: var(--gray-2);
        box-shadow: none;
        cursor: not-allowed;
    }
`;

export default function Checkbox(props) {
    let checkmarkColor = "--gray-0";
    if (!props.checked && props.isValid === false) checkmarkColor = "--error-bg";
    if (!props.checked && props.disabled) checkmarkColor = "--gray-1";
    if (props.checked && props.disabled) checkmarkColor = "--gray-3";
    
    return (
        <StyledLabel>
            <StyledInputCheckbox className={props.className} onClick={props.onClick} defaultChecked={props.checked} name={props.name} value={props.value} disabled={props.disabled} />
            <StyledCheckmark isValid={props.isValid} defaultChecked={props.checked}><Icon type="checkmark" color={checkmarkColor}/></StyledCheckmark>
            {props.children}
        </StyledLabel>
    );
}