import React from "react";

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

export default function ViewComponents(){
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
                    <TitleText><span className="text--bold">Title Text</span></TitleText>
                    <SubTitleText><span className="text--bold">Sub-title Text</span></SubTitleText>
                    <HeadingText><span className="text--bold">Heading Text</span></HeadingText>
                    <SubHeadingText><span className="text--bold">Sub-heading Text</span></SubHeadingText>
                    <BigBodyText><span className="text--bold">Big Body Text</span></BigBodyText>
                    <BodyText><span className="text--bold">Body Text</span></BodyText>
                    <SmallBodyText><span className="text--bold">Small Body Text</span></SmallBodyText>
                    <LabelText><span className="text--bold">Label Text</span></LabelText>
                </Container>
            </Card>
            <Container spacing="30" layout="2">
                <Card headerLabel="Buttons" type="box" spacing="30" size="medium">
                    <SubHeadingText>Primary Buttons</SubHeadingText>
                    <Button size="small"><IconHome color="--gray-0" />Call to Action</Button>
                    <Button><IconHome color="gray-0" />Call to Action</Button>
                    <Button size="large"><IconHome color="--gray-0" />Call to Action</Button>
                    <SubHeadingText>Secondary Buttons</SubHeadingText>
                    <Button type="secondary" size="small"><IconHome color="--gray-5" />Call to Action</Button>
                    <Button type="secondary"><IconHome color="--gray-5" />Call to Action</Button>
                    <Button type="secondary" size="large"><IconHome color="--gray-5" />Call to Action</Button>
                    <SubHeadingText>Disabled Buttons</SubHeadingText>
                    <Button size="small" disabled><IconHome color="--gray-4" />Call to Action</Button>
                    <Button disabled><IconHome color="--gray-4" />Call to Action</Button>
                    <Button size="large" disabled><IconHome color="--gray-4" />Call to Action</Button>
                </Card>
                <Card type="box" headerLabel="Form Elements" spacing="30" size="medium">
                    <Container spacing="30" layout="2">
                        <Container spacing="30">
                            <SubHeadingText>Input Text</SubHeadingText>
                            <Input label="Default Text Input" type="text" placeholder="Type here..." />
                            <Input label="Disabled Text Input" type="text" placeholder="Type here..." disabled />
                            <Input label="Error Text Input" type="text" isValid={false} placeholder="Type here..." />
                        </Container>
                        <Container spacing="30">
                            <SubHeadingText>Select</SubHeadingText>
                            <Select label="Default Select">
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                                <option value="3">Option 3</option>
                            </Select>
                            <Select label="Disabled Select" disabled>
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                                <option value="3">Option 3</option>
                            </Select>
                            <Select label="Error Select" isValid={false}>
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                                <option value="3">Option 3</option>
                            </Select>
                        </Container>
                    </Container>
                    <SubHeadingText>Textarea</SubHeadingText>
                    <TextArea label="Default Textarea" rows="5" placeholder="Type your message here..."></TextArea>
                    <TextArea label="Disabled Textarea" rows="5" placeholder="Type your message here..." disabled></TextArea>
                    <TextArea label="Error Textarea" rows="5" placeholder="Type your message here..." isValid={false}></TextArea>
                </Card>
            </Container>
        </Container>
    </>);
}