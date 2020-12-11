import React, {useState, useEffect, useRef} from "react";

import TopNav from "./Components/TopNav/TopNav.js";
import Container from "./Components/Container/Container.js";

import StyledPage from "./Components/StyledPage.js";
import Card from "./Components/Card/Card.js";
import Button from "./Components/Button/Button.js";
import "./Components/Typography/Typography.css"
import {LabelText, SmallBodyText, BodyText, BigBodyText, SubHeadingText, HeadingText, SubTitleText, TitleText} from "./Components/Typography/Typography.js";
import Avatar from "./Components/Avatar/Avatar.js";
import Icon from "./Components/Icons/Icon.js";
import Divider from "./Components/Divider.js";
import Image from "./Components/Image/Image.js";
import SidebarMenuItem from "./Components/SidebarMenu/SidebarMenu.js";
import {VictoryBar, VictoryChart, VictoryAxis, VictoryStack, VictoryPie, VictoryArea, VictoryLine, VictoryScatter, VictoryContainer} from "victory";
import DataVizTheme from "./Components/DataVizTheme.js";
import ChartResizer from "./Components/Charts/ChartResizer.js";

export default function ViewDashboard() {

    useEffect(() => {
        document.title = "Frappe - Dashboard";
    });

    const data = [
        { x: 1, y: 154},
        { x: 2, y: 289},
        { x: 3, y: 214},
        { x: 4, y: 309},
        { x: 5, y: 125},
        { x: 6, y: 265},
        { x: 7, y: 342}
    ];
    const data2 = [
        { x: 1, y: 25 },
        { x: 2, y: 46 },
        { x: 3, y: 38 },
        { x: 4, y: 67 },
        { x: 5, y: 43 },
        { x: 6, y: 98 },
        { x: 7, y: 43 }
    ];

    return (<>
        <StyledPage>
            <TopNav />
            <Container className="scrollableParent" layout="400px 1fr">
                <Card className="scrollable" type="popout">
                    <Container size="50" spacing="10" justifyItems="center">
                        <Avatar src="https://www.crn.com/resources/025c-0f1e563cf778-3d75867d447f-1000/twitter_jack_dorsey_.jpg" size="80px" />
                        <SubHeadingText align="center"><strong>Jordan Maxime</strong></SubHeadingText>
                        <Button type="secondary" size="small">Logout</Button>
                    </Container>
                    <Divider />
                    <Container spacing="10" size="50" noHorizontalPadding={true}>
                        <SidebarMenuItem isActive={true} size="50" icon="home" iconSize="20"><BigBodyText>Dashboard</BigBodyText></SidebarMenuItem>
                        <SidebarMenuItem size="50" icon="articles" iconSize="20"><BigBodyText>Articles</BigBodyText></SidebarMenuItem>
                        <SidebarMenuItem size="50" icon="comment" iconSize="20"><BigBodyText>Comments</BigBodyText></SidebarMenuItem>
                        <SidebarMenuItem size="50" icon="users" iconSize="20"><BigBodyText>Readers</BigBodyText></SidebarMenuItem>
                        <SidebarMenuItem size="50" icon="settings" iconSize="20"><BigBodyText>Settings</BigBodyText></SidebarMenuItem>
                    </Container>
                </Card>
                <Container className="scrollable">
                    <Container size="50" spacing="30">
                        <Container>
                            <TitleText>Dashboard</TitleText>
                        </Container>
                        <Container spacing="30" cols="3">
                            <Card type="box" layout="47px 1fr" alignItems="center" size="30" spacing="10">
                                <Icon type="globe" color="--gray-5" isContained={true} containerSize="48px" size="24px" />
                                <Container spacing="5">
                                    <LabelText>Total Visits</LabelText>
                                    <SubHeadingText>25,489</SubHeadingText>
                                </Container>
                            </Card>
                            <Card type="box" layout="48px 1fr" alignItems="center" size="30" spacing="10">
                                <Icon type="eye" color="--gray-5" isContained={true} containerSize="48px" size="24px" />
                                <Container spacing="5">
                                    <LabelText>Total Reads</LabelText>
                                    <SubHeadingText>17,829</SubHeadingText>
                                </Container>
                            </Card>
                            <Card type="box" layout="48px 1fr" alignItems="center" size="30" spacing="10">
                                <Icon type="users" color="--gray-5" isContained={true} containerSize="48px" size="24px" />
                                <Container spacing="5">
                                    <LabelText>Total Readers</LabelText>
                                    <SubHeadingText>754</SubHeadingText>
                                </Container>
                            </Card>
                        </Container>
                        <Card type="box" size="30" spacing="30">
                            <Container layout="1fr max-content">
                                <SubHeadingText>Week Activity</SubHeadingText>
                                <Button type="secondary" size="small" rightIcon="chevron-right">View all</Button>
                            </Container>
                            <ChartResizer maxDomain={{y: 400}}>
                                <VictoryAxis
                                    tickValues={[1, 2, 3, 4, 5, 6, 7]}
                                    tickFormat={["Mon 7", "Tue 8", "Wed 9", "Thu 10", "Fri 11", "Sat 12", "Sun 13"]}
                                />
                                <VictoryAxis
                                    dependentAxis
                                />
                                <VictoryStack>
                                    <VictoryArea interpolation="basis" padding="0" data={data2} />
                                    <VictoryArea interpolation="basis" padding="0" data={data} />
                                </VictoryStack>
                            </ChartResizer>
                        </Card>
                        <Container spacing="30" cols="2">
                            <Card type="box" size="30" spacing="20">
                                <Container layout="1fr max-content">
                                    <SubHeadingText>Top Readers</SubHeadingText>
                                    <Button type="secondary" size="small" rightIcon="chevron-right">View all</Button>
                                </Container>
                                <Container spacing="10">
                                    <Container layout="32px 32px 1fr max-content" alignItems="center" spacing="10">
                                        <BodyText align="center">#1</BodyText>
                                        <Avatar src="https://www.crn.com/resources/025c-0f1e563cf778-3d75867d447f-1000/twitter_jack_dorsey_.jpg" />
                                        <BodyText><strong>Jordan Maxime</strong></BodyText>
                                        <BodyText>89 Reads</BodyText>
                                    </Container>
                                    <Divider />
                                    <Container layout="32px 32px 1fr max-content" alignItems="center" spacing="10">
                                        <BodyText align="center">#1</BodyText>
                                        <Avatar src="https://www.crn.com/resources/025c-0f1e563cf778-3d75867d447f-1000/twitter_jack_dorsey_.jpg" />
                                        <BodyText><strong>Jordan Maxime</strong></BodyText>
                                        <BodyText>82 Reads</BodyText>
                                    </Container>
                                    <Divider />
                                    <Container layout="32px 32px 1fr max-content" alignItems="center" spacing="10">
                                        <BodyText align="center">#1</BodyText>
                                        <Avatar src="https://www.crn.com/resources/025c-0f1e563cf778-3d75867d447f-1000/twitter_jack_dorsey_.jpg" />
                                        <BodyText><strong>Jordan Maxime</strong></BodyText>
                                        <BodyText>71 Reads</BodyText>
                                    </Container>
                                    <Divider />
                                    <Container layout="32px 32px 1fr max-content" alignItems="center" spacing="10">
                                        <BodyText align="center">#1</BodyText>
                                        <Avatar src="https://www.crn.com/resources/025c-0f1e563cf778-3d75867d447f-1000/twitter_jack_dorsey_.jpg" />
                                        <BodyText><strong>Jordan Maxime</strong></BodyText>
                                        <BodyText>54 Reads</BodyText>
                                    </Container>
                                    <Divider />
                                    <Container layout="32px 32px 1fr max-content" alignItems="center" spacing="10">
                                        <BodyText align="center">#1</BodyText>
                                        <Avatar src="https://www.crn.com/resources/025c-0f1e563cf778-3d75867d447f-1000/twitter_jack_dorsey_.jpg" />
                                        <BodyText><strong>Jordan Maxime</strong></BodyText>
                                        <BodyText>43 Reads</BodyText>
                                    </Container>
                                </Container>
                            </Card>
                            <Card type="box" size="30" spacing="20">
                                <Container layout="1fr max-content">
                                    <SubHeadingText>Latest Readers</SubHeadingText>
                                    <Button type="secondary" size="small" rightIcon="chevron-right">View all</Button>
                                </Container>
                                <Container spacing="10">
                                    <Container layout="32px 1fr" alignItems="center" spacing="10">
                                        <Avatar src="https://www.crn.com/resources/025c-0f1e563cf778-3d75867d447f-1000/twitter_jack_dorsey_small.jpg" />
                                        <BodyText><strong>Jordan Maxime</strong></BodyText>
                                    </Container>
                                    <Divider />
                                    <Container layout="32px 1fr" alignItems="center" spacing="10">
                                        <Avatar src="https://www.crn.com/resources/025c-0f1e563cf778-3d75867d447f-1000/twitter_jack_dorsey_small.jpg" />
                                        <BodyText><strong>Jordan Maxime</strong></BodyText>
                                    </Container>
                                    <Divider />
                                    <Container layout="32px 1fr" alignItems="center" spacing="10">
                                        <Avatar src="https://www.crn.com/resources/025c-0f1e563cf778-3d75867d447f-1000/twitter_jack_dorsey_small.jpg" />
                                        <BodyText><strong>Jordan Maxime</strong></BodyText>
                                    </Container>
                                    <Divider />
                                    <Container layout="32px 1fr" alignItems="center" spacing="10">
                                        <Avatar src="https://www.crn.com/resources/025c-0f1e563cf778-3d75867d447f-1000/twitter_jack_dorsey_small.jpg" />
                                        <BodyText><strong>Jordan Maxime</strong></BodyText>
                                    </Container>
                                    <Divider />
                                    <Container layout="32px 1fr" alignItems="center" spacing="10">
                                        <Avatar src="https://www.crn.com/resources/025c-0f1e563cf778-3d75867d447f-1000/twitter_jack_dorsey_small.jpg" />
                                        <BodyText><strong>Jordan Maxime</strong></BodyText>
                                    </Container>
                                </Container>
                            </Card>
                        </Container>
                        <Card type="box" size="30" spacing="20">
                            <Container layout="1fr max-content">
                                <SubHeadingText>Most Read This Week</SubHeadingText>
                                <Button type="secondary" size="small" rightIcon="chevron-right">View all</Button>
                            </Container>
                            <Container spacing="20">
                                <Container layout="100px 1fr" alignItems="center" spacing="20">
                                    <Image src="https://images.unsplash.com/photo-1601758064955-a4a16da74a86?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
                                    <Container spacing="10">
                                        <BigBodyText><strong>Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam eget nullam pellentesque aliquam</strong></BigBodyText>
                                        <BodyText>165 Reads</BodyText>
                                    </Container>
                                </Container>
                                <Divider />
                                <Container layout="100px 1fr" alignItems="center" spacing="20">
                                    <Image src="https://images.unsplash.com/photo-1601758064955-a4a16da74a86?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
                                    <Container spacing="10">
                                        <BigBodyText><strong>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet</strong></BigBodyText>
                                        <BodyText>98 Reads</BodyText>
                                    </Container>
                                </Container>
                                <Divider />
                                <Container layout="100px 1fr" alignItems="center" spacing="20">
                                    <Image src="https://images.unsplash.com/photo-1601758064955-a4a16da74a86?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
                                    <Container spacing="10">
                                        <BigBodyText><strong>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium</strong></BigBodyText>
                                        <BodyText>76 Reads</BodyText>
                                    </Container>
                                </Container>
                                <Divider />
                                <Container layout="100px 1fr" alignItems="center" spacing="20">
                                    <Image src="https://images.unsplash.com/photo-1601758064955-a4a16da74a86?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
                                    <Container spacing="10">
                                        <BigBodyText><strong>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime</strong></BigBodyText>
                                        <BodyText>54 Reads</BodyText>
                                    </Container>
                                </Container>
                                <Divider />
                                <Container layout="100px 1fr" alignItems="center" spacing="20">
                                    <Image src="https://images.unsplash.com/photo-1601758064955-a4a16da74a86?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
                                    <Container spacing="10">
                                        <BigBodyText><strong>Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam eget nullam pellentesque aliquam</strong></BigBodyText>
                                        <BodyText>43 Reads</BodyText>
                                    </Container>
                                </Container>
                            </Container>
                        </Card>
                    </Container>
                </Container>
            </Container>
        </StyledPage>
    </>);
}