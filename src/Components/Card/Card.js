import React from 'react';
import clsx from "clsx";
import Container from '../Container/Container.js';
import "../Typography/Typography.css";
import "../Reset.css";
import "./Card.css";

export default function Card(props) {
    const {className, ...attr} = props;

    const componentBaseClass = "card";
    // Setting a class for a property: const propClass = props.propClass ? componentBaseClass + "--" + props.propClass : "";
    // Setting the classes for the component: const classes = clsx(componentBaseClass + " " + propClass, className);

    // Available Types (see CSS): undefined, box, border
    // Available Sizes from Container (see Container CSS): undefined, small, medium, large
    // Available Spacings from Container (see Container CSS): undefined, 10, 20, 30, 50, 100
    // Available Layout from Container (see Container CSS): undefined, 2, 3, 4, auto

    const type = props.type ? componentBaseClass + "--" + props.type : "";
    const classes = clsx(componentBaseClass, type, className);
    const headerClasses = clsx("card__header", "text--label", "card__header--" + props.size);

    if (props.headerLabel){
        return (
        <Container id={props.id} className={classes} limitHeight={props.limitHeight}>
            <div className={headerClasses}>{props.headerLabel}</div>
            <Container size={props.size} spacing={props.spacing} layout={props.layout} >
                {props.children}
            </Container>
        </Container>);
    }
    else {
        return <Container className={classes} size={props.size} spacing={props.spacing} layout={props.layout} limitHeight={props.limitHeight}>{props.children}</Container>;
    }
}