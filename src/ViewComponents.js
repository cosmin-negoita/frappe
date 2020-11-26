import React, {useState, useEffect, useRef} from "react";

import TopNav from "./Components/TopNav/TopNav.js";
import Container from "./Components/Container/Container.js";
import Card from "./Components/Card/Card.js";
import Button from "./Components/Button/Button.js";
import {LabelText, SmallBodyText, BodyText, BigBodyText, SubHeadingText, HeadingText, SubTitleText, TitleText} from "./Components/Typography/Typography.js";
import {IconHeart, IconArrowRight} from "./Components/Icons/Icon.js";
import Image from "./Components/Image/Image.js";
import InputText from "./Components/Form/InputText.js";
import InputNumber from "./Components/Form/InputNumber.js";
import InputPassword from "./Components/Form/InputPassword.js";
import Select from "./Components/Form/Select.js";
import TextArea from "./Components/Form/TextArea.js";

export default function ViewComponents() {

    useEffect(() => {
        document.title = "Frappe - Components";
    });

    return (<>
        <TopNav />
        <Container size="large">
            <TitleText>Components</TitleText>
        </Container>
        <Container size="large" spacing="30" noTopPadding >
            <Card headerLabel="Typography" type="box" spacing="30" size="medium" layout="2">
                <Container spacing="30">
                    <TitleText>Title Text</TitleText>
                    <SubTitleText>Sub-title Text</SubTitleText>
                    <HeadingText>Heading Text</HeadingText>
                    <SubHeadingText>Sub-heading Text</SubHeadingText>
                    <BigBodyText>Big Body Text</BigBodyText>
                    <BodyText>Body Text</BodyText>
                    <SmallBodyText>Small Body Text</SmallBodyText>
                    <LabelText>Label Text</LabelText>
                </Container>
                <Container spacing="30">
                    <TitleText><strong>Title Text</strong></TitleText>
                    <SubTitleText><strong>Sub-title Text</strong></SubTitleText>
                    <HeadingText><strong>Heading Text</strong></HeadingText>
                    <SubHeadingText><strong>Sub-heading Text</strong></SubHeadingText>
                    <BigBodyText><strong>Big Body Text</strong></BigBodyText>
                    <BodyText><strong>Body Text</strong></BodyText>
                    <SmallBodyText><strong>Small Body Text</strong></SmallBodyText>
                    <LabelText><strong>Label Text</strong></LabelText>
                </Container>
            </Card>
            <Container spacing="30">
                <Card headerLabel="Buttons" type="box" spacing="30" size="medium" layout="3">
                    <Container spacing="20">
                        <SubHeadingText>Primary Buttons</SubHeadingText>
                        <Button size="small"><IconHeart color="--gray-0" />Call to Action</Button>
                        <Button><IconHeart color="gray-0" />Call to Action</Button>
                        <Button size="large"><IconHeart color="--gray-0" />Call to Action</Button>
                    </Container>
                    <Container spacing="20">
                        <SubHeadingText>Secondary Buttons</SubHeadingText>
                        <Button type="secondary" size="small"><IconHeart color="--gray-5" />Call to Action</Button>
                        <Button type="secondary"><IconHeart color="--gray-5" />Call to Action</Button>
                        <Button type="secondary" size="large"><IconHeart color="--gray-5" />Call to Action</Button>
                    </Container>
                    <Container spacing="20">
                        <SubHeadingText>Disabled Buttons</SubHeadingText>
                        <Button size="small" disabled><IconHeart color="--gray-4" />Call to Action</Button>
                        <Button disabled><IconHeart color="--gray-4" />Call to Action</Button>
                        <Button size="large" disabled><IconHeart color="--gray-4" />Call to Action</Button>
                    </Container>
                </Card>
                <Card type="box" headerLabel="Form Elements" spacing="30" size="medium">
                    <Container spacing="30" layout="3">
                        <Container spacing="20">
                            <SubHeadingText>Input Text Default</SubHeadingText>
                            <InputText label="Default Text Input" placeholder="Type here..." size="small" />
                            <InputText label="Default Text Input" placeholder="Type here..." />
                            <InputText label="Default Text Input" placeholder="Type here..." size="large" />
                        </Container>
                        <Container spacing="20">
                            <SubHeadingText>Input Text Disabled</SubHeadingText>
                            <InputText label="Disabled Text Input" placeholder="Type here..." size="small" disabled />
                            <InputText label="Disabled Text Input" placeholder="Type here..." disabled />
                            <InputText label="Disabled Text Input" placeholder="Type here..." size="large" disabled />
                        </Container>
                        <Container spacing="20">
                            <SubHeadingText>Input Text Error</SubHeadingText>
                            <InputText label="Error Text Input" isValid={false} placeholder="Type here..." size="small" errorMessage="Please type something" />
                            <InputText label="Error Text Input" isValid={false} placeholder="Type here..." errorMessage="Please type something" />
                            <InputText label="Error Text Input" isValid={false} placeholder="Type here..." size="large" errorMessage="Please type something" />
                        </Container>
                    </Container>
                    <Container spacing="30" layout="3">
                        <Container spacing="20">
                            <SubHeadingText>Select Default</SubHeadingText>
                            <Select label="Small Select" size="small">
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                                <option value="3">Option 3</option>
                            </Select>
                            <Select label="Medium Select">
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                                <option value="3">Option 3</option>
                            </Select>
                            <Select label="Large Select" size="large">
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                                <option value="3">Option 3</option>
                            </Select>
                        </Container>
                        <Container spacing="20">
                            <SubHeadingText>Select Disabled</SubHeadingText>
                            <Select label="Small Select" size="small" disabled>
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                                <option value="3">Option 3</option>
                            </Select>
                            <Select label="Medium Select" disabled>
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                                <option value="3">Option 3</option>
                            </Select>
                            <Select label="Large Select" size="large" disabled>
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                                <option value="3">Option 3</option>
                            </Select>
                        </Container>
                        <Container spacing="20">
                            <SubHeadingText>Select Error</SubHeadingText>
                            <Select label="Small Select" isValid={false} errorMessage="Please choose an option" size="small">
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                                <option value="3">Option 3</option>
                            </Select>
                            <Select label="Medium Select" isValid={false} errorMessage="Please choose an option">
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                                <option value="3">Option 3</option>
                            </Select>
                            <Select label="Large Select" isValid={false} errorMessage="Please choose an option" size="large">
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                                <option value="3">Option 3</option>
                            </Select>
                        </Container>
                    </Container>
                    <Container spacing="30" layout="3">
                        <Container spacing="20">
                            <SubHeadingText>Textarea Default</SubHeadingText>
                            <TextArea label="Default Textarea" rows="3" placeholder="Type your message here..." size="small"></TextArea>
                            <TextArea label="Default Textarea" rows="3" placeholder="Type your message here..."></TextArea>
                            <TextArea label="Default Textarea" rows="3" placeholder="Type your message here..." size="large"></TextArea>
                        </Container>
                        <Container spacing="20">
                            <SubHeadingText>Textarea Disabled</SubHeadingText>
                            <TextArea label="Disabled Textarea" rows="3" placeholder="Type your message here..." size="small" disabled></TextArea>
                            <TextArea label="Disabled Textarea" rows="3" placeholder="Type your message here..." disabled></TextArea>
                            <TextArea label="Disabled Textarea" rows="3" placeholder="Type your message here..." size="large" disabled></TextArea>
                        </Container>
                        <Container spacing="20">
                            <SubHeadingText>Textarea Error</SubHeadingText>
                            <TextArea label="Error Textarea" rows="3" placeholder="Type your message here..." isValid={false} errorMessage="Please type a message" size="small"></TextArea>
                            <TextArea label="Error Textarea" rows="3" placeholder="Type your message here..." isValid={false} errorMessage="Please type a message"></TextArea>
                            <TextArea label="Error Textarea" rows="3" placeholder="Type your message here..." isValid={false} errorMessage="Please type a message" size="large"></TextArea>
                        </Container>
                    </Container>
                </Card>
            </Container>
        </Container>
    </>);
}