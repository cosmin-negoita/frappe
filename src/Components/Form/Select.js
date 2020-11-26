import React, {useState} from "react";
import clsx from "clsx";
import "./Form.css";
import "../Typography/Typography.css";
import {SmallBodyText} from "../Typography/Typography.js";

export default function Select(props) {

    const {className, ...attrs} = props;
    const componentBaseClass = "input";
    const hasError = props.isValid === false ? "has-error" : "";
    const size = props.size ? componentBaseClass + "--" + props.size : componentBaseClass + "--medium";
    const classes = clsx(componentBaseClass, "select", hasError, size, className);

    return (
        <div className="form-field">
            {props.label && <label className="text--label">{props.label}</label>}
            <select size={props.size} name={props.name} className={classes} value={props.value} onChange={props.onChange} disabled={props.disabled}>
                {props.children}
            </select>
            {props.isValid === false && <SmallBodyText>{props.errorMessage}</SmallBodyText>}
        </div>
        )
}