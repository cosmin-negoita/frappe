import React from "react";
import styled from "styled-components";

export const TableHead = styled.thead``;
export const TableHeader = styled.th``;
export const TableCell = styled.td``;
export const TableRow = styled.tr``;

export const StyledTable = styled.table`
    overflow: hidden;
    border-collapse: separate;
    border-spacing: 0;

    ${props => props.alternate && 
        `& ${TableRow}:nth-child(2n + 1) {
            background: var(--gray-1);
        }`
    }
    & ${TableHead} ${TableRow} {
        background: var(--gray-1);
    }
    & ${TableCell}, & ${TableHeader} {
        background: transparent;
        padding-top: ${props => "var(--su-" + props.size + ")"};
        padding-bottom: ${props => "var(--su-" + props.size + ")"};
        padding-left: ${props => "var(--su-" + props.size + ")"};
        padding-right: ${props => "var(--su-" + props.size + ")"};

        ${props => props.isFullWidth &&
            `padding-left: var(--su-${props.cellSize});
            padding-right: var(--su-${props.cellSize});`
        }
        ${props => props.hasBorders
            ? `border-top: 1px solid var(--gray-3);
              border-left: 1px solid var(--gray-3);`
            : `border-bottom: 1px solid var(--gray-3);`
        }
        text-align: ${props => props.textAlign};
        vertical-align: middle;
    }
    & ${TableHeader} {
        font-weight: 700;
    }
    ${props => props.hasBorders &&
        `border: 1px solid var(--gray-3);
        border-radius: var(--radius-outer);

        & ${TableRow}:first-child ${TableCell}, & ${TableRow}:first-child ${TableHeader} {
            border-top: 0;
        }
        & ${TableRow} ${TableCell}:first-child, & ${TableRow} ${TableHeader}:first-child {
            border-left: 0;
        }
        & ${TableRow} ${TableCell}:last-child, & ${TableRow} ${TableHeader}:last-child {
            border-right: 0;
        }
        & ${TableRow}:last-child ${TableCell}, & ${TableRow}:last-child ${TableHeader} {
            border-bottom: 0;
        }`
    }
    ${props => !props.hasBorders && 
        `& ${TableRow}:last-child ${TableCell} {
            border: 0;
        }
        & ${TableHead} ${TableRow} ${TableHeader} {
            border-top: 1px solid var(--gray-3);
        }`
    }
`;
export function Table(props) {
    return(
        <StyledTable isFullWidth={props.isFullWidth} cellSize={props.cellSize} size={props.size || "20"} textAlign={props.textAlign || "left"} hasBorders={props.hasBorders} alternate={props.alternate}>
            {props.children}
        </StyledTable>
    )
}

export default {Table, TableRow, TableCell, TableHeader, TableHead}