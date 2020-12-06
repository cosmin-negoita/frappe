import React from "react";
import styled from "styled-components";
import Container from '../Container/Container.js';
import "../Typography/Typography.css";

const StyledHeader = styled.div`
    color: var(--gray-5);
    font-size: var(--scale-1);
    font-weight: 700;
    padding: ${props => props.size ? "15px " + props.size + "px 15px " + props.size + "px" : "0"};
    border-bottom: 1px solid var(--gray-3);
`;

const StyledContainer = styled(Container)`
    background: ${props => props.type === "box" ? "var(--gray-0)" : "transparent"};
    border: ${props => props.type === "border" ? "1px solid var(--gray-3)" : "none"};
    box-shadow: ${props => props.type === "box" ? "0 4px 8px var(--gray-2)" : "none"};
    border-radius: var(--radius-outer);
    overflow: hidden;
`;

// Card types: box, border
// Card (inherited from Container) sizes: 10, 20, 30, 50, 100
// Card (inherited from Container) spacing: 10, 20, 30, 50, 100
// Card (inherited from Container) layout (columns): 2, 3, 4, auto, max-content
// Card (inherited from Container) utilities: limitHeight, noTopPadding

export default function Card(props) {
    if (props.headerLabel) {
        return (
            <StyledContainer className={props.className} type={props.type} limitHeight={props.limitHeight}>
                <StyledHeader size={props.size}>{props.headerLabel}</StyledHeader>
                <Container size={props.size} spacing={props.spacing} cols={props.cols} >
                    {props.children}
                </Container>
            </StyledContainer>
        );
    }
    else {
        return <StyledContainer className={props.className} type={props.type} size={props.size} spacing={props.spacing} cols={props.cols} limitHeight={props.limitHeight}>{props.children}</StyledContainer>;
    }
}