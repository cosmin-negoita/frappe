import React, {useState} from "react";
import {Link, Route, NavLink} from "react-router-dom";
import "./TopNav.css";

import "../Typography/Typography.css";
import {TitleText, BodyText} from "../Typography/Typography.js";

export default function TopNav(props) {
    
    return (
        <nav className="topNav">
            <BodyText><strong>COSMINATOR</strong></BodyText>
            <div className="topNav__menu">
                <NavLink className="topNav__menu__item" exact to="/" activeClassName="topNav__menu__item__active">Components</NavLink>
                <NavLink className="topNav__menu__item" exact to="/examples" activeClassName="topNav__menu__item__active">Card Examples</NavLink>
                <NavLink className="topNav__menu__item" exact to="/experiment" activeClassName="topNav__menu__item__active">Experiment</NavLink>
            </div>
        </nav>
    );
}