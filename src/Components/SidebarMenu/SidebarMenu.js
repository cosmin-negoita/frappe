import React, {useState} from "react";
import styled from "styled-components";
import {NavLink, useLocation} from "react-router-dom";
import {LabelText} from "../Typography/Typography.js";

import Container from "../Container/Container.js";
import Icon from "../Icons/Icon.js";

const StyledNavLink = styled(NavLink)`
    padding: ${props => "16px var(--su-" + props.size + ")"};
    color: var(--gray-4);
    display: grid;
    grid-template-columns: ${props => props.iconSize}px 1fr;
    grid-gap: var(--su-10);
    align-items: center;
    transition: all 0.2s ease-in;
    text-decoration: none;

    &:hover {
        color: var(--gray-5);
        cursor: pointer;
        background: var(--brand-light);
    }

    &.active{
        color: var(--gray-5);
        box-shadow: inset 4px 0 0 var(--brand);
        background: var(--brand-light);
    }
`;

const SidebarLabel = styled(LabelText)`
    padding: ${props => "16px var(--su-" + props.size + ")"};
    color: var(--gray-4);
`;

function SidebarMenuItem(props) {
    const location = useLocation();
    const iconSize = props.iconSize || "16";
    const iconColor = location.pathname === props.path ? "--gray-5" : "--gray-4";
    return (
        <StyledNavLink exact to={props.path} iconSize={iconSize} activeClassName="active" size={props.size}>
            <Icon type={props.icon} size={iconSize} color={iconColor} />
            {props.children}
        </StyledNavLink>
    )
}

export {SidebarMenuItem, SidebarLabel}