import React from "react";
import Logo from "../Logo.js";
import {SidebarMenuItem, SidebarLabel} from "../SidebarMenu/SidebarMenu.js"
import Divider from "../Divider.js";
import {BigBodyText, BodyText} from "../Typography/Typography.js";
import Container from "../Container/Container.js";
import Card from "../Card/Card.js";

export default function Sidebar(props) {
    return (
        <Card className="scrollable" type="popout">
            <Container size="30" spacing="20">
                <Logo />
                <BodyText>UI Kit built in React by Cosmin Negoita.</BodyText>
            </Container>
            <Divider />
            <Container size="30" noHorizontalPadding={true} noTopPadding>
                <SidebarLabel size="30">Usage</SidebarLabel>
                <SidebarMenuItem path="/" size="30" icon="articles" iconSize="20"><BodyText>Card Examples</BodyText></SidebarMenuItem>
                <SidebarMenuItem path="/experiments" size="30" icon="comment" iconSize="20"><BodyText>Experiments</BodyText></SidebarMenuItem>
                <SidebarMenuItem path="/dashboard" size="30" icon="users" iconSize="20"><BodyText>Dashboard</BodyText></SidebarMenuItem>
                <SidebarLabel size="30">Components</SidebarLabel>
                <SidebarMenuItem path="/colors" size="30" icon="colors" iconSize="20"><BodyText>Colors</BodyText></SidebarMenuItem>
                <SidebarMenuItem path="/typography" size="30" icon="typography" iconSize="20"><BodyText>Typography</BodyText></SidebarMenuItem>
                <SidebarMenuItem path="/iconography" size="30" icon="home" iconSize="20"><BodyText>Iconography</BodyText></SidebarMenuItem>
                <SidebarMenuItem path="/containers" size="30" icon="grid" iconSize="20"><BodyText>Containers &amp; Cards</BodyText></SidebarMenuItem>
                <SidebarMenuItem path="/buttons" size="30" icon="button" iconSize="20"><BodyText>Buttons</BodyText></SidebarMenuItem>
                <SidebarMenuItem path="/form-elements" size="30" icon="list" iconSize="20"><BodyText>Form Elements</BodyText></SidebarMenuItem>
                <SidebarMenuItem path="/tabnav" size="30" icon="tabs" iconSize="20"><BodyText>Tabbed Navigation</BodyText></SidebarMenuItem>
                <SidebarMenuItem path="/table" size="30" icon="table" iconSize="20"><BodyText>Data Tables</BodyText></SidebarMenuItem>
                <SidebarMenuItem path="/data-visualization" size="30" icon="pie-chart" iconSize="20"><BodyText>Data Visualization</BodyText></SidebarMenuItem>
            </Container>
        </Card>
    )
}