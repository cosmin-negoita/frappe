import React from 'react';
import clsx from "clsx";
import "./Button.css";
import "../Reset.css";

export default function Button(props) {
    const {className, ...attr} = props;

    const componentBaseClass = "button";
    // Setting a class for a property: const propClass = props.propClass ? componentBaseClass + "--" + props.propClass : "";
    // Setting the classes for the component: const classes = clsx(componentBaseClass + " " + propClass, className);

    // Available Types (see CSS): primary (default), secondary
    // Available Sizes (see CSS): small, medium (default), large

    const type = props.type ? componentBaseClass + "--" + props.type : componentBaseClass + "--primary";
    const size = props.size ? componentBaseClass + "--" + props.size : componentBaseClass + "--medium";
    const classes = clsx(componentBaseClass, type, size, className);

    return <button className={classes} type={props.type} size={props.size} onClick={props.onClick} disabled={props.disabled}>{props.children}</button>
}