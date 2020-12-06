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
        <Container size="50">
            <TitleText>Experiment</TitleText>
        </Container>
        <Container size="50" spacing="30" layout="3" noTopPadding >
            <Card type="box" headerLabel="Simple Form" size="30" spacing="30" layout="1">
                { subscribed === false &&
                <form onSubmit={onFormSubmit}>
                    <Container spacing="30">
                        <HeadingText>Subscribe to our newsletter!</HeadingText>
                        <InputText label="Your Name" placeholder="Type your name..." value={name} isValid={nameValidation} errorMessage="Please tell us your name" onChange={handleNameChange} />
                        <InputText label="Your Email Address" placeholder="Type your email address..." value={email} isValid={emailValidation} errorMessage="Please use a valid email address" onChange={handleEmailChange} />
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
            <Card type="box" headerLabel="Adding Things" size="30" spacing="30" limitHeight={true}>
                <form>
                    <Container spacing="20">
                        <InputNumber value={numberValue} onMinusClick={onMinusClick} onPlusClick={onPlusClick} />
                    </Container>
                </form>
                <Container id="avatars" spacing="20">
                    { items.length < 1 && <BodyText>Start adding an element...</BodyText> }
                    { items.length > 8 && <BodyText>Woah, take it easy!</BodyText> }
                    { items.length > 16 && <HeadingText>Bro, stahp!</HeadingText> }
                    <Container spacing="10" layout="4">
                        { items.map((item, index) => (
                            <Card key={index} type="border" size="small" style={{borderColor: index > 7 ? "var(--error)" : "var(--gray-3)" }}>
                                <HeadingText align="center">{item}</HeadingText>
                            </Card>
                        )) }
                    </Container>
                </Container>
            </Card>
            <Card type="box" spacing="10" size="30" limitHeight={true}>
                <SubHeadingText>Group Details</SubHeadingText>
                <TabNav spacing="20" maxContent={true} marginBottom="30">
                    <Container label="Overview">
                        <BodyText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse erat quam, porttitor in sollicitudin ac, condimentum eget justo.</BodyText>
                    </Container>
                    <Container label="Members">
                        <Container layout="2" spacing="20">
                            <MediaObject mediaSize="32px" spacing="10" align="center">
                                <Avatar src="https://lupsa.ro/wp-content/uploads/2019/11/portrait-square-03.jpg" size="32" />
                                <Container spacing="5">
                                    <BodyText><strong>Alex Sosa</strong></BodyText>
                                    <SmallBodyText>35 Posts</SmallBodyText>
                                </Container>
                            </MediaObject>
                            <MediaObject mediaSize="32px" spacing="10" align="center">
                                <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSskkzHf6voJSeDyPjH2MKa3CNaqYF6PHLdg&usqp=CAU" size="32" />
                                <Container spacing="5">
                                    <BodyText><strong>Maryam Fraser</strong></BodyText>
                                    <SmallBodyText>12 Posts</SmallBodyText>
                                </Container>
                            </MediaObject>
                            <MediaObject mediaSize="32px" spacing="10" align="center">
                                <Avatar src="https://www.crn.com/resources/025c-0f1e563cf778-3d75867d447f-1000/twitter_jack_dorsey_small.jpg" size="32" />
                                <Container spacing="5">
                                    <BodyText><strong>Jordan Maxime</strong></BodyText>
                                    <SmallBodyText>9 Posts</SmallBodyText>
                                </Container>
                            </MediaObject>
                            <MediaObject mediaSize="32px" spacing="10" align="center">
                                <Avatar src="https://lupsa.ro/wp-content/uploads/2019/11/portrait-square-03.jpg" size="32" />
                                <Container spacing="5">
                                    <BodyText><strong>Alex Sosa</strong></BodyText>
                                    <SmallBodyText>59 Posts</SmallBodyText>
                                </Container>
                            </MediaObject>
                            <MediaObject mediaSize="32px" spacing="10" align="center">
                                <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSskkzHf6voJSeDyPjH2MKa3CNaqYF6PHLdg&usqp=CAU" size="32" />
                                <Container spacing="5">
                                    <BodyText><strong>Maryam Fraser</strong></BodyText>
                                    <SmallBodyText>8 Posts</SmallBodyText>
                                </Container>
                            </MediaObject>
                            <MediaObject mediaSize="32px" spacing="10" align="center">
                                <Avatar src="https://www.crn.com/resources/025c-0f1e563cf778-3d75867d447f-1000/twitter_jack_dorsey_small.jpg" size="32" />
                                <Container spacing="5">
                                    <BodyText><strong>Jordan Maxime</strong></BodyText>
                                    <SmallBodyText>9 Posts</SmallBodyText>
                                </Container>
                            </MediaObject>
                        </Container>
                    </Container>
                    <Container label="Join" spacing="20">
                        <BodyText>Hey <strong>Cosmin</strong>, if you want to join this group, write a short application below and the group owner will notify you of their decision via an automated email.</BodyText>
                        <form>
                            <Container spacing="20">
                                <TextArea rows="3" placeholder="Why do you want to join this group?" />
                                <Button>Apply for joining</Button>
                            </Container>
                        </form>
                    </Container>
                </TabNav>
            </Card>
        </Container>
    </>);
}