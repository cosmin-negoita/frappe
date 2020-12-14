import React, {useEffect} from "react";

import Container from "./Components/Container/Container.js";
import Card from "./Components/Card/Card.js";
import {SubHeadingText, TitleText} from "./Components/Typography/Typography.js";
import Icon from "./Components/Icons/Icon.js";

export default function ViewIconography(props) {
    useEffect(() => {
        document.title = "Frappe - Iconography";
    });
    return (<>
        <Container size="50">
            <TitleText>Iconography</TitleText>
        </Container>
        <Container size="50" noVerticalPadding>
            <Container spacing="30" cols="2">
                <Card type="box" size="30" spacing="30">
                    <SubHeadingText>Icons</SubHeadingText>
                    <Container spacing="30" cols="8">
                        <Icon type="heart" color="--gray-5"/>
                        <Icon type="plus" color="--gray-5"/>
                        <Icon type="minus" color="--gray-5"/>
                        <Icon type="arrow-left" color="--gray-5"/>
                        <Icon type="arrow-right" color="--gray-5"/>
                        <Icon type="chevron-up" color="--gray-5"/>
                        <Icon type="chevron-down" color="--gray-5"/>
                        <Icon type="chevron-left" color="--gray-5"/>
                        <Icon type="chevron-right" color="--gray-5"/>
                        <Icon type="checkmark" color="--gray-5"/>
                        <Icon type="home" color="--gray-5"/>
                        <Icon type="globe" color="--gray-5"/>
                        <Icon type="users" color="--gray-5"/>
                        <Icon type="comment" color="--gray-5"/>
                        <Icon type="eye" color="--gray-5"/>
                        <Icon type="reset" color="--gray-5"/>
                        <Icon type="colors" color="--gray-5"/>
                        <Icon type="typography" color="--gray-5"/>
                        <Icon type="grid" color="--gray-5"/>
                        <Icon type="list" color="--gray-5"/>
                        <Icon type="button" color="--gray-5"/>
                        <Icon type="tabs" color="--gray-5"/>
                        <Icon type="pie-chart" color="--gray-5"/>
                        <Icon type="articles" color="--gray-5"/>
                    </Container>
                </Card>
                <Card type="box" size="30" spacing="30">
                    <SubHeadingText>Container Options</SubHeadingText>
                    <Container spacing="30" cols="max-content">
                        <Icon isContained={true} containerSize="48px" type="heart" color="--gray-5"/>
                        <Icon isContained={true} background="gray-1" borderColor="gray-3" containerSize="48px" type="globe" color="--gray-5"/>
                        <Icon isContained={true} borderColor="brand" containerSize="48px" type="home" color="--gray-5"/>
                        <Icon isContained={true} background="brand" borderColor="transparent" containerSize="48px" type="users" color="--gray-0"/>
                    </Container>
                </Card>
            </Container>
        </Container>
    </>)
}