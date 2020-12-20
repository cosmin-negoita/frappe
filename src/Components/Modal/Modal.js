import React, { useEffect } from "react";
import styled from "styled-components";
import {TransitionGroup, CSSTransition} from "react-transition-group";

import Container from "../Container/Container.js";
import Card from "../Card/Card.js";
import clsx from "clsx";
import Icon from "../Icons/Icon.js";

const StyledIcon = styled.div`
    position: absolute;
    top: var(--su-10);
    right: var(--su-10);
    transition: transform 0.1s ease-in;
    &:hover {
        transform: scale(1.1);
        cursor: pointer;
    }
`;

const StyledCard = styled(Card)`
    position: relative;
    box-shadow: none;
    width: 100%;
    max-width: ${props => props.maxWidth}px;
    transition: all 0.5s ease-in;
    overflow: hidden;
    max-height: calc(100% - var(--su-${props => props.contentSize}));
`;

const ScrollableArea = styled(Container)`
    box-sizing: border-box;
    overflow-y: scroll;
    max-height: calc(100vh - var(--su-${props => props.size}));

    &::after {
        content: "";
        display: block;
        width: 100%;
        height: calc(var(--su-${props => props.size}) - var(--su-${props => props.spacing}));
    }
`;

const StyledDiv = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: var(--overlay);
    z-index: 99;
    align-items: center;
    justify-items: center;
    display: grid;

    &.modal-enter {
        opacity: 0;
    }
    &.modal-enter-active {
        opacity: 1;
        transition: opacity 0.3s ease-in;
    }
    &.modal-exit {
        opacity: 1;
    }
    &.modal-exit-active {
        opacity: 0;
        transition: opacity 0.3s ease-in;
    }
`;

export default function Modal(props) {

    return (
        <CSSTransition
            in={props.isOpen}
            classNames="modal"
            timeout={300}
            unmountOnExit
        >
            <StyledDiv key="1" isOpen={props.isOpen}>
                <StyledCard maxWidth={props.maxWidth || "800"} type="box" contentSize={props.size}>
                    <StyledIcon onClick={props.onClose}>
                        <Icon type="cross" isContained containerSize="32px" />
                    </StyledIcon>
                    <ScrollableArea justifyItems={props.justifyItems} size={props.size} spacing={props.spacing} cols={props.cols} layout={props.layout}>
                        {props.children}
                    </ScrollableArea>
                </StyledCard>
            </StyledDiv>
        </CSSTransition>
    )
}