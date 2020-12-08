import React from "react";
import styled from "styled-components";

import Container from "../Container/Container.js";
import Icon from "../Icons/Icon.js";

const StyledItem = styled(Container)`
    padding: ${props => "16px var(--su-" + props.size + ")"};
    color: var(--gray-4);

    &:hover {
        color: var(--gray-5);
        cursor: pointer;
        background: var(--brand-light);
    }

    ${props => props.isActive && `
        color: var(--gray-5);
        box-shadow: inset 4px 0 0 var(--brand);
    `}
`;

function SidebarMenuItem(props) {
    const iconSize = props.iconSize || "16";
    return (
        <StyledItem isActive={props.isActive} layout={iconSize + "px 1fr"} alignItems="center" spacing="10" size={props.size}><Icon type={props.icon} size={iconSize} color={props.isActive ? "--gray-5" : "--gray-4"} />{props.children}</StyledItem>
    )
}

export default SidebarMenuItem