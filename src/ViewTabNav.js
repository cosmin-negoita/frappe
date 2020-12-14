import React, {useEffect} from "react";

import Container from "./Components/Container/Container.js";
import Card from "./Components/Card/Card.js";
import TabNav from "./Components/TabNav/TabNav.js";
import {BodyText, SubHeadingText, TitleText} from "./Components/Typography/Typography.js";

export default function ViewTabNav(props) {
    useEffect(() => {
        document.title = "Frappe - Tabbed Navigation";
    });
    return (<>
        <Container size="50" spacing="50">
            <TitleText>Tabbed Navigation</TitleText>
            <Container spacing="30">
                <Card type="box" size="30" spacing="30">
                    <SubHeadingText>TabNav Equal Tab Widths</SubHeadingText>
                    <TabNav marginBottom="20">
                        <BodyText label="Tab 1">This is just placeholder content</BodyText>
                        <BodyText label="Tab 2">This is just placeholder content and this time it's longer</BodyText>
                        <BodyText label="Tab 3">This is just placeholder content and this time it's even longer so you can notice it changing</BodyText>
                    </TabNav>
                </Card>
                <Card type="box" size="30" spacing="30">
                    <SubHeadingText>TabNav Max Content Tabs</SubHeadingText>
                    <TabNav maxContent={true} marginBottom="20">
                        <BodyText label="Tab 1">This is just placeholder content</BodyText>
                        <BodyText label="Tab 2">This is just placeholder content and this time it's longer</BodyText>
                        <BodyText label="Tab 3">This is just placeholder content and this time it's even longer so you can notice it changing</BodyText>
                    </TabNav>
                </Card>
            </Container>
        </Container>
    </>)
}