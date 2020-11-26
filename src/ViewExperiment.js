import React, {useState, useEffect} from "react";

import TopNav from "./Components/TopNav/TopNav.js";
import Container from "./Components/Container/Container.js";
import Card from "./Components/Card/Card.js";
import Button from "./Components/Button/Button.js";
import {LabelText, SmallBodyText, BodyText, BigBodyText, SubHeadingText, HeadingText, SubTitleText, TitleText} from "./Components/Typography/Typography.js";
import InputText from "./Components/Form/InputText.js";

export default function ViewExperiment() {

    /* Subscribe Form Functionality */
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);
    const [nameValidation, setNameValidation] = useState(null);
    const [emailValidation, setEmailValidation] = useState(null);

    useEffect(() => {
        if (nameValidation && emailValidation) setSubscribed(true);
    }, [nameValidation, emailValidation]);

    function handleNameChange(e) {
        setName(e.target.value);
    }
    function handleEmailChange(e) {
        setEmail(e.target.value);
    }
    function onFormSubmit(e) {
        e.preventDefault();
        if (name !== "") setNameValidation(true);
        else setNameValidation(false);

        if (email.includes('@') && email.includes('.')) setEmailValidation(true);
        else setEmailValidation(false);
    }
    function handleSubscribeReset(e) {
        setSubscribed(false);
        setName("");
        setEmail("");
    }

    /* Create Profile Functionality */

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
                        <HeadingText>Subscribe to our newsletter!</HeadingText>
                        <InputText label="Your Name" value={name} isValid={nameValidation} errorMessage="Please tell us your name" onChange={handleNameChange} />
                        <InputText label="Your Email Address" value={email} isValid={emailValidation} errorMessage="Please use a valid email address" onChange={handleEmailChange} />
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
            <Card type="box" headerLabel="Create a profile" size="medium" spacing="30" layout="1">
                <form>
                    <Container spacing="20">
                        
                    </Container>
                </form>
            </Card>
        </Container>
    </>);
}