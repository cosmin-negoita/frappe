import React from "react";
import styled from "styled-components";
import {LabelText} from "../Typography/Typography.js";
import Icon from "../Icons/Icon.js";

const StyledDiv = styled.div`
    ${props => props.type === "positive" &&
        `background: var(--green-dark);`
    }
    ${props => props.type === "negative" &&
        `background: var(--error);`
    }
    color: var(--gray-0);
    padding: 4px;
    border-radius: var(--radius-inner);
    height: max-content;
    display: grid;
    grid-gap: 2px;
    grid-template-columns: 13px max-content;
    align-items: center;
`;

export default function LabeLTag(props) {
    return (
        <StyledDiv type={props.type || "positive"}>
                {props.type === "negative"
                    ? <Icon type="decrease-arrow" color="--gray-0" size="9" />
                    : <Icon type="increase-arrow" color="--gray-0" size="9" />
                }
                <LabelText>{props.children}</LabelText>
        </StyledDiv>
    );
}