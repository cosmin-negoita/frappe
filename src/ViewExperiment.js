import React, {useState} from "react";

import TopNav from "./Components/TopNav/TopNav.js";
import Container from "./Components/Container/Container.js";
import Card from "./Components/Card/Card.js";
import Button from "./Components/Button/Button.js";
import {LabelText, SmallBodyText, BodyText, BigBodyText, SubHeadingText, HeadingText, SubTitleText, TitleText} from "./Components/Typography/Typography.js";
import {IconHome, IconArrowRight} from "./Components/Icons/Icon.js";
import Image from "./Components/Image/Image.js";
import Input from "./Components/Form/Input.js";
import Select from "./Components/Form/Select.js";
import TextArea from "./Components/Form/TextArea.js";

export default function ViewExperiment() {

    /* Subscribe Form Functionality */
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);
    const [nameValidation, setNameValidation] = useState();
    const [emailValidation, setEmailValidation] = useState();

    function handleNameChange(e) {
        setName(e.target.value);
    }
    function handleEmailChange(e) {
        setEmail(e.target.value);
    }
    function onFormSubmit(e) {
        e.preventDefault();
        handleNameValidation();
        handleEmailValidation();
    }
    function handleNameValidation() {
        if (name !== "") {
            setSubscribed(true);
            setNameValidation(true);
        }
        else {
            setSubscribed(false);
            setNameValidation(false);
        }
    }
    function handleEmailValidation() {
        if (email.includes("@") && email.includes(".")) {
            setSubscribed(true);
            setEmailValidation(true);
        }
        else {
            setSubscribed(false);
            setEmailValidation(false);
        }
    }
    function handleSubscribeReset(e) {
        setSubscribed(false);
        setName("");
        setEmail("");
    }

    return (<>
        <TopNav />
        <Container size="large">
            <TitleText>Experiment</TitleText>
        </Container>
        <Container size="large" spacing="30" layout="2" noTopPadding >
            <Card type="box" headerLabel="Simple Form" size="medium" spacing="30" layout="1">
                { subscribed === false &&
                <form onSubmit={onFormSubmit}>
                    <Container spacing="30">
                        <Input type="text" label="Your Name" value={name} isValid={nameValidation} errorMessage="Please tell us your name" onChange={handleNameChange} />
                        <Input type="text" label="Your Email Address" value={email} isValid={emailValidation} errorMessage="Please use a valid email address" onChange={handleEmailChange} />
                        <Button>Subscribe</Button>
                    </Container>
                </form>
                }
                { subscribed === true &&
                <Container spacing="30">
                    <SubHeadingText>Thanks, {name}!</SubHeadingText>
                    <BodyText>We will send you amazing shit right to your email address, <strong>{email}</strong>.</BodyText>
                    <Button onClick={handleSubscribeReset}>Go back</Button>
                </Container>
                }
            </Card>
        </Container>
    </>);
}