import React from "react";
import {Route} from "react-router-dom";

import ViewExamples from "./ViewExamples.js";
import ViewExperiment from "./ViewExperiment.js";
import ViewDashboard from "./ViewDashboard.js";
import ViewColors from "./ViewColors.js";
import ViewTypography from "./ViewTypography.js";
import ViewIconography from "./ViewIconography.js";
import ViewContainers from "./ViewContainers.js";
import ViewButtons from "./ViewButtons.js";
import ViewForms from "./ViewForms.js";
import ViewTabNav from "./ViewTabNav.js";
import ViewDataViz from "./ViewDataViz.js";
import ViewTable from "./ViewTable.js";

import Container from "./Components/Container/Container.js";
import StyledPage from "./Components/StyledPage.js";
import Sidebar from "./Components/Sidebar/Sidebar.js";

function App() {
    return (
        <StyledPage>
            <Container className="scrollableParent" layout="300px 1fr">
                <Sidebar />
                <Container className="scrollable">
                        <Route exact path="/">
                            <ViewExamples />
                        </Route>
                        <Route exact path="/experiments">
                            <ViewExperiment />
                        </Route>
                        <Route exact path="/dashboard">
                            <ViewDashboard />
                        </Route>
                        <Route exact path="/colors">
                            <ViewColors />
                        </Route>
                        <Route exact path="/typography">
                            <ViewTypography />
                        </Route>
                        <Route exact path="/iconography">
                            <ViewIconography />
                        </Route>
                        <Route exact path="/containers">
                            <ViewContainers />
                        </Route>
                        <Route exact path="/buttons">
                            <ViewButtons />
                        </Route>
                        <Route exact path="/form-elements">
                            <ViewForms />
                        </Route>
                        <Route exact path="/table">
                            <ViewTable />
                        </Route>
                        <Route exact path="/tabnav">
                            <ViewTabNav />
                        </Route>
                        <Route exact path="/data-visualization">
                            <ViewDataViz />
                        </Route>
                </Container>
            </Container>
        </StyledPage>
    );
}

export default App;
