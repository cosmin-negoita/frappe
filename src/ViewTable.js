import React, {useEffect} from "react";
import styled, {css} from "styled-components";

import Container from "./Components/Container/Container.js";
import Card from "./Components/Card/Card.js";
import {Table, TableRow, TableCell, TableHeader, TableHead} from "./Components/Table/Table.js";
import {LabelText, SmallBodyText, BodyText, BigBodyText, SubHeadingText, HeadingText, SubTitleText, TitleText} from "./Components/Typography/Typography.js";
import Icon from "./Components/Icons/Icon.js";
import Image from "./Components/Image/Image.js";
import Avatar from "./Components/Avatar/Avatar.js";

export default function ViewTable() {

    useEffect(() => {
        document.title = "Frappe - Data Tables";
    });

    return (<>
        <Container size="50">
            <TitleText>Data Tables</TitleText>
        </Container>
        <Container size="50" spacing="30" noTopPadding>
            <Card type="box" size="30" spacing="30">
                <SubHeadingText>Without Borders</SubHeadingText>
                <Container cols="2" spacing="30">
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableHeader isHeader>Name</TableHeader>
                                <TableHeader isHeader>Email</TableHeader>
                                <TableHeader isHeader>Location</TableHeader>
                            </TableRow>
                        </TableHead>
                        <TableRow>
                            <TableCell>Cosmin Negoita</TableCell>
                            <TableCell>fabcos94@gmail.com</TableCell>
                            <TableCell>Craiova, RO</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Andrei Coman</TableCell>
                            <TableCell>andreicoman93@gmail.com</TableCell>
                            <TableCell>Craiova, RO</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Andrei Coman</TableCell>
                            <TableCell>andreicoman93@gmail.com</TableCell>
                            <TableCell>Craiova, RO</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Andrei Coman</TableCell>
                            <TableCell>andreicoman93@gmail.com</TableCell>
                            <TableCell>Craiova, RO</TableCell>
                        </TableRow>
                    </Table>
                    <Table alternate>
                    <TableHead>
                        <TableRow>
                            <TableHeader isHeader>Name</TableHeader>
                            <TableHeader isHeader>Email</TableHeader>
                            <TableHeader isHeader>Location</TableHeader>
                        </TableRow>
                    </TableHead>
                    <TableRow>
                        <TableCell>Cosmin Negoita</TableCell>
                        <TableCell>fabcos94@gmail.com</TableCell>
                        <TableCell>Craiova, RO</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Andrei Coman</TableCell>
                        <TableCell>andreicoman93@gmail.com</TableCell>
                        <TableCell>Craiova, RO</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Andrei Coman</TableCell>
                        <TableCell>andreicoman93@gmail.com</TableCell>
                        <TableCell>Craiova, RO</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Andrei Coman</TableCell>
                        <TableCell>andreicoman93@gmail.com</TableCell>
                        <TableCell>Craiova, RO</TableCell>
                    </TableRow>
                </Table>
                </Container>
            </Card>
            <Card type="box" size="30" spacing="30">
                <SubHeadingText>With Borders</SubHeadingText>
                <Container cols="2" spacing="30">
                    <Table hasBorders>
                        <TableHead>
                            <TableRow>
                                <TableHeader isHeader>Name</TableHeader>
                                <TableHeader isHeader>Email</TableHeader>
                                <TableHeader isHeader>Location</TableHeader>
                            </TableRow>
                        </TableHead>
                        <TableRow>
                            <TableCell>Cosmin Negoita</TableCell>
                            <TableCell>fabcos94@gmail.com</TableCell>
                            <TableCell>Craiova, RO</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Andrei Coman</TableCell>
                            <TableCell>andreicoman93@gmail.com</TableCell>
                            <TableCell>Craiova, RO</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Andrei Coman</TableCell>
                            <TableCell>andreicoman93@gmail.com</TableCell>
                            <TableCell>Craiova, RO</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Andrei Coman</TableCell>
                            <TableCell>andreicoman93@gmail.com</TableCell>
                            <TableCell>Craiova, RO</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Andrei Coman</TableCell>
                            <TableCell>andreicoman93@gmail.com</TableCell>
                            <TableCell>Craiova, RO</TableCell>
                        </TableRow>
                    </Table>
                    <Table hasBorders alternate>
                        <TableHead>
                            <TableRow>
                                <TableHeader isHeader>Name</TableHeader>
                                <TableHeader isHeader>Email</TableHeader>
                                <TableHeader isHeader>Location</TableHeader>
                            </TableRow>
                        </TableHead>
                        <TableRow>
                            <TableCell>Cosmin Negoita</TableCell>
                            <TableCell>fabcos94@gmail.com</TableCell>
                            <TableCell>Craiova, RO</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Andrei Coman</TableCell>
                            <TableCell>andreicoman93@gmail.com</TableCell>
                            <TableCell>Craiova, RO</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Andrei Coman</TableCell>
                            <TableCell>andreicoman93@gmail.com</TableCell>
                            <TableCell>Craiova, RO</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Andrei Coman</TableCell>
                            <TableCell>andreicoman93@gmail.com</TableCell>
                            <TableCell>Craiova, RO</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Andrei Coman</TableCell>
                            <TableCell>andreicoman93@gmail.com</TableCell>
                            <TableCell>Craiova, RO</TableCell>
                        </TableRow>
                    </Table>
                </Container>
            </Card>
        </Container>
    </>);
}