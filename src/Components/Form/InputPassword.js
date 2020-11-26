import React, {useState} from "react";
import clsx from "clsx";
import "./Form.css";
import "../Typography/Typography.css";
import {SmallBodyText} from "../Typography/Typography.js";

export default function Input(props) {
    const [numberValue, setNumberValue] = useState(0);

    const {className, ...attrs} = props;
    const componentBaseClass = "input";
    const hasError = props.isValid === false ? "has-error" : "";
    const size = props.size ? componentBaseClass + "--" + props.size : componentBaseClass + "--medium";
    const classes = clsx(componentBaseClass, "input--password", hasError, size, className);

    return (
        <div className="form-field">
            {props.label && <label className="text--label">{props.label}</label>}
            <input size={props.size} type="password" name={props.name} className={classes} placeholder={props.placeholder} value={props.value} onChange={props.onChange} disabled={props.disabled} />
            {props.isValid === false && <SmallBodyText>{props.errorMessage}</SmallBodyText>}
        </div>
    )
}