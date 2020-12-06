import React, {useState} from "react";
import clsx from "clsx";
import styled from "styled-components";

import Container from "../Container/Container.js";

const StyledTabButton = styled.button.attrs(props => ({
    tabSize: props.tabSize || "normal"
}))`
    ${props => props.tabSize === "large" && `
        padding: 17px;
        font-size: var(--scale2);
    `}
    ${props => props.tabSize === "small" && `
        padding: 7px;
        font-size: var(--scale-1);
    `}
    ${props => props.tabSize === "normal" && `
        padding: 12px;
        font-size: var(--scale1);
    `}
    border: 0;
    outline: 0;
    border-bottom: 1px solid var(--gray-3);
    background-color: transparent;
    line-height: 16px;
    color: var(--gray-4);
    cursor: pointer;
    transition: all 0.2s ease-in;

    &:hover {
        color: var(--gray-5);
        box-shadow: inset 0 -4px 0 var(--brand-light);
    }
    &.active {
        color: var(--gray-5);
        border-color: var(--brand);
    }
`;

function TabButton(props) {
    const {className} = props;
    const isActive = props.activeTab === props.label ? "active" : "";
    const classes = clsx(isActive, className);
    return (
        <StyledTabButton className={classes} activeTab={props.activeTab} onClick={props.onClick}>{props.label}</StyledTabButton>
    );
}

const StyledDiv = styled(Container)`
    display: grid;
`;
const StyledTabHeader = styled(Container).attrs(props => ({
    marginBottom: props.marginBottom || "0",
    maxContent: props.maxContent || false
}))`
    grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
    ${props => props.marginBottom && `
        margin-bottom: var(--su-` + props.marginBottom + `);
    `}
    ${props => props.maxContent && `
        grid-template-columns: repeat(auto-fit, minmax(0, max-content));
        box-shadow: inset 0 -1px 0 var(--gray-3);
        grid-gap: var(--su-20);

        ${StyledTabButton} {
            padding-left: 0;
            padding-right: 0;
        }
    `}
`;

export default function TabNav(props) {
    const [activeTab, setActiveTab] = useState(props.children[0].props.label);

    function onTabClick(label) {
        setActiveTab(label);
    }

    return (
        <StyledDiv>
            <StyledTabHeader maxContent={props.maxContent} marginBottom={props.marginBottom}>
                {props.children.map((child, index) => (<TabButton key={index} tabSize={props.tabSize} activeTab={activeTab} label={child.props.label} onClick={(e) => {e.preventDefault(); onTabClick(child.props.label)}} />))}
            </StyledTabHeader>
            <Container size={props.size} spacing={props.spacing}>
                {props.children.map((child) => {
                    if (child.props.label !== activeTab) return undefined;
                    return child.props.children;
                })}
            </Container>
        </StyledDiv>
    );
}