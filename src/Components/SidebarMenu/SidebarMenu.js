import React from "react";
import styled from "styled-components";

import Container from "../Container/Container.js";
import Icon from "../Icons/Icon.js";

const StyledItem = styled(Container)`
    padding: ${props => "16px var(--su-" + props.size + ")"};

    &:hover {
        cursor: pointer;
        background: var(--brand-light);
    }

    ${props => props.isActive && `
        box-shadow: inset 4px 0 0 var(--brand);
    `}
`;

function SidebarMenuItem(props) {
    return (
        <StyledItem isActive={props.isActive} layout="16px 1fr" alignItems="center" spacing="10" size={props.size}><Icon type={props.icon} />{props.children}</StyledItem>
    )
}

export default SidebarMenuItem