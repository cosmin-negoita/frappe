import React, {useState} from "react";
import {Link, Route, Switch} from "react-router-dom";
import './App.css';
import ViewExamples from "./ViewExamples.js";
import ViewComponents from "./ViewComponents.js";
import ViewExperiment from "./ViewExperiment.js";

function App() {
    return (<>
        <Route exact path="/">
            <ViewComponents />
        </Route>
        <Route path="/examples">
            <ViewExamples />
        </Route>
        <Route path="/experiments">
            <ViewExperiment />
        </Route>
    </>);
}

export default App;
