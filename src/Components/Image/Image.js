import React from 'react';
import clsx from "clsx";
import "./Image.css";
import "../Reset.css";

export default function Image(props) {
    const {className, ...attr} = props;

    const componentBaseClass = "image";
    // Setting a class for a property: const propClass = props.propClass ? componentBaseClass + "--" + props.propClass : "";
    // Setting the classes for the component: const classes = clsx(componentBaseClass + " " + propClass, className);

    // Available Types (see CSS): primary (default), secondary
    const classes = clsx(componentBaseClass, className);

    return <img className={classes} src={props.src} alt={props.alt} width={props.width} height={props.height} />
}