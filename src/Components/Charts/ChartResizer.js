import React, {useState, useEffect, useRef} from "react";
import {VictoryChart, VictoryContainer} from "victory";
import DataVizTheme from "../DataVizTheme.js";

function debounce(fn, ms) {
    let timer;
    return () => {
        clearTimeout(timer);
        timer = setTimeout(_ => {
            timer = null;
            fn.apply(this, arguments)
        }, ms)
    };
}

export default function ChartResizer(props) {
    const [width, setWidth] = useState(null);
    const containerRef = useRef();

    useEffect(() => {
        function handleResize() {
            const {offsetWidth} = containerRef.current;
            setWidth(offsetWidth);
            console.log(width);
        }
        debounce(handleResize(), 500);
        window.addEventListener("resize", debounce(handleResize, 500));
        return () => window.removeEventListener("resize", debounce(handleResize, 500));
    }, [containerRef]);

    return (
        <div ref={containerRef} style={{minWidth: "100%"}}>
            <VictoryChart theme={DataVizTheme} width={width} height={props.height} containerComponent={<VictoryContainer responsive={false} />} {...props}>
                {props.children}
            </VictoryChart>
        </div>
    )
}