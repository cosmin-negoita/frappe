import React from "react";
import clsx from "clsx";
import "./MediaObject.css";

export default function MediaObject(props) {
    const {className, ...attr} = props;
    const {style} = props;

    const componentBaseClass = "media-object";

    const spacing = props.spacing ? componentBaseClass + "--spacing-" + props.spacing : "";
    const inverse = props.inverse === true ? componentBaseClass + "--inverse" : "";
    const align = props.align ? componentBaseClass + "--align-" + props.align : "";
    const classes = clsx(componentBaseClass, inverse, spacing, align, className);

    let layout = props.mediaSize + " 1fr";
    if (props.inverse) layout = "1fr " + props.mediaSize;

    return (
        <div className={classes} style={{
            gridTemplateColumns: layout,
            ...style
            }}>
            {props.children}
        </div>
    );
}