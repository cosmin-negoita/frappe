import React from "react";
import "./Avatar.css";
import clsx from "clsx";

import Image from "../Image/Image.js";

export default function Avatar(props) {
    const {className, ...attr} = props;

    const componentBaseClass = "avatar";
    const classes = clsx(componentBaseClass, className);
    return <Image src={props.src} className={classes} width={props.size} />
}
