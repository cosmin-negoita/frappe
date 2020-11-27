import React, {useState} from "react";
import clsx from "clsx";
import "./Form.css";

export default function Checkbox(props) {

    const {className} = props;
    const componentBaseClass = "checkbox";

    const hasError = props.isValid === false ? "has-error" : "";
    const classes = clsx(componentBaseClass, hasError, className);
    const checkmarkClasses = clsx("checkbox__checkmark", hasError);

    return (
        <label className={classes}>
            <input className="input" type="checkbox" onClick={props.onClick} checked={props.checked} name={props.name} value={props.value} disabled={props.disabled} />
            <span className={checkmarkClasses}></span>
            {props.children}
        </label>
    );
}