import React, {useState, useEffect} from "react";
import styled from "styled-components";

import TopNav from "./Components/TopNav/TopNav.js";
import Container from "./Components/Container/Container.js";
import Card from "./Components/Card/Card.js";
import Button from "./Components/Button/Button.js";
import {LabelText, SmallBodyText, BodyText, BigBodyText, SubHeadingText, HeadingText, SubTitleText, TitleText} from "./Components/Typography/Typography.js";
import InputText from "./Components/Form/InputText.js";
import InputNumber from "./Components/Form/InputNumber.js";
import Toggle from "./Components/Form/Toggle.js";
import RadioButton from "./Components/Form/RadioButton.js";
import TextArea from "./Components/Form/TextArea.js";
import Checkbox from "./Components/Form/Checkbox.js";
import TabNav from "./Components/TabNav/TabNav.js";
import Avatar from "./Components/Avatar/Avatar.js";
import "./Components/Typography/Typography.css";
import Divider from "./Components/Divider.js";
import ProgressBar from "./Components/ProgressBar/ProgressBar.js";
import Image from "./Components/Image/Image.js";

const CustomizedElement = styled.div`
    display: grid;
    align-items: center;
    justify-items: center;
    text-align: center;
    padding: 20px;
    font-size: var(--scale1);
    line-height: 1.5;
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    border-radius: 50%;
    border: ${props => props.borderWidth}px solid var(--brand);
    ${props => props.addShadow && `
        box-shadow: 0 0 0 ${props.shadowWidth}px var(--brand-light);
    `}
`;

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

    /* Quiz Settings */
    const [device, setDevice] = useState("");
    const [deviceSize, setDeviceSize] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [quizname, setQuizname] = useState("");
    const [ownedDevices, setOwnedDevices] = useState([]);
    const [decision, setDecision] = useState("");

    function handleDeviceChange(e) {
        setDevice(e.target.value);
    }
    function handleDeviceSizeChange(e) {
        setDeviceSize(e.target.value);
    }
    function onQuizSubmit(e) {
        e.preventDefault();
        setSubmitted(true);
    }
    function handleQuizNameChange(e) {
        e.preventDefault();
        setQuizname(e.target.value);
    }
    function updateOwnedDevices(e) {
        setOwnedDevices([...ownedDevices, e.target.value]);
    }
    function handleDecisionChange(e) {
        setDecision(e.target.value);
    }
    function resetQuiz(e) {
        e.preventDefault();
        setSubmitted(false);
        setDevice("");
        setDeviceSize("");
        setQuizname("");
        setOwnedDevices([]);
        setDecision("");
    }

    // Customizer
    const [customizerLabel, setCustomizerLabel] = useState("Label");
    const [circleSize, setCircleSize] = useState(160);
    const [borderWidth, setBorderWidth] = useState(2);
    const [addShadow, setAddShadow] = useState(false);
    const [shadowWidth, setShadowWidth] = useState(8);

    function updateCustomizerLabel(e) {
        setCustomizerLabel(e.target.value);
    }
    function handleSizeMinusClick() {
        setCircleSize(circleSize - 10);
    }
    function handleSizePlusClick() {
        setCircleSize(circleSize + 10);
    }
    function handleBorderMinusClick() {
        setBorderWidth(borderWidth - 2);
    }
    function handleBorderPlusClick() {
        setBorderWidth(borderWidth + 2);
    }
    function handleAddShadow() {
        setAddShadow(!addShadow);
    }
    function handleShadowMinusClick() {
        setShadowWidth(shadowWidth - 2);
    }
    function handleShadowPlusClick() {
        setShadowWidth(shadowWidth + 2);
    }

    // Onboarding Experiment
    const slides = [
        {title: "Welcome, friend!", description: "This is an amazing slide. The following are even more amazing, tho.", image: "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGljYXRpb258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"},
        {title: "Your workspace", description: "Your workspace is the place where you can see everything.", image: "https://images.unsplash.com/photo-1590935217281-8f102120d683?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGljYXRpb258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"},
        {title: "Tracking your work", description: "Tracking your work is very easy to do within the Tracker section", image: "https://images.unsplash.com/photo-1590935216595-f9fc9b65179d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8YXBwbGljYXRpb258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"},
        {title: "Ready to go!", description: "That's all you need to know before diving into the product. Have fun!", image: "https://images.unsplash.com/photo-1524635962361-d7f8ae9c79b1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8YXBwbGljYXRpb258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"}
    ];
    const totalProgress = slides.length;
    const progressStep = 100 / totalProgress;
    const [progress, setProgress] = useState(1);
    const [progressBar, setProgressBar] = useState(progressStep);

    function handleProgressChange(operator) {
        if (operator === "prev") {
            setProgressBar(progressBar - progressStep);
            setProgress(progress - 1);
        }
        else {
            setProgressBar(progressBar + progressStep);
            setProgress(progress + 1);
        }
    }


    return (<>
        <TopNav />
        <Container size="50">
            <TitleText>Experiment</TitleText>
        </Container>
        <Container size="50" layout="1fr 2fr" spacing="30" noTopPadding>
            <Card type="box">
                <Container size="30" spacing="10">
                    <SubHeadingText align="center">Onboarding</SubHeadingText>
                </Container>
                <ProgressBar progress={progressBar} />
                <Container size="30" spacing="20">
                    <Container spacing="20">
                        <BigBodyText align="center">{slides[progress-1].title}</BigBodyText>
                        <Image src={slides[progress-1].image} />
                        <BodyText align="center">{slides[progress-1].description}</BodyText>
                    </Container>
                    <Container layout="repeat(auto-fit, minmax(0, 1fr))" spacing="10">
                        {progress > 1 && <Button type="secondary" leftIcon="chevron-left" onClick={() => handleProgressChange("prev")}>Back</Button>}
                        {progress < totalProgress && <Button rightIcon="chevron-right" onClick={() => handleProgressChange("next")}>Next</Button> }
                        {progress === totalProgress && <Button leftIcon="home">Go to dashboard</Button>}
                    </Container>
                </Container>
            </Card>
            <Card type="box" layout="300px 1px 1fr" alignItems="center" limitHeight>
                <Container size="30" spacing="20">
                    <SubHeadingText>Customizer</SubHeadingText>
                    <InputText label="Label" value={customizerLabel} onChange={updateCustomizerLabel} />
                    <InputNumber size="small" label="Circle Size" value={circleSize} onMinusClick={handleSizeMinusClick} onPlusClick={handleSizePlusClick} />
                    <InputNumber size="small" label="Border Weight" value={borderWidth} onMinusClick={handleBorderMinusClick} onPlusClick={handleBorderPlusClick} />
                    <Toggle defaultChecked={addShadow} onClick={handleAddShadow}>Add outer border</Toggle>
                    {addShadow &&
                        <InputNumber size="small" label="Outer Border Weight" value={shadowWidth} onMinusClick={handleShadowMinusClick} onPlusClick={handleShadowPlusClick} />
                    }
                </Container>
                <Divider height="100%" />
                <Container cols="1" alignItems="center" justifyItems="center">
                    <CustomizedElement size={circleSize} borderWidth={borderWidth} addShadow={addShadow} shadowWidth={shadowWidth}>{customizerLabel}</CustomizedElement>
                </Container>
            </Card>
        </Container>
        <Container size="50" spacing="30" cols="3" noTopPadding>
            <Card type="box" headerLabel="Simple Form" size="30" spacing="30" cols="1">
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
            <Card type="box" headerLabel="Simple Quiz" size="30" spacing="30" limitHeight={true}>
                {!submitted &&
                    <form onSubmit={onQuizSubmit}>
                        <Container spacing="20">
                            <Card type="border" size="10" spacing="10">
                                <BodyText><strong>What's your name?</strong></BodyText>
                                <InputText value={quizname} placeholder="Type your name here..." onChange={handleQuizNameChange} />
                            </Card>
                            <Card type="border" size="10" spacing="10">
                                <BodyText><strong>What's your favorite smartphone?</strong></BodyText>
                                <Container cols="max-content" spacing="20">
                                    <RadioButton name="device" value="iPhone" onChange={handleDeviceChange} checked={device === "iPhone"}>iPhone</RadioButton>
                                    <RadioButton name="device" value="Samsung Galaxy" onChange={handleDeviceChange} checked={device === "Samsung Galaxy"}>Smasung Galaxy</RadioButton>
                                </Container>
                            </Card>
                            {device === "iPhone" && 
                                <Card type="border" size="10" spacing="10">
                                    <BodyText><strong>Which iPhones did you own?</strong></BodyText>
                                    <Container cols="4" spacing="20">
                                        <Checkbox onClick={updateOwnedDevices} value="iPhone 4">iPhone 4</Checkbox>
                                        <Checkbox onClick={updateOwnedDevices} value="iPhone 5">iPhone 5</Checkbox>
                                        <Checkbox onClick={updateOwnedDevices} value="iPhone 6">iPhone 6</Checkbox>
                                        <Checkbox onClick={updateOwnedDevices} value="iPhone 7">iPhone 7</Checkbox>
                                        <Checkbox onClick={updateOwnedDevices} value="iPhone 8">iPhone 8</Checkbox>
                                        <Checkbox onClick={updateOwnedDevices} value="iPhone X">iPhone X</Checkbox>
                                        <Checkbox onClick={updateOwnedDevices} value="iPhone 11">iPhone 11</Checkbox>
                                        <Checkbox onClick={updateOwnedDevices} value="iPhone 12">iPhone 12</Checkbox>
                                    </Container>
                                </Card>
                            }
                            {device === "Samsung Galaxy" && 
                                <Card type="border" size="10" spacing="10">
                                    <BodyText><strong>What made you take this bad decision?</strong></BodyText>
                                    <Container cols="max-content" cols="max-content" spacing="20">
                                        <RadioButton name="decision" onChange={handleDecisionChange} value="I was drunk">I was drunk</RadioButton>
                                        <RadioButton name="decision" onChange={handleDecisionChange} value="I don't care about performance">I don't care about performance</RadioButton>
                                    </Container>
                                </Card>
                            }
                            <Card type="border" size="10" spacing="10">
                                <BodyText><strong>What phone size do you prefer?</strong></BodyText>
                                <Container cols="max-content" spacing="20">
                                    <RadioButton name="size" value="Mini" onChange={handleDeviceSizeChange}>Mini</RadioButton>
                                    <RadioButton name="size" value="Normal" onChange={handleDeviceSizeChange}>Normal</RadioButton>
                                    <RadioButton name="size" value="Large" onChange={handleDeviceSizeChange}>Large</RadioButton>
                                </Container>
                            </Card>
                            <Button>Submit answers</Button>
                        </Container>
                    </form>
                }
                {submitted &&
                    <Container spacing="20">
                        <Container spacing="10">
                            <SubHeadingText>Thanks for your time, {quizname}!</SubHeadingText>
                            <BigBodyText>Here are your answers:</BigBodyText>
                        </Container>
                        <Container cols="2" spacing="20">
                            <BodyText>Preferred device:<br/><strong>{device}</strong></BodyText>
                            <BodyText>Preferred size:<br/><strong>{deviceSize}</strong></BodyText>
                        </Container>
                        {device === "iPhone" && <BodyText>Previously owned:<br/><strong>
                            {ownedDevices.map((device, index) => {
                                if (index < ownedDevices.length - 1) return device + ", "
                                else return device;
                            })}
                        </strong></BodyText>}
                        {device === "Samsung Galaxy" &&
                            <BodyText>Reason for buying a Samsung:<br/><strong>{decision}</strong></BodyText>
                        }
                        <Button onClick={resetQuiz}>Reset quiz</Button>
                    </Container>
                }
            </Card>
            <Card type="box" spacing="10" size="30" limitHeight={true}>
                <SubHeadingText>Group Details</SubHeadingText>
                <TabNav spacing="20" maxContent={true} marginBottom="30">
                    <Container label="Overview">
                        <BodyText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse erat quam, porttitor in sollicitudin ac, condimentum eget justo.</BodyText>
                    </Container>
                    <Container label="Members">
                        <Container cols="2" spacing="20">
                            <Container layout="32px 1fr" alignItems="center" spacing="10">
                                <Avatar src="https://lupsa.ro/wp-content/uploads/2019/11/portrait-square-03.jpg" size="32" />
                                <Container>
                                    <BodyText><strong>Alex Sosa</strong></BodyText>
                                    <SmallBodyText>35 Posts</SmallBodyText>
                                </Container>
                            </Container>
                            <Container layout="32px 1fr" alignItems="center" spacing="10">
                                <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSskkzHf6voJSeDyPjH2MKa3CNaqYF6PHLdg&usqp=CAU" size="32" />
                                <Container>
                                    <BodyText><strong>Maryam Fraser</strong></BodyText>
                                    <SmallBodyText>12 Posts</SmallBodyText>
                                </Container>
                            </Container>
                            <Container layout="32px 1fr" alignItems="center" spacing="10">
                                <Avatar src="https://www.crn.com/resources/025c-0f1e563cf778-3d75867d447f-1000/twitter_jack_dorsey_small.jpg" size="32" />
                                <Container>
                                    <BodyText><strong>Jordan Maxime</strong></BodyText>
                                    <SmallBodyText>9 Posts</SmallBodyText>
                                </Container>
                            </Container>
                            <Container layout="32px 1fr" alignItems="center" spacing="10">
                                <Avatar src="https://lupsa.ro/wp-content/uploads/2019/11/portrait-square-03.jpg" size="32" />
                                <Container>
                                    <BodyText><strong>Alex Sosa</strong></BodyText>
                                    <SmallBodyText>59 Posts</SmallBodyText>
                                </Container>
                            </Container>
                            <Container layout="32px 1fr" alignItems="center" spacing="10">
                                <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSskkzHf6voJSeDyPjH2MKa3CNaqYF6PHLdg&usqp=CAU" size="32" />
                                <Container>
                                    <BodyText><strong>Maryam Fraser</strong></BodyText>
                                    <SmallBodyText>8 Posts</SmallBodyText>
                                </Container>
                            </Container>
                            <Container layout="32px 1fr" alignItems="center" spacing="10">
                                <Avatar src="https://www.crn.com/resources/025c-0f1e563cf778-3d75867d447f-1000/twitter_jack_dorsey_small.jpg" size="32" />
                                <Container>
                                    <BodyText><strong>Jordan Maxime</strong></BodyText>
                                    <SmallBodyText>9 Posts</SmallBodyText>
                                </Container>
                            </Container>
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