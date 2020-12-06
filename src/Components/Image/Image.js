import React from "react";

import styled from "styled-components";

const StyledImage = styled.img`
    width: ${props => props.width ? props.width : "100%"};
    height: ${props => props.height ? props.height : "auto"};
    border-radius: ${props => props.radius ? props.radius : "3px"};
    overflow: hidden;
`;

export default function Image(props) {
    return <StyledImage src={props.src} alt={props.alt} width={props.width} height={props.height} radius={props.radius} />
}