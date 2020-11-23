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

export default function ViewExamples() {
    return (<>
        <TopNav />
        <Container size="large">
            <TitleText>Examples</TitleText>
        </Container>
        <Container size="large" spacing="30" layout="3" noTopPadding >
            <Container spacing="30">
                <Card type="box" size="medium" spacing="20" limitHeight={true}>
                    <HeadingText>Card title here</HeadingText>
                    <BodyText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at vulputate justo. Donec tristique est felis, eget hendrerit neque tempus mattis. Ut sapien enim, tincidunt id ex eget, elementum facilisis ex.</BodyText>
                    <Container spacing="20" layout="2">
                        <Button><IconHome color="gray-0" />Call to action</Button>
                        <Button type="secondary"><IconHome color="gray-5" />Call to action</Button>
                    </Container>
                </Card>
                <Card type="box" headerLabel="Card Title" size="medium" spacing="20" limitHeight={true}>
                    <BodyText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at vulputate justo. Donec tristique est felis, eget hendrerit neque tempus mattis. Ut sapien enim, tincidunt id ex eget, elementum facilisis ex.</BodyText>
                    <Button>Call to action</Button>
                </Card>
                <Card type="border" size="medium" spacing="20" limitHeight={true}>
                    <SubHeadingText align="center">Card Title</SubHeadingText>
                    <BodyText align="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at vulputate justo. Donec tristique est felis, eget hendrerit neque tempus mattis. Ut sapien enim, tincidunt id ex eget, elementum facilisis ex.</BodyText>
                    <Button>Call to action</Button>
                </Card>
            </Container>
            <Container spacing="30">
                <Card headerLabel="Card With Image" type="box" size="medium" spacing="20">
                    <Image src="https://images.unsplash.com/photo-1601758064955-a4a16da74a86?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
                    <BodyText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque vulputate justo.</BodyText>
                </Card>
                <Card type="box">
                    <Image src="https://images.unsplash.com/photo-1601758064955-a4a16da74a86?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
                    <Container size="medium" spacing="20">
                        <SubHeadingText>This could be an article title that would wrap across two lines</SubHeadingText>
                        <BodyText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque vulputate justo.</BodyText>
                        <Button type="link">Call to action<IconArrowRight color="brand" /></Button>
                    </Container>
                </Card>
            </Container>
            <Container spacing="30">
                <Card type="box" size="medium" spacing="20" limitHeight={true}>
                    <SubHeadingText align="center">Subscribe to Newsletter</SubHeadingText>
                    <BodyText align="center">Subscribe to our newsletter to get the latest updates about our work.</BodyText>
                    <form>
                        <Container spacing="10">
                            <Input type="text" placeholder="Your name..." />
                            <Input type="text" placeholder="Your email..." />
                            <Button>Subscribe</Button>
                        </Container>
                    </form>
                </Card>
                <Card type="box" size="medium" spacing="20" limitHeight={true}>
                    <SubHeadingText>Create and Account</SubHeadingText>
                    <BigBodyText>Let us know who you are!</BigBodyText>
                    <form>
                        <Container spacing="20">
                            <Input type="text" label="Email Address" placeholder="Your email..." />
                            <Container spacing="20" layout="2">
                                <Input type="text" label="Full Name" placeholder="Your name..." />
                                <Select type="text" label="Country" placeholder="Your email...">
                                    <option value="Romania">Romania</option>
                                    <option value="United States">United States</option>
                                    <option value="Canada">Canada</option>
                                </Select>
                            </Container>
                            <Input type="password" label="Your Password" placeholder="Your email..." />
                            <Input type="password" label="Confirm Password" placeholder="Your email..." />
                            <Button>Create Account</Button>
                        </Container>
                    </form>
                </Card>
            </Container>
        </Container>
    </>);
}