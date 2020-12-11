import React from "react";
import styled from "styled-components";
import {SmallBodyText} from "../Typography/Typography.js";

const StyledDiv = styled.div`
    position: relative;
    display: block;
    width: 100%;
    height: ${props => props.height};
    background: var(--brand-light);
    border-radius: ${props => props.radius};

    &:after {
        position: absolute;
        top: 0;
        left: 0;
        content: "";
        display: block;
        width: ${props => props.progress + "%"};
        height: ${props => props.height};
        background: var(--brand);
        transition: width 0.5s ease-in;
        border-radius: ${props => props.radius};
    }
`;

function ProgressBar(props) {
    return <StyledDiv height={props.height || "20px"} progress={props.progress || "0"} radius={props.radius || "var(--radius-inner)"} />
}

export default ProgressBar