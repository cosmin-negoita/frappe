import React from 'react';
import clsx from "clsx";
import "../Typography/Typography.css";
import "../Reset.css";
import "./Container.css";

export default function Container(props) {
    const {className, ...attr} = props;

    const componentBaseClass = "container";
    // Setting a class for a property: const propClass = props.propClass ? componentBaseClass + "--" + props.propClass : "";
    // Setting the classes for the component: const classes = clsx(componentBaseClass + " " + propClass, className);

    // Available Sizes (see CSS): undefined, small, medium, large
    // Available Spacings (see CSS): undefined, 10, 20, 30, 50, 100
    // Available Layout (see CSS): undefined, 2, 3, 4, auto

    const size = props.size ? componentBaseClass + "--" + props.size : "";
    const spacing = props.spacing ? componentBaseClass + "--spacing-" + props.spacing : "";
    const layout = props.layout ? componentBaseClass + "--col-" + props.layout : "";
    const limitHeight = props.limitHeight ? componentBaseClass + "--limit-height" : "";
    const noTopPadding = props.noTopPadding ? componentBaseClass + "--no-top-padding" : "";
    const classes = clsx(componentBaseClass, size, spacing, layout, noTopPadding, limitHeight, className);

    return <div className={classes} style={props.style}>{props.children}</div>
}