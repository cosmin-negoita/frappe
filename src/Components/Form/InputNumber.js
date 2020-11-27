import React, {useState} from "react";
import clsx from "clsx";
import "./Form.css";
import "../Typography/Typography.css";
import {SmallBodyText} from "../Typography/Typography.js";
import Button from "../Button/Button.js";
import {IconPlus, IconMinus} from "../Icons/Icon.js";

export default function Input(props) {

    const {className, ...attrs} = props;
    const componentBaseClass = "input";
    const hasError = props.isValid === false ? "has-error" : "";
    const size = props.size ? componentBaseClass + "--" + props.size : componentBaseClass + "--medium";
    const classes = clsx(componentBaseClass, "input--number", hasError, size, className);

    const color = props.disabled === true ? "--gray-4" : "--gray-0";

    return (
        <div className="form-field">
            {props.label && <label className="text--label">{props.label}</label>}
            <div>
                <Button size={props.size} onClick={props.onMinusClick} className="input--number__minus" disabled={props.disabled}><IconMinus color={color} /></Button>
                <input size={props.size} type="number" name={props.name} className={classes} value={props.value} disabled={props.disabled} />
                <Button size={props.size} onClick={props.onPlusClick} className="input--number__plus" disabled={props.disabled}><IconPlus color={color} /></Button>
            </div>
            {props.isValid === false && <SmallBodyText>{props.errorMessage}</SmallBodyText>}
        </div>
    )
}