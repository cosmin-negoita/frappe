import React, {useState, useEffect, useRef} from "react";

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

export default function ResizerDiv(props) {
    const [width, setWidth] = useState(null);
    const ref = useRef();

    useEffect(() => {

    }, [ref]);

    return <div ref={ref}>{props.children}</div>
}