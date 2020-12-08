import React, {useState, useEffect, useRef} from "react";

import TopNav from "./Components/TopNav/TopNav.js";
import Container from "./Components/Container/Container.js";
import Card from "./Components/Card/Card.js";
import Button from "./Components/Button/Button.js";
import {LabelText, SmallBodyText, BodyText, BigBodyText, SubHeadingText, HeadingText, SubTitleText, TitleText} from "./Components/Typography/Typography.js";
import Icon from "./Components/Icons/Icon.js";
import Image from "./Components/Image/Image.js";
import InputText from "./Components/Form/InputText.js";
import InputNumber from "./Components/Form/InputNumber.js";
import InputPassword from "./Components/Form/InputPassword.js";
import Checkbox from "./Components/Form/Checkbox.js";
import RadioButton from "./Components/Form/RadioButton.js";
import Select from "./Components/Form/Select.js";
import TextArea from "./Components/Form/TextArea.js";
import TabNav from "./Components/TabNav/TabNav.js";

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

    useEffect(() => {
        document.title = "Frappe - Components";
    });

    return (<>
        <TopNav />
        <Container size="50">
            <TitleText>Components</TitleText>
        </Container>
        <Container size="50" cols="4" spacing="50" noTopPadding>
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
                <SubHeadingText>Card Popout</SubHeadingText>
                <Card type="popout" size="50" spacing="30">
                    <BodyText>This is a pop out used for modals, sidebars, etc.</BodyText>
                </Card>
            </Container>
        </Container>
        <Container size="50" spacing="30" noTopPadding >
            <Card headerLabel="Icons" type="box" size="30" spacing="30">
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
                </Container>
                <Container spacing="30" cols="max-content">
                    <Icon isContained={true} containerSize="48px" type="heart" color="--gray-5"/>
                    <Icon isContained={true} containerSize="48px" type="plus" color="--gray-5"/>
                    <Icon isContained={true} containerSize="48px" type="minus" color="--gray-5"/>
                    <Icon isContained={true} containerSize="48px" type="arrow-left" color="--gray-5"/>
                    <Icon isContained={true} containerSize="48px" type="arrow-right" color="--gray-5"/>
                    <Icon isContained={true} containerSize="48px" type="chevron-up" color="--gray-5"/>
                    <Icon isContained={true} containerSize="48px" type="chevron-down" color="--gray-5"/>
                    <Icon isContained={true} containerSize="48px" type="chevron-left" color="--gray-5"/>
                    <Icon isContained={true} containerSize="48px" type="chevron-right" color="--gray-5"/>
                    <Icon isContained={true} containerSize="48px" type="checkmark" color="--gray-5"/>
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
                        <Button size="small"><Icon type="heart" color="--gray-0" />Call to Action</Button>
                        <Button><Icon type="heart" color="gray-0" />Call to Action</Button>
                        <Button size="large"><Icon type="heart" color="--gray-0" />Call to Action</Button>
                    </Container>
                    <Container spacing="20">
                        <SubHeadingText>Secondary Buttons</SubHeadingText>
                        <Button type="secondary" size="small"><Icon type="heart" color="--gray-5" />Call to Action</Button>
                        <Button type="secondary"><Icon type="heart" color="--gray-5" />Call to Action</Button>
                        <Button type="secondary" size="large"><Icon type="heart" color="--gray-5" />Call to Action</Button>
                    </Container>
                    <Container spacing="20">
                        <SubHeadingText>Disabled Buttons</SubHeadingText>
                        <Button size="small" disabled><Icon type="heart" color="--gray-4" />Call to Action</Button>
                        <Button disabled><Icon type="heart" color="--gray-4" />Call to Action</Button>
                        <Button size="large" disabled><Icon type="heart" color="--gray-4" />Call to Action</Button>
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
                            <InputNumber label="Default Number Input" value={numberValue} onMinusClick={onMinusClick} onPlusClick={onPlusClick} size="small" />
                            <InputNumber label="Default Number Input" value={numberValue} onMinusClick={onMinusClick} onPlusClick={onPlusClick} />
                            <InputNumber label="Default Number Input" value={numberValue} onMinusClick={onMinusClick} onPlusClick={onPlusClick} size="large" />
                        </Container>
                        <Container spacing="20">
                            <SubHeadingText>Input Number Disabled</SubHeadingText>
                            <InputNumber label="Disabled Number Input" value={numberValue} onMinusClick={onMinusClick} onPlusClick={onPlusClick} size="small" disabled={true} />
                            <InputNumber label="Disabled Number Input" value={numberValue} onMinusClick={onMinusClick} onPlusClick={onPlusClick} disabled={true} />
                            <InputNumber label="Disabled Number Input" value={numberValue} onMinusClick={onMinusClick} onPlusClick={onPlusClick} size="large" disabled={true} />
                        </Container>
                        <Container spacing="20">
                            <SubHeadingText>Input Number Error</SubHeadingText>
                            <InputNumber label="Error Number Input" value={numberValue} onMinusClick={onMinusClick} onPlusClick={onPlusClick}  isValid={false} size="small" errorMessage="Please type something" />
                            <InputNumber label="Error Number Input" value={numberValue} onMinusClick={onMinusClick} onPlusClick={onPlusClick}  isValid={false} errorMessage="Please type something" />
                            <InputNumber label="Error Number Input" value={numberValue} onMinusClick={onMinusClick} onPlusClick={onPlusClick}  isValid={false} size="large" errorMessage="Please type something" />
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
                    <Container spacing="30" cols="4">
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
        </Container>
    </>);
}