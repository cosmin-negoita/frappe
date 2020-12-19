import React from "react";
import styled from "styled-components";
import {StyledFormField, FormElementAppearance} from "./FormElementAppearance.js";
import "../Typography/Typography.css";
import {SmallBodyText} from "../Typography/Typography.js";
import Icon from "../Icons/Icon.js";

const StyledInputText = styled.input.attrs(props => ({
    type: "text",
    size: props.size || "normal"
}))`
    ${FormElementAppearance}
    ${props => props.icon && 
        `padding-left: ${props.size === "small" ? "30px" : (props.size === "large" ? "50px" : "40px")};`
    }
`;
const StyledIcon = styled(Icon)`
    position: absolute;
    top: calc(50% - 8px);
    left: ${props => props.fieldSize === "small" ? "7px" : (props.fieldSize === "large" ? "17px" : "12px")};
`;
const StyledDiv = styled.div`
    position: relative;
    display: grid;
`;

export default function Input(props) {
    const iconColor = props.disabled ? "--gray-4" : "--gray-5";
    return (
        <StyledFormField>
            {props.label && <label className="text--label">{props.label}</label>}
            <StyledDiv size={props.size}>
                {props.icon &&
                    <StyledIcon fieldSize={props.size} type={props.icon} color={iconColor} />
                }
                <StyledInputText icon={props.icon} size={props.size} name={props.name} className={props.className} isValid={props.isValid} placeholder={props.placeholder} value={props.value} onChange={props.onChange} disabled={props.disabled} />
            </StyledDiv>
            {props.isValid === false && <SmallBodyText style={{color: "var(--error)"}}>{props.errorMessage}</SmallBodyText>}
        </StyledFormField>
    )
}