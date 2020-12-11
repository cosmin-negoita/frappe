import React from "react";
import styled from "styled-components";
import clsx from "clsx";
import "./Typography.css";
import "../Reset.css";

export function LabelText(props) {
    const {className, ...attr} = props;
    const align = props.align ? "text--align-" + props.align : "";
    const classes = clsx("text--label", align, className);

    return <p className={classes} {...attr}>{props.children}</p>
}

export function SmallBodyText(props) {
    const {className, ...attr} = props;
    const align = props.align ? "text--align-" + props.align : "";
    const classes = clsx("text--small-body", align, className);

    return <p className={classes} {...attr}>{props.children}</p>
}

export function BodyText(props) {
    const {className, ...attr} = props;
    const align = props.align ? "text--align-" + props.align : "";
    const classes = clsx("text--body", align, className);

    return <p className={classes} {...attr}>{props.children}</p>
}

export function BigBodyText(props) {
    const {className, ...attr} = props;
    const align = props.align ? "text--align-" + props.align : "";
    const classes = clsx("text--big-body", align, className);

    return <p className={classes} {...attr}>{props.children}</p>
}

export function SubHeadingText(props) {
    const {className, ...attr} = props;
    const align = props.align ? "text--align-" + props.align : "";
    const classes = clsx("text--sub-heading", align, className);

    return <h4 className={classes} {...attr}>{props.children}</h4>
}

export function HeadingText(props) {
    const {className, ...attr} = props;
    const align = props.align ? "text--align-" + props.align : "";
    const classes = clsx("text--heading", align, className);

    return <h3 className={classes} {...attr}>{props.children}</h3>
}

export function SubTitleText(props) {
    const {className, ...attr} = props;
    const align = props.align ? "text--align-" + props.align : "";
    const classes = clsx("text--sub-title", align, className);

    return <h2 className={classes} {...attr}>{props.children}</h2>
}

export function TitleText(props) {
    const {className, ...attr} = props;
    const align = props.align ? "text--align-" + props.align : "";
    const classes = clsx("text--title", align, className);

    return <h1 className={classes} {...attr}>{props.children}</h1>
}

export const LinkText = styled.a`
    color: var(--brand);
    text-decoration: none;
    box-shadow: 0 1px 0 var(--brand-light);
    transition: box-shadow 0.2s ease-in, color 0.2s ease-in;

    &:hover {
        color: var(--gray-5);
        box-shadow: 0 4px 0 var(--brand-light);
    }
`;

export default {
    LabelText, SmallBodyText, BodyText, BigBodyText, SubHeadingText, HeadingText, SubTitleText, TitleText, LinkText
}