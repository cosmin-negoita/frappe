import React, {useEffect} from "react";

import Container from "./Components/Container/Container.js";
import Card from "./Components/Card/Card.js";
import {BodyText, SubHeadingText, TitleText} from "./Components/Typography/Typography.js";

export default function ViewContainers(props) {
    useEffect(() => {
        document.title = "Frappe - Containers";
    });
    return (<>
        <Container size="50" spacing="50">
            <Container spacing="30">
                <TitleText>Containers</TitleText>
                <BodyText>The Container component has been designed to allow maximum flexibility in terms of layout (using CSS Grid), spacing and padding. There are unlimited possibilities so below you can see just a few examples. The Container component can also be nested to create more complex layouts.</BodyText>
                <Container cols="2" spacing="10">
                    <div style={{backgroundColor: "var(--blue)", height: "50px", borderRadius: "5px"}}></div>
                    <div style={{backgroundColor: "var(--blue)", height: "50px", borderRadius: "5px"}}></div>
                </Container>
                <Container cols="3" spacing="10">
                    <div style={{backgroundColor: "var(--teal)", height: "50px", borderRadius: "5px"}}></div>
                    <div style={{backgroundColor: "var(--teal)", height: "50px", borderRadius: "5px"}}></div>
                    <div style={{backgroundColor: "var(--teal)", height: "50px", borderRadius: "5px"}}></div>
                </Container>
                <Container cols="12" spacing="10">
                    <div style={{backgroundColor: "var(--green)", height: "50px", borderRadius: "5px"}}></div>
                    <div style={{backgroundColor: "var(--green)", height: "50px", borderRadius: "5px"}}></div>
                    <div style={{backgroundColor: "var(--green)", height: "50px", borderRadius: "5px"}}></div>
                    <div style={{backgroundColor: "var(--green)", height: "50px", borderRadius: "5px"}}></div>
                    <div style={{backgroundColor: "var(--green)", height: "50px", borderRadius: "5px"}}></div>
                    <div style={{backgroundColor: "var(--green)", height: "50px", borderRadius: "5px"}}></div>
                    <div style={{backgroundColor: "var(--green)", height: "50px", borderRadius: "5px"}}></div>
                    <div style={{backgroundColor: "var(--green)", height: "50px", borderRadius: "5px"}}></div>
                    <div style={{backgroundColor: "var(--green)", height: "50px", borderRadius: "5px"}}></div>
                    <div style={{backgroundColor: "var(--green)", height: "50px", borderRadius: "5px"}}></div>
                    <div style={{backgroundColor: "var(--green)", height: "50px", borderRadius: "5px"}}></div>
                    <div style={{backgroundColor: "var(--green)", height: "50px", borderRadius: "5px"}}></div>
                </Container>
                <Container layout="1fr 2fr" spacing="10">
                    <div style={{backgroundColor: "var(--orange)", height: "50px", borderRadius: "5px"}}></div>
                    <div style={{backgroundColor: "var(--orange)", height: "50px", borderRadius: "5px"}}></div>
                </Container>
                <Container layout="1fr 2fr 1fr" spacing="10">
                    <div style={{backgroundColor: "var(--pink)", height: "50px", borderRadius: "5px"}}></div>
                    <div style={{backgroundColor: "var(--pink)", height: "50px", borderRadius: "5px"}}></div>
                    <div style={{backgroundColor: "var(--pink)", height: "50px", borderRadius: "5px"}}></div>
                </Container>
            </Container>
            <Container spacing="30">
                <TitleText>Cards</TitleText>
                <BodyText>The Card component is an extension of the Container component, meaning that in terms of layout, sizing and spacing, it has the same flexibility. The only additions are the visual props.</BodyText>
                <SubHeadingText>Card Box</SubHeadingText>
                <Container cols="3" spacing="30">
                    <Card type="box" size="10" limitHeight>
                        <BodyText>Small card box content</BodyText>
                    </Card>
                    <Card type="box" size="30" limitHeight>
                        <BodyText>Medium card box content</BodyText>
                    </Card>
                    <Card type="box" size="50" limitHeight>
                        <BodyText>Large card box content</BodyText>
                    </Card>
                </Container>
            </Container>
            <Container spacing="30">
                <SubHeadingText>Card Box with Header Label</SubHeadingText>
                <Container cols="3" spacing="30">
                    <Card type="box" headerLabel="Card Label" size="10" limitHeight>
                        <BodyText>Small card box content</BodyText>
                    </Card>
                    <Card type="box" headerLabel="Card Label" size="30" limitHeight>
                        <BodyText>Medium card box content</BodyText>
                    </Card>
                    <Card type="box" headerLabel="Card Label" size="50" limitHeight>
                        <BodyText>Large card box content</BodyText>
                    </Card>
                </Container>
            </Container>
            <Container spacing="30">
                <SubHeadingText>Card Border</SubHeadingText>
                <Container cols="3" spacing="30">
                    <Card type="border" size="10" limitHeight>
                        <BodyText>Small card border content</BodyText>
                    </Card>
                    <Card type="border" size="30" limitHeight>
                        <BodyText>Medium card border content</BodyText>
                    </Card>
                    <Card type="border" size="50" limitHeight>
                        <BodyText>Large card box content</BodyText>
                    </Card>
                </Container>
            </Container>
        </Container>
    </>)
}