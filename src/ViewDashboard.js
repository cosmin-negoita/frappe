import React, {useState, useEffect} from "react";

import TopNav from "./Components/TopNav/TopNav.js";
import Container from "./Components/Container/Container.js";
import MediaObject from "./Components/MediaObject/MediaObject.js";
import Card from "./Components/Card/Card.js";
import Button from "./Components/Button/Button.js";
import {LabelText, SmallBodyText, BodyText, BigBodyText, SubHeadingText, HeadingText, SubTitleText, TitleText} from "./Components/Typography/Typography.js";
import InputText from "./Components/Form/InputText.js";
import InputNumber from "./Components/Form/InputNumber.js";
import TextArea from "./Components/Form/TextArea.js";
import Checkbox from "./Components/Form/Checkbox.js";
import TabNav from "./Components/TabNav/TabNav.js";
import Avatar from "./Components/Avatar/Avatar.js";
import Image from "./Components/Image/Image.js";

export default function ViewDashboard() {

    useEffect(() => {
        document.title = "Frappe - Dashboard";
    });

    return (<>
        <TopNav />
        <Container size="50" spacing="10" layout="max-content">
            <Button>This is a button</Button>
            <Button>This is a button</Button>
            <Button>This is a button</Button>
            <Button>This is a button</Button>
        </Container>
    </>);
}