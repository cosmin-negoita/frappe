import React, {useState, useEffect} from "react";

import Container from "./Components/Container/Container.js";
import Card from "./Components/Card/Card.js";
import Button from "./Components/Button/Button.js";
import InputText from "./Components/Form/InputText.js";
import InputNumber from "./Components/Form/InputNumber.js";
import InputPassword from "./Components/Form/InputPassword.js";
import Checkbox from "./Components/Form/Checkbox.js";
import Toggle from "./Components/Form/Toggle.js";
import RadioButton from "./Components/Form/RadioButton.js";
import Select from "./Components/Form/Select.js";
import TextArea from "./Components/Form/TextArea.js";
import {SubHeadingText, TitleText} from "./Components/Typography/Typography.js";

export default function ViewForms(props) {
    useEffect(() => {
        document.title = "Frappe - Form Elements";
    });

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

    return (<>
        <Container size="50">
            <TitleText>Form Elements</TitleText>
        </Container>
        <Container size="50" spacing="30" noTopPadding>
            <Card type="box" size="30" spacing="30" cols="3">
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
            </Card>
            <Card type="box" size="30" spacing="30" cols="3">
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
            </Card>
            <Card type="box" size="30" spacing="30" cols="3">
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
            </Card>
            <Card type="box" size="30" spacing="30" cols="3">
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
            </Card>
            <Card type="box" size="30" spacing="30" cols="5">
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
            </Card>
        </Container>
    </>)
}