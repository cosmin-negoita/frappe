import React, {useState} from "react";
import "./TabNav.css";
import clsx from "clsx";

import Container from "../Container/Container.js";

function TabButton(props) {
    const {className} = props;
    const componentBaseClass = "tabNav__tabButton";
    const isActive = props.activeTab === props.label ? "active" : "";
    const size = props.size ? componentBaseClass + "--" + props.size : componentBaseClass + "--medium";
    const classes = clsx(componentBaseClass, size, isActive, className);
    return (
        <button className={classes} onClick={props.onClick}>{props.label}</button>
    );
}

export default function TabNav(props) {
    const [activeTab, setActiveTab] = useState(props.children[0].props.label);

    const {className} = props;
    const componentBaseClass = "tabNav";
    const maxContent = props.maxContent === true ? "tab-wrap-content" : "";
    const tabNavClasses = clsx(componentBaseClass, maxContent, className);
    const marginBottom = props.marginBottom ? "marginBottom-" + props.marginBottom : "";
    const tabNavHeaderClasses = clsx("tabNav__header", marginBottom);

    function onTabClick(label) {
        setActiveTab(label);
    }

    return (
        <Container className={tabNavClasses}>
            <Container className={tabNavHeaderClasses}>
                {props.children.map((child, index) => (<TabButton key={index} tabSize={props.tabSize} activeTab={activeTab} label={child.props.label} onClick={(e) => {e.preventDefault(); onTabClick(child.props.label)}} />))}
            </Container>
            <Container className="tabNav__content" size={props.size} spacing={props.spacing}>
                {props.children.map((child) => {
                    if (child.props.label !== activeTab) return undefined;
                    return child.props.children;
                })}
            </Container>
        </Container>
    );
}