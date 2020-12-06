import React from "react";

import Image from "../Image/Image.js";

export default function Avatar(props) {
    return <Image src={props.src} width={props.size} radius="50%" />
}
