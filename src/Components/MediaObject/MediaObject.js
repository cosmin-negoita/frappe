import React from "react";
import clsx from "clsx";
import "./MediaObject.css";

export default function MediaObject(props) {
    const {className, ...attr} = props;
    const {style} = props;

    const componentBaseClass = "media-object";

    const size = props.size ? componentBaseClass + "--" + props.size : "";
    const spacing = props.spacing ? componentBaseClass + "--spacing-" + props.spacing : "";
    const inverse = props.inverse === true ? componentBaseClass + "--inverse" : "";
    const align = props.align ? componentBaseClass + "--align-" + props.align : "";
    const noTopPadding = props.noTopPadding ? componentBaseClass + "--no-top-padding" : "";
    const classes = clsx(componentBaseClass, size, noTopPadding, inverse, spacing, align, className);

    let layout = props.mediaSize + " 1fr";
    if (props.inverse) layout = "1fr " + props.mediaSize;
    console.log(layout);

    return (
        <div className={classes} style={{ gridTemplateColumns: layout, ...style}}>
            {props.children}
        </div>
    );
}