import React, {useState} from "react";
import styled, {css} from "styled-components";
import {StyledFormField, FormElementAppearance} from "./FormElementAppearance.js";
import "../Typography/Typography.css";
import {SmallBodyText} from "../Typography/Typography.js";

const StyledTextarea = styled.textarea.attrs(props => ({
    size: props.size || "normal"
}))`
    ${FormElementAppearance}
`;

export default function TextArea(props) {

    return (
        <StyledFormField>
            {props.label && <label className="text--label">{props.label}</label>}
            <StyledTextarea rows={props.rows} cols={props.cols} name={props.name} size={props.size} className={props.className} placeholder={props.placeholder} value={props.value} onChange={props.onChange} disabled={props.disabled} isValid={props.isValid}>
                {props.children}
            </StyledTextarea>
            {props.isValid === false && <SmallBodyText style={{color: "var(--error)"}}>{props.errorMessage}</SmallBodyText>}
        </StyledFormField>
        )
}