import React, {useEffect} from "react";

import Container from "./Components/Container/Container.js";
import Card from "./Components/Card/Card.js";
import Button from "./Components/Button/Button.js";
import {SubHeadingText, TitleText} from "./Components/Typography/Typography.js";
import {VictoryBar, VictoryChart, VictoryAxis, VictoryStack, VictoryPie, VictoryArea, VictoryLine, VictoryScatter} from "victory";
import DataVizTheme from "./Components/DataVizTheme.js";
import Divider from "./Components/Divider.js";
import ChartResizer from "./Components/Charts/ChartResizer.js";

export default function ViewDataViz(props) {
    useEffect(() => {
        document.title = "Frappe - Data Visualization";
    });

    const data = [
        {quarter: 1, earnings: 200},
        {quarter: 2, earnings: 400},
        {quarter: 3, earnings: 200},
        {quarter: 4, earnings: 600}
      ];
    const data2 = [
        {quarter: 1, earnings: 100},
        {quarter: 2, earnings: 200},
        {quarter: 3, earnings: 100},
        {quarter: 4, earnings: 300}
    ];
    const data3 = [
        {x: "label", y: 5000},
        {x: "another", y: 3000},
        {x: "final", y: 1500},
        {x: "second final", y: 1200},
        {x: "final", y: 2400},
        {x: "second final", y: 1800}
    ];
    const data4 = [
        { x: 1, y: 3, y0: 0 },
        { x: 2, y: 1, y0: 0 },
        { x: 3, y: 5, y0: 0 },
        { x: 4, y: 4, y0: 0 },
        { x: 5, y: 6, y0: 0 }
    ];
    const data5 = [
        { x: 1, y: 2, y0: 0 },
        { x: 2, y: 4, y0: 0 },
        { x: 3, y: 2, y0: 0 },
        { x: 4, y: 5, y0: 0 },
        { x: 5, y: 4, y0: 0 }
    ];
    const data6 = [
        { x: 1, y: 2, amount: 1 },
        { x: 2, y: 3, amount: 3 },
        { x: 3, y: 5, amount: 6 },
        { x: 4, y: 3, amount: 4 },
        { x: 5, y: 4, amount: 2 }
    ];
    const data7 = [
        { x: 1, y: 3, amount: 3 },
        { x: 2, y: 2, amount: 1 },
        { x: 3, y: 3, amount: 4 },
        { x: 4, y: 4, amount: 2 },
        { x: 5, y: 5, amount: 6 }
    ];
    const data8 = [
        { x: 1, y: 4, amount: 2 },
        { x: 2, y: 3, amount: 4 },
        { x: 3, y: 4, amount: 1 },
        { x: 4, y: 5, amount: 6 },
        { x: 5, y: 6, amount: 2 }
    ];

    return (<>
        <Container size="50">
            <TitleText>Data Visualization</TitleText>
        </Container>
        <Container size="50" spacing="30" cols="3" noTopPadding>
            <Card type="box" spacing="30" size="30">
                <ChartResizer domainPadding={40}>
                    <VictoryAxis
                        tickValues={[1, 2, 3, 4]}
                        tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
                        fixLabelOverlap={true}
                    />
                    <VictoryAxis
                        dependentAxis
                        tickFormat={(x) => (`$${x / 1000}k`)}
                    />
                    <VictoryStack>
                        <VictoryBar
                            data={data}
                            // data accessor for x values
                            x="quarter"
                            // data accessor for y values
                            y="earnings"
                            cornerRadius = {{top: 0, bottom: 5}}
                        />
                        <VictoryBar
                            data={data2}
                            // data accessor for x values
                            x="quarter"
                            // data accessor for y values
                            y="earnings"
                            cornerRadius = {{top: 5, bottom: 0}}
                        />
                    </VictoryStack>
                </ChartResizer>
            </Card>
            <Card type="box" spacing="30" size="30">
                <VictoryPie labels={[]} cornerRadius="5" padAngle={2} theme={DataVizTheme} innerRadius={100} data={data3} />
            </Card>
            <Card type="box" spacing="30" size="30">
                <ChartResizer>
                    <VictoryAxis
                        tickValues={[1, 2, 3, 4, 5]}
                        tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4", "Quarter 5"]}
                    />
                    <VictoryAxis
                        dependentAxis
                    />
                    <VictoryStack>
                        <VictoryArea interpolation="cardinal" data={data4} />
                    </VictoryStack>
                </ChartResizer>
            </Card>
            <Card type="box" spacing="30" size="30">
                <ChartResizer>
                    <VictoryAxis
                        tickValues={[1, 2, 3, 4, 5]}
                        tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4", "Quarter 5"]}
                    />
                    <VictoryAxis
                        dependentAxis
                    />
                    <VictoryStack>
                        <VictoryLine style={{data: {strokeWidth: 4}}} interpolation="cardinal" data={data4} />
                        <VictoryLine style={{data: {strokeWidth: 4}}} interpolation="cardinal" data={data5} />
                    </VictoryStack>
                </ChartResizer>
            </Card>
            <Card type="box" spacing="30" size="30">
                <ChartResizer domainPadding={{x: 30}}>
                    <VictoryAxis
                        tickValues={[1, 2, 3, 4, 5]}
                        tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4", "Quarter 5"]}
                    />
                    <VictoryAxis
                        dependentAxis
                    />
                    <VictoryStack>
                        <VictoryScatter data={data6} />
                        <VictoryScatter data={data7} />
                    </VictoryStack>
                </ChartResizer>
            </Card>
            <Card type="box" spacing="30" size="30">
                <ChartResizer domainPadding={{x: 30}}>
                    <VictoryAxis
                        tickValues={[1, 2, 3, 4, 5]}
                        tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4", "Quarter 5"]}
                    />
                    <VictoryAxis
                        dependentAxis
                    />
                    <VictoryStack>
                        <VictoryScatter bubbleProperty="amount" maxBubbleSize={25} minBubbleSize={5} data={data6} />
                        <VictoryScatter bubbleProperty="amount" maxBubbleSize={25} minBubbleSize={5} data={data7} />
                        <VictoryScatter bubbleProperty="amount" maxBubbleSize={25} minBubbleSize={5} data={data8} />
                    </VictoryStack>
                </ChartResizer>
            </Card>
        </Container>
    </>)
}