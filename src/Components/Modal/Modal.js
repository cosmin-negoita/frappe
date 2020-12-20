import React, { useEffect } from "react";
import styled from "styled-components";
import Container from "../Container/Container.js";
import Card from "../Card/Card.js";
import clsx from "clsx";
import {CSSTransition} from "react-transition-group";
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

        ${StyledCard} {
            opacity: 0;
            transform: scale(0.5);
        }
    }
    &.modal-enter-active {
        opacity: 1;
        transition: opacity 0.3s ease-in;

        ${StyledCard} {
            opacity: 1
            transform: scale(1);
        }
    }
    &.modal-exit {
        opacity: 1;

        ${StyledCard} {
            opacity: 1;
            transform: scale(1);
        }
    }
    &.modal-exit-active {
        opacity: 0;
        transition: opacity 0.3s ease-in;

        ${StyledCard} {
            opacity: 0;
            transform: scale(0.5);
        }
    }

`;

export default function Modal(props) {

    return (
        <CSSTransition in={props.in} timeout={300} classNames="modal" unmountOnExit>
            <StyledDiv key="1" isOpen={props.isOpen}>
                <StyledCard key="2" maxWidth={props.maxWidth || "800"} type="box" {...props}>
                    <StyledIcon onClick={props.onClose}>
                        <Icon type="cross" isContained containerSize="32px" />
                    </StyledIcon>
                    {props.children}
                </StyledCard>
            </StyledDiv>
        </CSSTransition>
    )
}