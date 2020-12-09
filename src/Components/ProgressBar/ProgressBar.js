import React from "react";
import styled from "styled-components";
import {SmallBodyText} from "../Typography/Typography.js";

const StyledDiv = styled.div`
    position: relative;
    display: block;
    width: 100%;
    height: ${props => props.height || "20px"};
    background: var(--brand-light);

    &:after {
        position: absolute;
        top: 0;
        left: 0;
        content: "";
        display: block;
        width: ${props => props.progress + "%" || "0"};
        height: ${props => props.height || "20px"};
        background: var(--brand);
        transition: width 0.2s ease-in;
    }
`;

function ProgressBar(props) {
    return <StyledDiv height={props.height} progress={props.progress} />
}

export default ProgressBar