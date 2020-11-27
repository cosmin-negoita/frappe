import React, {useState, useEffect} from "react";

import TopNav from "./Components/TopNav/TopNav.js";
import Container from "./Components/Container/Container.js";
import Card from "./Components/Card/Card.js";
import Button from "./Components/Button/Button.js";
import {LabelText, SmallBodyText, BodyText, BigBodyText, SubHeadingText, HeadingText, SubTitleText, TitleText} from "./Components/Typography/Typography.js";
import InputText from "./Components/Form/InputText.js";
import InputNumber from "./Components/Form/InputNumber.js";
import Checkbox from "./Components/Form/Checkbox.js";

export default function ViewExperiment() {

    useEffect(() => {
        document.title = "Frappe - Experiments";
    });

    /* Subscribe Form Functionality */
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);
    const [nameValidation, setNameValidation] = useState(null);
    const [emailValidation, setEmailValidation] = useState(null);
    const [checked, setChecked] = useState(false);
    const [checkValidation, setCheckValidation] = useState(null);

    useEffect(() => {
        if (nameValidation && emailValidation && checkValidation) setSubscribed(true);
    }, [nameValidation, emailValidation, checkValidation]);

    function handleNameChange(e) {
        setName(e.target.value);
    }
    function handleEmailChange(e) {
        setEmail(e.target.value);
    }
    function onCheckChange() {
        setChecked(!checked);
    }
    function onFormSubmit(e) {
        e.preventDefault();
        if (name !== "") setNameValidation(true);
        else setNameValidation(false);

        if (checked === true) setCheckValidation(true);
        else setCheckValidation(false);

        if (email.includes('@') && email.includes('.')) setEmailValidation(true);
        else setEmailValidation(false);
    }
    function handleSubscribeReset(e) {
        setSubscribed(false);
        setName("");
        setEmail("");
        setChecked(false);
    }

    /* Number Input Test */
    const [numberValue, setNumberValue] = useState(0);
    const [items, setItems] = useState([]);

    function onMinusClick(e) {
        e.preventDefault();
        const newItems = items;
        newItems.pop();
        setNumberValue(numberValue - 1);
        setItems([...newItems]);
    }
    function onPlusClick(e) {
        e.preventDefault();
        setNumberValue(numberValue + 1);
        setItems([...items, items.length + 1]);
        setChecked(false);
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
                        <HeadingText>Subscribe to our newsletter!</HeadingText>
                        <InputText label="Your Name" value={name} isValid={nameValidation} errorMessage="Please tell us your name" onChange={handleNameChange} />
                        <InputText label="Your Email Address" value={email} isValid={emailValidation} errorMessage="Please use a valid email address" onChange={handleEmailChange} />
                        <Checkbox checked={checked} onClick={onCheckChange} value="nothing" isValid={checkValidation}>I have read and agree with the Privacy Policy and Terms of Service</Checkbox>
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
                        <InputNumber value={numberValue} onMinusClick={onMinusClick} onPlusClick={onPlusClick} />
                    </Container>
                </form>
                <Container id="avatars" spacing="20">
                    { items.length < 1 && <BodyText>Start adding an element...</BodyText> }
                    { items.length > 8 && <BodyText>Woah, take it easy!</BodyText> }
                    <Container spacing="10" layout="4">
                        { items.map((item, index) => (
                            <Card key={index} type="border" size="small">
                                <HeadingText align="center">{item}</HeadingText>
                            </Card>
                        )) }
                    </Container>
                </Container>
            </Card>
        </Container>
    </>);
}