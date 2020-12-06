import React, {useState} from "react";
import styled, {css} from "styled-components";
import {StyledFormField, FormElementAppearance} from "./FormElementAppearance.js";
import "../Typography/Typography.css";
import {SmallBodyText} from "../Typography/Typography.js";

const StyledInputPassword = styled.input.attrs(props => ({
    type: "password",
    size: props.size || "normal"
}))`
    ${FormElementAppearance}
`;

export default function Input(props) {
    return (
        <StyledFormField>
            {props.label && <label className="text--label">{props.label}</label>}
            <StyledInputPassword size={props.size} name={props.name} className={props.className} isValid={props.isValid} placeholder={props.placeholder} value={props.value} onChange={props.onChange} disabled={props.disabled} />
            {props.isValid === false && <SmallBodyText style={{color: "var(--error)"}}>{props.errorMessage}</SmallBodyText>}
        </StyledFormField>
    )
}