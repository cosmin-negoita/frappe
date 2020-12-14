import React, {useEffect} from "react";

import Container from "./Components/Container/Container.js";
import Card from "./Components/Card/Card.js";
import {LabelText, SmallBodyText, BodyText, BigBodyText, SubHeadingText, HeadingText, SubTitleText, TitleText, LinkText} from "./Components/Typography/Typography.js";

export default function ViewTypography(props) {
    useEffect(() => {
        document.title = "Frappe - Typography";
    });
    return (<>
        <Container size="50">
            <TitleText>Typography</TitleText>
        </Container>
        <Container size="50" noVerticalPadding>
            <Container spacing="30" cols="2">
                <Card type="box" size="30" spacing="30">
                    <TitleText>Title Text</TitleText>
                    <SubTitleText>Sub-title Text</SubTitleText>
                    <HeadingText>Heading Text</HeadingText>
                    <SubHeadingText>Sub-heading Text</SubHeadingText>
                    <BigBodyText>Big Body Text</BigBodyText>
                    <BodyText>Body Text</BodyText>
                    <SmallBodyText>Small Body Text</SmallBodyText>
                    <LabelText>Label Text</LabelText>
                </Card>
                <Card type="box" size="30" spacing="30">
                    <TitleText><strong>Title Text</strong></TitleText>
                    <SubTitleText><strong>Sub-title Text</strong></SubTitleText>
                    <HeadingText><strong>Heading Text</strong></HeadingText>
                    <SubHeadingText><strong>Sub-heading Text</strong></SubHeadingText>
                    <BigBodyText><strong>Big Body Text</strong></BigBodyText>
                    <BodyText><strong>Body Text</strong></BodyText>
                    <SmallBodyText><strong>Small Body Text</strong></SmallBodyText>
                    <LabelText><strong>Label Text</strong></LabelText>
                </Card>
            </Container>
        </Container>
    </>)
}