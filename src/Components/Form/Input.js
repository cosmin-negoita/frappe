import React, {useState} from "react";
import clsx from "clsx";
import "./Form.css";
import "../Typography/Typography.css";
import {SmallBodyText} from "../Typography/Typography.js";

export default function Input(props) {

    const {className, ...attrs} = props;
    const componentBaseClass = "input";
    const hasError = props.isValid === false ? "has-error" : "";
    const size = props.size ? componentBaseClass + "--size-" + props.size : componentBaseClass + "--medium";
    const classes = clsx(componentBaseClass, hasError, size, className);

    return (
        <div className="form-field">
            {props.label && <label className="text--label">{props.label}</label>}
            <input size={props.size} type={props.type} name={props.name} className={classes} placeholder={props.placeholder} value={props.value} onChange={props.onChange} disabled={props.disabled} />
            {props.isValid === false && <SmallBodyText>{props.errorMessage}</SmallBodyText>}
        </div>
        )
}