import React from "react";
import styled from "styled-components";
import {LabelText} from "../Typography/Typography.js";

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
`;

export default function LabeLTag(props) {
    return (
        <StyledDiv type={props.type || "positive"}><LabelText>{props.type === "negative" ? "-" : "+"}{props.children}</LabelText></StyledDiv>
    );
}