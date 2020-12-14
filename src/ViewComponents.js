import React, {useState, useEffect, useRef} from "react";

import TopNav from "./Components/TopNav/TopNav.js";
import Container from "./Components/Container/Container.js";
import Card from "./Components/Card/Card.js";
import Button from "./Components/Button/Button.js";
import {LabelText, SmallBodyText, BodyText, BigBodyText, SubHeadingText, HeadingText, SubTitleText, TitleText, LinkText} from "./Components/Typography/Typography.js";
import Icon from "./Components/Icons/Icon.js";
import Image from "./Components/Image/Image.js";
import InputText from "./Components/Form/InputText.js";
import InputNumber from "./Components/Form/InputNumber.js";
import InputPassword from "./Components/Form/InputPassword.js";
import Checkbox from "./Components/Form/Checkbox.js";
import Toggle from "./Components/Form/Toggle.js";
import RadioButton from "./Components/Form/RadioButton.js";
import Select from "./Components/Form/Select.js";
import TextArea from "./Components/Form/TextArea.js";
import TabNav from "./Components/TabNav/TabNav.js";
import {VictoryBar, VictoryChart, VictoryAxis, VictoryStack, VictoryPie, VictoryArea, VictoryLine, VictoryScatter} from "victory";
import DataVizTheme from "./Components/DataVizTheme.js";
import Divider from "./Components/Divider.js";
import ChartResizer from "./Components/Charts/ChartResizer.js";
import { getColor, colors } from "./Components/Colors.js";

