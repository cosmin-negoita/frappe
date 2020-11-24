import React, {useState} from "react";
import {Link, Route, NavLink} from "react-router-dom";
import "./TopNav.css";

import "../Typography/Typography.css";
import {SubHeadingText, BodyText} from "../Typography/Typography.js";

export default function TopNav(props) {
    
    return (
        <nav className="topNav">
            <SubHeadingText><strong>Frappe</strong></SubHeadingText>
            <div className="topNav__menu">
                <NavLink className="topNav__menu__item" exact to="/" activeClassName="topNav__menu__item__active">Components</NavLink>
                <NavLink className="topNav__menu__item" exact to="/examples" activeClassName="topNav__menu__item__active">Card Examples</NavLink>
                <NavLink className="topNav__menu__item" exact to="/experiment" activeClassName="topNav__menu__item__active">Experiment</NavLink>
            </div>
        </nav>
    );
}