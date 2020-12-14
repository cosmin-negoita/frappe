import React, {useEffect} from "react";

import Container from "./Components/Container/Container.js";
import Card from "./Components/Card/Card.js";
import Button from "./Components/Button/Button.js";
import {SubHeadingText, TitleText} from "./Components/Typography/Typography.js";

export default function ViewButtons(props) {
    useEffect(() => {
        document.title = "Frappe - Buttons";
    });
    return (<>
        <Container size="50">
            <TitleText>Buttons</TitleText>
        </Container>
        <Container size="50" spacing="30" noTopPadding>
            <Container spacing="30" cols="3">
                <Card type="box" spacing="30" size="30" spacing="20">
                    <SubHeadingText>Primary Buttons</SubHeadingText>
                    <Button size="small">Call to Action</Button>
                    <Button>Call to Action</Button>
                    <Button size="large">Call to Action</Button>
                </Card>
                <Card type="box" spacing="30" size="30" spacing="20">
                    <SubHeadingText>Secondary Buttons</SubHeadingText>
                    <Button type="secondary" size="small">Call to Action</Button>
                    <Button type="secondary">Call to Action</Button>
                    <Button type="secondary" size="large">Call to Action</Button>
                </Card>
                <Card type="box" spacing="30" size="30" spacing="20">
                    <SubHeadingText>Disabled Buttons</SubHeadingText>
                    <Button size="small" disabled>Call to Action</Button>
                    <Button disabled>Call to Action</Button>
                    <Button size="large" disabled>Call to Action</Button>
                </Card>
            </Container>
            <Container spacing="30" cols="3">
                <Card type="box" spacing="30" size="30" spacing="20">
                    <SubHeadingText>Primary Buttons</SubHeadingText>
                    <Button size="small" leftIcon="home">Call to Action</Button>
                    <Button leftIcon="home">Call to Action</Button>
                    <Button size="large" leftIcon="home">Call to Action</Button>
                </Card>
                <Card type="box" spacing="30" size="30" spacing="20">
                    <SubHeadingText>Secondary Buttons</SubHeadingText>
                    <Button type="secondary" size="small" leftIcon="heart">Call to Action</Button>
                    <Button type="secondary" leftIcon="heart">Call to Action</Button>
                    <Button type="secondary" size="large" leftIcon="heart">Call to Action</Button>
                </Card>
                <Card type="box" spacing="30" size="30" spacing="20">
                    <SubHeadingText>Disabled Buttons</SubHeadingText>
                    <Button size="small" leftIcon="home" disabled>Call to Action</Button>
                    <Button leftIcon="home" disabled>Call to Action</Button>
                    <Button size="large" leftIcon="home" disabled>Call to Action</Button>
                </Card>
            </Container>
            <Container spacing="30" cols="3">
                <Card type="box" spacing="30" size="30" spacing="20">
                    <SubHeadingText>Primary Buttons</SubHeadingText>
                    <Button size="small" leftIcon="home" rightIcon="chevron-right">Call to Action</Button>
                    <Button leftIcon="home" rightIcon="chevron-right">Call to Action</Button>
                    <Button size="large" leftIcon="home" rightIcon="chevron-right">Call to Action</Button>
                </Card>
                <Card type="box" spacing="30" size="30" spacing="20">
                    <SubHeadingText>Secondary Buttons</SubHeadingText>
                    <Button type="secondary" size="small" leftIcon="heart" rightIcon="chevron-right">Call to Action</Button>
                    <Button type="secondary" leftIcon="heart" rightIcon="chevron-right">Call to Action</Button>
                    <Button type="secondary" size="large" leftIcon="heart" rightIcon="chevron-right">Call to Action</Button>
                </Card>
                <Card type="box" spacing="30" size="30" spacing="20">
                    <SubHeadingText>Disabled Buttons</SubHeadingText>
                    <Button size="small" leftIcon="home" rightIcon="chevron-right" disabled>Call to Action</Button>
                    <Button leftIcon="home" rightIcon="chevron-right" disabled>Call to Action</Button>
                    <Button size="large" leftIcon="home" rightIcon="chevron-right" disabled>Call to Action</Button>
                </Card>
            </Container>
        </Container>
    </>)
}