export default function ViewComponents() {

    const [numberValue, setNumberValue] = useState(0);
    function onMinusClick(e) {
        e.preventDefault();
        setNumberValue(numberValue - 1);
    }
    function onPlusClick(e) {
        e.preventDefault();
        setNumberValue(numberValue + 1);
    }
    function onNumberChange(e) {
        setNumberValue(e.target.value);
    }

    useEffect(() => {
        document.title = "Frappe - Components";
    });

    const data = [
        {quarter: 1, earnings: 200},
        {quarter: 2, earnings: 400},
        {quarter: 3, earnings: 200},
        {quarter: 4, earnings: 600}
      ];
    const data2 = [
        {quarter: 1, earnings: 100},
        {quarter: 2, earnings: 200},
        {quarter: 3, earnings: 100},
        {quarter: 4, earnings: 300}
    ];
    const data3 = [
        {x: "label", y: 5000},
        {x: "another", y: 3000},
        {x: "final", y: 1500},
        {x: "second final", y: 1200},
        {x: "final", y: 2400},
        {x: "second final", y: 1800}
    ];
    const data4 = [
        { x: 1, y: 3, y0: 0 },
        { x: 2, y: 1, y0: 0 },
        { x: 3, y: 5, y0: 0 },
        { x: 4, y: 4, y0: 0 },
        { x: 5, y: 6, y0: 0 }
    ];
    const data5 = [
        { x: 1, y: 2, y0: 0 },
        { x: 2, y: 4, y0: 0 },
        { x: 3, y: 2, y0: 0 },
        { x: 4, y: 5, y0: 0 },
        { x: 5, y: 4, y0: 0 }
    ];
    const data6 = [
        { x: 1, y: 2, amount: 1 },
        { x: 2, y: 3, amount: 3 },
        { x: 3, y: 5, amount: 6 },
        { x: 4, y: 3, amount: 4 },
        { x: 5, y: 4, amount: 2 }
    ];
    const data7 = [
        { x: 1, y: 3, amount: 3 },
        { x: 2, y: 2, amount: 1 },
        { x: 3, y: 3, amount: 4 },
        { x: 4, y: 4, amount: 2 },
        { x: 5, y: 5, amount: 6 }
    ];
    const data8 = [
        { x: 1, y: 4, amount: 2 },
        { x: 2, y: 3, amount: 4 },
        { x: 3, y: 4, amount: 1 },
        { x: 4, y: 5, amount: 6 },
        { x: 5, y: 6, amount: 2 }
    ];

    return (<>
        <Container size="50">
            <TitleText>Components</TitleText>
        </Container>
        <Container size="50" spacing="50" noTopPadding>
            <Card headerLabel="Color Variables" type="box" size="30" spacing="30" cols="4">
                <Container spacing="10">
                    <SubHeadingText>Gray</SubHeadingText>
                    <div style={{background: getColor("--gray-0"), padding: "20px", borderRadius: "5px"}}>
                        <BodyText>--gray-0</BodyText>
                        <LabelText>{getColor("--gray-0")}</LabelText>
                    </div>
                    <div style={{background: getColor("--gray-1"), padding: "20px", borderRadius: "5px"}}>
                        <BodyText>--gray-1</BodyText>
                        <LabelText>{getColor("--gray-1")}</LabelText>
                    </div>
                    <div style={{background: getColor("--gray-2"), padding: "20px", borderRadius: "5px"}}>
                        <BodyText>--gray-2</BodyText>
                        <LabelText>{getColor("--gray-2")}</LabelText>
                    </div>
                    <div style={{background: getColor("--gray-3"), padding: "20px", borderRadius: "5px"}}>
                        <BodyText>--gray-3</BodyText>
                        <LabelText>{getColor("--gray-3")}</LabelText>
                    </div>
                    <div style={{background: getColor("--gray-4"), padding: "20px", borderRadius: "5px", color: "#fff"}}>
                        <BodyText>--gray-4</BodyText>
                        <LabelText>{getColor("--gray-4")}</LabelText>
                    </div>
                    <div style={{background: getColor("--gray-5"), padding: "20px", borderRadius: "5px", color: "#fff"}}>
                        <BodyText>--gray-5</BodyText>
                        <LabelText>{getColor("--gray-5")}</LabelText>
                    </div>
                </Container>
                <Container spacing="10">
                    <SubHeadingText>Brand</SubHeadingText>
                    <div style={{background: getColor("--brand-light"), padding: "20px", borderRadius: "5px"}}>
                        <BodyText>--brand-light</BodyText>
                        <LabelText>{getColor("--brand-light")}</LabelText>
                    </div>
                    <div style={{background: getColor("--brand"), padding: "20px", borderRadius: "5px", color: "#fff"}}>
                        <BodyText>--brand</BodyText>
                        <LabelText>{getColor("--brand")}</LabelText>
                    </div>
                    <div style={{background: getColor("--brand-dark"), padding: "20px", borderRadius: "5px", color: "#fff"}}>
                        <BodyText>--brand-dark</BodyText>
                        <LabelText>{getColor("--brand-dark")}</LabelText>
                    </div>
                </Container>
                <Container spacing="10">
                    <SubHeadingText>Error</SubHeadingText>
                    <div style={{background: getColor("--error-bg"), padding: "20px", borderRadius: "5px"}}>
                        <BodyText>--error-bg</BodyText>
                        <LabelText>{getColor("--error-bg")}</LabelText>
                    </div>
                    <div style={{background: getColor("--error"), padding: "20px", borderRadius: "5px", color: "#fff"}}>
                        <BodyText>--error</BodyText>
                        <LabelText>{getColor("--error")}</LabelText>
                    </div>
                </Container>
                <Container spacing="10">
                    <SubHeadingText>Graph Colors</SubHeadingText>
                    <div style={{background: getColor("--blue"), padding: "20px", borderRadius: "5px", color: "#fff"}}>
                        <BodyText>--blue</BodyText>
                        <LabelText>{getColor("--blue")}</LabelText>
                    </div>
                    <div style={{background: getColor("--cyan"), padding: "20px", borderRadius: "5px"}}>
                        <BodyText>--cyan</BodyText>
                        <LabelText>{getColor("--cyan")}</LabelText>
                    </div>
                    <div style={{background: getColor("--teal"), padding: "20px", borderRadius: "5px"}}>
                        <BodyText>--teal</BodyText>
                        <LabelText>{getColor("--teal")}</LabelText>
                    </div>
                    <div style={{background: getColor("--green"), padding: "20px", borderRadius: "5px"}}>
                        <BodyText>--green</BodyText>
                        <LabelText>{getColor("--green")}</LabelText>
                    </div>
                    <div style={{background: getColor("--yellow"), padding: "20px", borderRadius: "5px"}}>
                        <BodyText>--yellow</BodyText>
                        <LabelText>{getColor("--yellow")}</LabelText>
                    </div>
                    <div style={{background: getColor("--orange"), padding: "20px", borderRadius: "5px", color: "#fff"}}>
                        <BodyText>--orange</BodyText>
                        <LabelText>{getColor("--orange")}</LabelText>
                    </div>
                    <div style={{background: getColor("--pink"), padding: "20px", borderRadius: "5px", color: "#fff"}}>
                        <BodyText>--pink</BodyText>
                        <LabelText>{getColor("--pink")}</LabelText>
                    </div>
                </Container>
            </Card>
            <Container cols="5" spacing="50">
                <Container spacing="30">
                    <SubHeadingText>Card Box</SubHeadingText>
                    <Card size="10" type="box">
                        <BodyText>Content goes right here</BodyText>
                    </Card>
                    <Card size="30" type="box">
                        <BodyText>Content goes right here</BodyText>
                    </Card>
                    <Card size="50" type="box">
                        <BodyText>Content goes right here</BodyText>
                    </Card>
                </Container>
                <Container spacing="30">
                    <SubHeadingText>Card Box with Header</SubHeadingText>
                    <Card headerLabel="Card Heading" size="10" type="box">
                        <BodyText>Content goes right here</BodyText>
                    </Card>
                    <Card headerLabel="Card Heading" size="30" type="box">
                        <BodyText>Content goes right here</BodyText>
                    </Card>
                    <Card headerLabel="Card Heading" size="50" type="box">
                        <BodyText>Content goes right here</BodyText>
                    </Card>
                </Container>
                <Container spacing="30">
                    <SubHeadingText>Card Border</SubHeadingText>
                    <Card size="10" type="border">
                        <BodyText>Content goes right here</BodyText>
                    </Card>
                    <Card size="30" type="border">
                        <BodyText>Content goes right here</BodyText>
                    </Card>
                    <Card size="50" type="border">
                        <BodyText>Content goes right here</BodyText>
                    </Card>
                </Container>
                <Container spacing="30">
                    <SubHeadingText>Card Border</SubHeadingText>
                    <Card size="10" type="border" headerLabel="Header Label">
                        <BodyText>Content goes right here</BodyText>
                    </Card>
                    <Card size="30" type="border" headerLabel="Header Label">
                        <BodyText>Content goes right here</BodyText>
                    </Card>
                    <Card size="50" type="border" headerLabel="Header Label">
                        <BodyText>Content goes right here</BodyText>
                    </Card>
                </Container>
                <Container spacing="30">
                    <SubHeadingText>Card Popout</SubHeadingText>
                    <Card type="popout" size="50" spacing="30">
                        <BodyText>This is a pop out used for modals, sidebars, etc.</BodyText>
                    </Card>
                </Container>
            </Container>
        </Container>
        <Container size="50" spacing="30" noTopPadding >
            <Card headerLabel="Icons" type="box" size="30" spacing="30">
                <SubHeadingText>Icon Types</SubHeadingText>
                <Container spacing="30" cols="max-content">
                    <Icon type="heart" color="--gray-5"/>
                    <Icon type="plus" color="--gray-5"/>
                    <Icon type="minus" color="--gray-5"/>
                    <Icon type="arrow-left" color="--gray-5"/>
                    <Icon type="arrow-right" color="--gray-5"/>
                    <Icon type="chevron-up" color="--gray-5"/>
                    <Icon type="chevron-down" color="--gray-5"/>
                    <Icon type="chevron-left" color="--gray-5"/>
                    <Icon type="chevron-right" color="--gray-5"/>
                    <Icon type="checkmark" color="--gray-5"/>
                    <Icon type="home" color="--gray-5"/>
                    <Icon type="globe" color="--gray-5"/>
                    <Icon type="users" color="--gray-5"/>
                    <Icon type="comment" color="--gray-5"/>
                    <Icon type="eye" color="--gray-5"/>
                    <Icon type="reset" color="--gray-5"/>
                </Container>
                <SubHeadingText>Container Options</SubHeadingText>
                <Container spacing="30" cols="max-content">
                    <Icon isContained={true} containerSize="48px" type="heart" color="--gray-5"/>
                    <Icon isContained={true} background="gray-1" borderColor="gray-3" containerSize="48px" type="globe" color="--gray-5"/>
                    <Icon isContained={true} borderColor="brand" containerSize="48px" type="home" color="--gray-5"/>
                    <Icon isContained={true} background="brand" borderColor="transparent" containerSize="48px" type="users" color="--gray-0"/>
                </Container>
            </Card>
            <Card headerLabel="Typography" type="box" spacing="30" size="30" cols="2">
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
                <Card headerLabel="Buttons" type="box" spacing="30" size="30" cols="3">
                    <Container spacing="20">
                        <SubHeadingText>Primary Buttons</SubHeadingText>
                        <Button size="small" leftIcon="home">Call to Action</Button>
                        <Button leftIcon="home">Call to Action</Button>
                        <Button size="large" leftIcon="home">Call to Action</Button>
                    </Container>
                    <Container spacing="20">
                        <SubHeadingText>Secondary Buttons</SubHeadingText>
                        <Button type="secondary" size="small" leftIcon="heart">Call to Action</Button>
                        <Button type="secondary" leftIcon="heart">Call to Action</Button>
                        <Button type="secondary" size="large" leftIcon="heart">Call to Action</Button>
                    </Container>
                    <Container spacing="20">
                        <SubHeadingText>Disabled Buttons</SubHeadingText>
                        <Button size="small" leftIcon="home" disabled>Call to Action</Button>
                        <Button leftIcon="home" disabled>Call to Action</Button>
                        <Button size="large" leftIcon="home" disabled>Call to Action</Button>
                    </Container>
                </Card>
                <Card type="box" headerLabel="Form Elements" spacing="30" size="30">
                    <Container spacing="30" cols="3">
                        <Container spacing="20">
                            <SubHeadingText>Input Text Default</SubHeadingText>
                            <InputText label="Default Text Input" placeholder="Type here..." size="small" />
                            <InputText label="Default Text Input" placeholder="Type here..." />
                            <InputText label="Default Text Input" placeholder="Type here..." size="large" />
                        </Container>
                        <Container spacing="20">
                            <SubHeadingText>Input Text Disabled</SubHeadingText>
                            <InputText label="Disabled Text Input" placeholder="Type here..." size="small" disabled={true} />
                            <InputText label="Disabled Text Input" placeholder="Type here..." disabled={true} />
                            <InputText label="Disabled Text Input" placeholder="Type here..." size="large" disabled={true} />
                        </Container>
                        <Container spacing="20">
                            <SubHeadingText>Input Text Error</SubHeadingText>
                            <InputText label="Error Text Input" isValid={false} placeholder="Type here..." size="small" errorMessage="Please type something" />
                            <InputText label="Error Text Input" isValid={false} placeholder="Type here..." errorMessage="Please type something" />
                            <InputText label="Error Text Input" isValid={false} placeholder="Type here..." size="large" errorMessage="Please type something" />
                        </Container>
                    </Container>
                    <Container spacing="30" cols="3">
                        <Container spacing="20">
                            <SubHeadingText>Input Number Default</SubHeadingText>
                            <InputNumber label="Default Number Input" value={numberValue} onChange={onNumberChange} onMinusClick={onMinusClick} onPlusClick={onPlusClick} size="small" />
                            <InputNumber label="Default Number Input" value={numberValue} onChange={onNumberChange} onMinusClick={onMinusClick} onPlusClick={onPlusClick} />
                            <InputNumber label="Default Number Input" value={numberValue} onChange={onNumberChange} onMinusClick={onMinusClick} onPlusClick={onPlusClick} size="large" />
                        </Container>
                        <Container spacing="20">
                            <SubHeadingText>Input Number Disabled</SubHeadingText>
                            <InputNumber label="Disabled Number Input" value={numberValue} onChange={onNumberChange} onMinusClick={onMinusClick} onPlusClick={onPlusClick} size="small" disabled={true} />
                            <InputNumber label="Disabled Number Input" value={numberValue} onChange={onNumberChange} onMinusClick={onMinusClick} onPlusClick={onPlusClick} disabled={true} />
                            <InputNumber label="Disabled Number Input" value={numberValue} onChange={onNumberChange} onMinusClick={onMinusClick} onPlusClick={onPlusClick} size="large" disabled={true} />
                        </Container>
                        <Container spacing="20">
                            <SubHeadingText>Input Number Error</SubHeadingText>
                            <InputNumber label="Error Number Input" value={numberValue} onChange={onNumberChange} onMinusClick={onMinusClick} onPlusClick={onPlusClick}  isValid={false} size="small" errorMessage="Please type something" />
                            <InputNumber label="Error Number Input" value={numberValue} onChange={onNumberChange} onMinusClick={onMinusClick} onPlusClick={onPlusClick}  isValid={false} errorMessage="Please type something" />
                            <InputNumber label="Error Number Input" value={numberValue} onChange={onNumberChange} onMinusClick={onMinusClick} onPlusClick={onPlusClick}  isValid={false} size="large" errorMessage="Please type something" />
                        </Container>
                    </Container>
                    <Container spacing="30" cols="3">
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
                    <Container spacing="30" cols="3">
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
                    <Container spacing="30" cols="5">
                        <Container spacing="20">
                            <SubHeadingText>Checkbox Off</SubHeadingText>
                            <Checkbox>Label</Checkbox>
                            <Checkbox disabled>Label</Checkbox>
                            <Checkbox isValid={false}>Label</Checkbox>
                        </Container>
                        <Container spacing="20">
                            <SubHeadingText>Checkbox On</SubHeadingText>
                            <Checkbox checked="checked">Label</Checkbox>
                            <Checkbox checked="checked" disabled>Label</Checkbox>
                        </Container>
                        <Container spacing="20">
                            <SubHeadingText>Radio Button Off</SubHeadingText>
                            <RadioButton name="same">Label</RadioButton>
                            <RadioButton name="same" disabled>Label</RadioButton>
                            <RadioButton name="same" isValid={false}>Label</RadioButton>
                        </Container>
                        <Container spacing="20">
                            <SubHeadingText>Radio Button On</SubHeadingText>
                            <RadioButton name="same1" checked="checked">Label</RadioButton>
                            <RadioButton name="same2" checked="checked" disabled>Label</RadioButton>
                        </Container>
                        <Container spacing="20">
                            <SubHeadingText>Toggle</SubHeadingText>
                            <Toggle name="same1">Label</Toggle>
                        </Container>
                    </Container>
                </Card>
            </Container>
            <Card type="box" size="30" spacing="30" headerLabel="Tab Navigation" cols="2">
                <Container spacing="30">
                    <SubHeadingText>Tab Navigation Equal Tab Widths</SubHeadingText>
                    <TabNav marginBottom="20">
                        <BodyText label="Tab 1">This is just placeholder content</BodyText>
                        <BodyText label="Tab 2">This is just placeholder content and this time it's longer</BodyText>
                        <BodyText label="Tab 3">This is just placeholder content and this time it's even longer so you can notice it changing</BodyText>
                    </TabNav>
                </Container>
                <Container spacing="30">
                    <SubHeadingText>Tab Navigation Max Content Tabs</SubHeadingText>
                    <TabNav maxContent={true} marginBottom="20">
                        <BodyText label="Tab 1">This is just placeholder content</BodyText>
                        <BodyText label="Tab 2">This is just placeholder content and this time it's longer</BodyText>
                        <BodyText label="Tab 3">This is just placeholder content and this time it's even longer so you can notice it changing</BodyText>
                    </TabNav>
                </Container>
            </Card>
            <Card headerLabel="Data Visualization" type="box" spacing="30" size="30">
                <Container>
                    <BodyText>Data visualization is built using the amazing <LinkText href="https://formidable.com/open-source/victory/" target="_blank">Victory library</LinkText></BodyText>
                </Container>
                <Divider />
                <Container spacing="30" cols="3">
                    <ChartResizer domainPadding={40}>
                        <VictoryAxis
                            tickValues={[1, 2, 3, 4]}
                            tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
                            fixLabelOverlap={true}
                        />
                        <VictoryAxis
                            dependentAxis
                            tickFormat={(x) => (`$${x / 1000}k`)}
                        />
                        <VictoryStack>
                            <VictoryBar
                                data={data}
                                // data accessor for x values
                                x="quarter"
                                // data accessor for y values
                                y="earnings"
                                cornerRadius = {{top: 0, bottom: 5}}
                            />
                            <VictoryBar
                                data={data2}
                                // data accessor for x values
                                x="quarter"
                                // data accessor for y values
                                y="earnings"
                                cornerRadius = {{top: 5, bottom: 0}}
                            />
                        </VictoryStack>
                    </ChartResizer>
                    <VictoryPie labels={[]} cornerRadius="5" padAngle={2} theme={DataVizTheme} innerRadius={100} data={data3} />
                    <ChartResizer>
                        <VictoryAxis
                            tickValues={[1, 2, 3, 4, 5]}
                            tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4", "Quarter 5"]}
                        />
                        <VictoryAxis
                            dependentAxis
                        />
                        <VictoryStack>
                            <VictoryArea interpolation="cardinal" data={data4} />
                        </VictoryStack>
                    </ChartResizer>
                    <ChartResizer>
                        <VictoryAxis
                            tickValues={[1, 2, 3, 4, 5]}
                            tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4", "Quarter 5"]}
                        />
                        <VictoryAxis
                            dependentAxis
                        />
                        <VictoryStack>
                            <VictoryLine style={{data: {strokeWidth: 4}}} interpolation="cardinal" data={data4} />
                            <VictoryLine style={{data: {strokeWidth: 4}}} interpolation="cardinal" data={data5} />
                        </VictoryStack>
                    </ChartResizer>
                    <ChartResizer domainPadding={{x: 30}}>
                        <VictoryAxis
                            tickValues={[1, 2, 3, 4, 5]}
                            tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4", "Quarter 5"]}
                        />
                        <VictoryAxis
                            dependentAxis
                        />
                        <VictoryStack>
                            <VictoryScatter data={data6} />
                            <VictoryScatter data={data7} />
                        </VictoryStack>
                    </ChartResizer>
                    <ChartResizer domainPadding={{x: 30}}>
                        <VictoryAxis
                            tickValues={[1, 2, 3, 4, 5]}
                            tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4", "Quarter 5"]}
                        />
                        <VictoryAxis
                            dependentAxis
                        />
                        <VictoryStack>
                            <VictoryScatter bubbleProperty="amount" maxBubbleSize={25} minBubbleSize={5} data={data6} />
                            <VictoryScatter bubbleProperty="amount" maxBubbleSize={25} minBubbleSize={5} data={data7} />
                            <VictoryScatter bubbleProperty="amount" maxBubbleSize={25} minBubbleSize={5} data={data8} />
                        </VictoryStack>
                    </ChartResizer>
                </Container>
            </Card>
        </Container>
    </>);
}