import React from "react";
import styled from "styled-components";
import {FormElementAppearance} from "./FormElementAppearance.js";
import "../Typography/Typography.css";
import Icon from "../Icons/Icon.js";

const StyledLabel = styled.label`
    position: relative;
    display: grid;
    align-items: center;
    user-select: none;
    height: 20px;
    padding-left: var(--su-50);
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
    width: 40px;
    height: 20px;
`;
const StyledKnob = styled.div.attrs(props =>({
    checked: props.checked
}))`
    ${FormElementAppearance}
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 20px;
    border-radius: 10px;
    cursor: pointer;
    ${StyledInputCheckbox} ~ &:before {
        content: "";
        width: 20px;
        height: 20px;
        border-radius: 10px;
        position: absolute;
        top: -1px;
        left: -1px;
        background-color: var(--gray-3);
        transition: left 0.2s ease-in;
        pointer-events: none;
    }

    ${StyledInputCheckbox}:hover ~ &, &:hover {
        border-color: var(--gray-3);
        box-shadow: 0 0 0 4px var(--gray-1);
    }

    ${StyledInputCheckbox}:checked ~ &:before {
        left: 20px;
        background-color: var(--brand);
    }
    ${StyledInputCheckbox}:checked ~ & {
        border-color: var(--brand);
    }
`;

export default function Checkbox(props) {
    return (
        <StyledLabel>
            <StyledInputCheckbox className={props.className} onClick={props.onClick} defaultChecked={props.checked} name={props.name} value={props.value} />
            <StyledKnob isValid={props.isValid} defaultChecked={props.checked}></StyledKnob>
            {props.children}
        </StyledLabel>
    );
}