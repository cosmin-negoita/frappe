import React from "react";
import {Route} from "react-router-dom";
import ViewExamples from "./ViewExamples.js";
import ViewComponents from "./ViewComponents.js";
import ViewExperiment from "./ViewExperiment.js";
import ViewDashboard from "./ViewDashboard.js";

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
        <Route path="/dashboard">
            <ViewDashboard />
        </Route>
    </>);
}

export default App;
