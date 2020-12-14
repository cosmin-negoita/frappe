import React, {useEffect} from "react";

import Container from "./Components/Container/Container.js";
import Card from "./Components/Card/Card.js";
import {LabelText, BodyText, SubHeadingText, TitleText} from "./Components/Typography/Typography.js";
import { getColor } from "./Components/Colors.js";

export default function ViewColors(props) {
    useEffect(() => {
        document.title = "Frappe - Colors";
    });
    return (<>
        <Container size="50">
            <TitleText>Colors</TitleText>
        </Container>
        <Container size="50" noVerticalPadding>
            <Container spacing="30" cols="4">
                <Card type="box" spacing="10" size="30">
                    <SubHeadingText>Gray</SubHeadingText>
                    <div style={{background: getColor("--gray-0"), padding: "20px", borderRadius: "5px"}}>
                        <BodyText>--gray-0</BodyText>
                        <LabelText>{getColor("--gray-0")}</LabelText>
                    </div>
                    <div style={{background: getColor("--gray-1"), padding: "20px", borderRadius: "5px"}}>
                        <BodyText>--gray-1</BodyText>
                        <LabelText>{getColor("--gray-1")}</LabelText>
                    </div>
                    <div style={{background: getColor("--gray-2"), padding: "20px", borderRadius: "5px"}}>
                        <BodyText>--gray-2</BodyText>
                        <LabelText>{getColor("--gray-2")}</LabelText>
                    </div>
                    <div style={{background: getColor("--gray-3"), padding: "20px", borderRadius: "5px"}}>
                        <BodyText>--gray-3</BodyText>
                        <LabelText>{getColor("--gray-3")}</LabelText>
                    </div>
                    <div style={{background: getColor("--gray-4"), padding: "20px", borderRadius: "5px", color: "#fff"}}>
                        <BodyText>--gray-4</BodyText>
                        <LabelText>{getColor("--gray-4")}</LabelText>
                    </div>
                    <div style={{background: getColor("--gray-5"), padding: "20px", borderRadius: "5px", color: "#fff"}}>
                        <BodyText>--gray-5</BodyText>
                        <LabelText>{getColor("--gray-5")}</LabelText>
                    </div>
                </Card>
                <Card type="box" spacing="10" size="30">
                    <SubHeadingText>Brand</SubHeadingText>
                    <div style={{background: getColor("--brand-light"), padding: "20px", borderRadius: "5px"}}>
                        <BodyText>--brand-light</BodyText>
                        <LabelText>{getColor("--brand-light")}</LabelText>
                    </div>
                    <div style={{background: getColor("--brand"), padding: "20px", borderRadius: "5px", color: "#fff"}}>
                        <BodyText>--brand</BodyText>
                        <LabelText>{getColor("--brand")}</LabelText>
                    </div>
                    <div style={{background: getColor("--brand-dark"), padding: "20px", borderRadius: "5px", color: "#fff"}}>
                        <BodyText>--brand-dark</BodyText>
                        <LabelText>{getColor("--brand-dark")}</LabelText>
                    </div>
                </Card>
                <Card type="box" spacing="10" size="30">
                    <SubHeadingText>Error</SubHeadingText>
                    <div style={{background: getColor("--error-bg"), padding: "20px", borderRadius: "5px"}}>
                        <BodyText>--error-bg</BodyText>
                        <LabelText>{getColor("--error-bg")}</LabelText>
                    </div>
                    <div style={{background: getColor("--error"), padding: "20px", borderRadius: "5px", color: "#fff"}}>
                        <BodyText>--error</BodyText>
                        <LabelText>{getColor("--error")}</LabelText>
                    </div>
                </Card>
                <Card type="box" spacing="10" size="30">
                    <SubHeadingText>Graph Colors</SubHeadingText>
                    <div style={{background: getColor("--blue"), padding: "20px", borderRadius: "5px", color: "#fff"}}>
                        <BodyText>--blue</BodyText>
                        <LabelText>{getColor("--blue")}</LabelText>
                    </div>
                    <div style={{background: getColor("--cyan"), padding: "20px", borderRadius: "5px"}}>
                        <BodyText>--cyan</BodyText>
                        <LabelText>{getColor("--cyan")}</LabelText>
                    </div>
                    <div style={{background: getColor("--teal"), padding: "20px", borderRadius: "5px"}}>
                        <BodyText>--teal</BodyText>
                        <LabelText>{getColor("--teal")}</LabelText>
                    </div>
                    <div style={{background: getColor("--green"), padding: "20px", borderRadius: "5px"}}>
                        <BodyText>--green</BodyText>
                        <LabelText>{getColor("--green")}</LabelText>
                    </div>
                    <div style={{background: getColor("--yellow"), padding: "20px", borderRadius: "5px"}}>
                        <BodyText>--yellow</BodyText>
                        <LabelText>{getColor("--yellow")}</LabelText>
                    </div>
                    <div style={{background: getColor("--orange"), padding: "20px", borderRadius: "5px", color: "#fff"}}>
                        <BodyText>--orange</BodyText>
                        <LabelText>{getColor("--orange")}</LabelText>
                    </div>
                    <div style={{background: getColor("--pink"), padding: "20px", borderRadius: "5px", color: "#fff"}}>
                        <BodyText>--pink</BodyText>
                        <LabelText>{getColor("--pink")}</LabelText>
                    </div>
                </Card>
            </Container>
        </Container>
    </>)
}