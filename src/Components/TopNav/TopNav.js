import React, {forwardRef} from "react";
import {NavLink} from "react-router-dom";
import "./TopNav.css";

import "../Typography/Typography.css";
import {SubHeadingText, BodyText} from "../Typography/Typography.js";

const TopNav = React.forwardRef((props, ref) => {
    return (
        <nav ref={ref} className="topNav">
            <SubHeadingText><strong>Frappe</strong></SubHeadingText>
            <div className="topNav__menu">
                <NavLink className="topNav__menu__item" exact to="/" activeClassName="topNav__menu__item__active">Components</NavLink>
                <NavLink className="topNav__menu__item" exact to="/examples" activeClassName="topNav__menu__item__active">Card Examples</NavLink>
                <NavLink className="topNav__menu__item" exact to="/experiments" activeClassName="topNav__menu__item__active">Experiments</NavLink>
            </div>
        </nav>
    );
});

export default TopNav;