import React from "react";
import {Route, Switch} from "react-router-dom";
import {SwitchTransition, TransitionGroup, CSSTransition} from "react-transition-group";
import styled, {createGlobalStyle} from "styled-components";

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

const GlobalPageStyles = createGlobalStyle`
    .fade-enter {
        opacity: 0;
        transform: translateY(50px);
    }
    .fade-enter-active {
        opacity: 1;
        transform: translateY(0);
        transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    }
    .fade-exit {
        opacity: 1;
        transform: translateY(0);
    }
    .fade-exit-active {
        opacity: 0;
        transform: translateY(-50px);
        transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    }
`;

function App() {
    return (<>
        <GlobalPageStyles />
        <StyledPage>
            <Container className="scrollableParent" layout="300px 1fr">
                <Sidebar />
                <Route render={({location}) => (
                    <SwitchTransition>
                        <CSSTransition
                            key={location.key}
                            timeout={300}
                            classNames="fade"
                        >
                            <Container className="scrollable">
                                <Switch location={location}>
                                    <Route exact path="/" component={ViewExamples} />
                                    <Route exact path="/experiments" component={ViewExperiment} />
                                    <Route exact path="/dashboard" component={ViewDashboard} />
                                    <Route exact path="/colors" component={ViewColors} />
                                    <Route exact path="/typography" component={ViewTypography} />
                                    <Route exact path="/iconography" component={ViewIconography} />
                                    <Route exact path="/containers" component={ViewContainers} />
                                    <Route exact path="/buttons" component={ViewButtons} />
                                    <Route exact path="/form-elements" component={ViewForms} />
                                    <Route exact path="/table" component={ViewTable} />
                                    <Route exact path="/tabnav" component={ViewTabNav} />
                                    <Route exact path="/data-visualization" component={ViewDataViz} />
                                </Switch>
                            </Container>
                        </CSSTransition>
                    </SwitchTransition>
                )} />
            </Container>
        </StyledPage>
    </>);
}

export default App;
