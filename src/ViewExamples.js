import React, {useEffect} from "react";

import TopNav from "./Components/TopNav/TopNav.js";
import Container from "./Components/Container/Container.js";
import MediaObject from "./Components/MediaObject/MediaObject.js";
import Card from "./Components/Card/Card.js";
import Button from "./Components/Button/Button.js";
import {LabelText, SmallBodyText, BodyText, BigBodyText, SubHeadingText, HeadingText, SubTitleText, TitleText} from "./Components/Typography/Typography.js";
import {IconHeart, IconChevronRight} from "./Components/Icons/Icon.js";
import Image from "./Components/Image/Image.js";
import Avatar from "./Components/Avatar/Avatar.js";
import InputText from "./Components/Form/InputText.js";
import InputNumber from "./Components/Form/InputNumber.js";
import InputPassword from "./Components/Form/InputPassword.js";
import Select from "./Components/Form/Select.js";
import TextArea from "./Components/Form/TextArea.js";

export default function ViewExamples() {

    useEffect(() => {
        document.title = "Frappe - Examples";
    });

    return (<>
        <TopNav />
        <Container size="50">
            <TitleText>Examples</TitleText>
        </Container>
        <Container size="50" spacing="30" layout="3" noTopPadding >
            <Container spacing="30">
                <Card type="box" size="30" spacing="20" limitHeight={true}>
                    <HeadingText>Card title here</HeadingText>
                    <BodyText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at vulputate justo. Donec tristique est felis, eget hendrerit neque tempus mattis. Ut sapien enim, tincidunt id ex eget, elementum facilisis ex.</BodyText>
                    <Container spacing="20" layout="2">
                        <Button><IconHeart color="--gray-0" />Call to action</Button>
                        <Button type="secondary"><IconHeart color="--gray-5" />Call to action</Button>
                    </Container>
                </Card>
                <Card type="box" headerLabel="Card Title" size="30" spacing="20" limitHeight={true}>
                    <BodyText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at vulputate justo. Donec tristique est felis, eget hendrerit neque tempus mattis. Ut sapien enim, tincidunt id ex eget, elementum facilisis ex.</BodyText>
                    <Button>Call to action</Button>
                </Card>
                <Card type="border" size="30" spacing="20" limitHeight={true}>
                    <SubHeadingText align="center">Card Title</SubHeadingText>
                    <BodyText align="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at vulputate justo. Donec tristique est felis, eget hendrerit neque tempus mattis. Ut sapien enim, tincidunt id ex eget, elementum facilisis ex.</BodyText>
                    <Button>Call to action</Button>
                </Card>
                <Card type="box" size="30" spacing="20">
                    <MediaObject mediaSize="128px" spacing="20" align="center">
                        <Image src="https://images.unsplash.com/photo-1601758064955-a4a16da74a86?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
                        <Container spacing="10">
                            <SubHeadingText>This is a title</SubHeadingText>
                            <BodyText>This is a short description of the title above.</BodyText>
                        </Container>
                    </MediaObject>
                </Card>
                <Card type="box" size="30" spacing="20">
                    <MediaObject inverse={true} mediaSize="128px" spacing="20" align="center">
                        <Image src="https://images.unsplash.com/photo-1601758064955-a4a16da74a86?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
                        <Container spacing="10">
                            <SubHeadingText>This is a title</SubHeadingText>
                            <BodyText>This is a short description of the title above.</BodyText>
                        </Container>
                    </MediaObject>
                </Card>
            </Container>
            <Container spacing="30">
                <Card headerLabel="Card With Image" type="box" size="30" spacing="20">
                    <Image src="https://images.unsplash.com/photo-1601758064955-a4a16da74a86?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
                    <BodyText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque vulputate justo.</BodyText>
                </Card>
                <Card headerLabel="Activity" type="box" size="30" spacing="20">
                    <MediaObject mediaSize="32px" spacing="10" align="center">
                        <Avatar src="https://lupsa.ro/wp-content/uploads/2019/11/portrait-square-03.jpg" size="32" />
                        <Container spacing="5">
                            <BodyText><strong>Alex Sosa</strong> liked your profile</BodyText>
                            <SmallBodyText>2 minutes ago</SmallBodyText>
                        </Container>
                    </MediaObject>
                    <MediaObject mediaSize="32px" spacing="10" align="center">
                        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSskkzHf6voJSeDyPjH2MKa3CNaqYF6PHLdg&usqp=CAU" size="32" />
                        <Container spacing="5">
                            <BodyText><strong>Maryam Fraser</strong> left a comment on your profile</BodyText>
                            <SmallBodyText>1 hour ago</SmallBodyText>
                        </Container>
                    </MediaObject>
                    <MediaObject mediaSize="32px" spacing="10" align="center">
                        <Avatar src="https://www.crn.com/resources/025c-0f1e563cf778-3d75867d447f-1000/twitter_jack_dorsey_small.jpg" size="32" />
                        <Container spacing="5">
                            <BodyText><strong>Jordan Maxime</strong> requested your friendship</BodyText>
                            <SmallBodyText>1 day ago</SmallBodyText>
                        </Container>
                    </MediaObject>
                </Card>
                <Card type="box">
                    <Image src="https://images.unsplash.com/photo-1601758064955-a4a16da74a86?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
                    <Container size="30" spacing="20">
                        <SubHeadingText>This could be an article title that would wrap across two lines</SubHeadingText>
                        <BodyText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque vulputate justo.</BodyText>
                        <Button type="secondary" size="small">Read more<IconChevronRight color="--gray-5" /></Button>
                    </Container>
                </Card>
            </Container>
            <Container spacing="30">
                <Card type="box" size="30" spacing="20" limitHeight={true}>
                    <SubHeadingText align="center">Subscribe to Newsletter</SubHeadingText>
                    <BodyText align="center">Subscribe to our newsletter to get the latest updates about our work.</BodyText>
                    <form>
                        <Container spacing="10">
                            <InputText placeholder="Your name..." />
                            <InputText placeholder="Your email..." />
                            <Button>Subscribe</Button>
                        </Container>
                    </form>
                </Card>
                <Card type="box" size="30" spacing="20" limitHeight={true}>
                    <SubHeadingText>Create an Account</SubHeadingText>
                    <BigBodyText>Let us know who you are!</BigBodyText>
                    <form>
                        <Container spacing="20">
                            <InputText label="Email Address" placeholder="Your email..." />
                            <Container spacing="20" layout="2">
                                <InputText label="Full Name" placeholder="Your name..." />
                                <Select type="text" label="Country" placeholder="Your email...">
                                    <option value="Romania">Romania</option>
                                    <option value="United States">United States</option>
                                    <option value="Canada">Canada</option>
                                </Select>
                            </Container>
                            <InputPassword label="Your Password" placeholder="Your email..." />
                            <InputPassword label="Confirm Password" placeholder="Your email..." />
                            <Button>Create Account</Button>
                        </Container>
                    </form>
                </Card>
            </Container>
        </Container>
    </>);
}