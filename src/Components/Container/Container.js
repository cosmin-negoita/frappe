import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div.attrs(props => ({
    size: props.size || 0,
    spacing: props.spacing || "0",
    cols: props.cols,
    noTopPadding: props.noTopPadding,
    limitHeight: props.limitHeight
}))`
    display: grid;
    grid-auto-rows: max-content;
    grid-template-columns: ${props => props.layout
        ? props.layout
        : (props.cols ?
            (props.cols === "max-content"
                ? "repeat(auto-fit, minmax(0, max-content))"
                : (props.cols === "auto"
                    ? "repeat(auto-fit, minmax(0, 1fr))"
                    : "repeat(" + props.cols + ", 1fr)"
                )
            )
            : "1fr"
        )
    };
    grid-gap: ${props => props.spacing ? "var(--su-" + props.spacing + ")" : "0"};
    padding: ${props => props.noHorizontalPadding
        ? "var(--su-" + props.size + ") 0"
        : (props.noVerticalPadding
            ? "0 var(--su-" + props.size + ")"
            : (props.noBottomPadding
                ? "var(--su-" + props.size + ") var(--su-" + props.size + ") 0 var(--su-" + props.size + ")"
                : (props.noTopPadding
                    ? "0 var(--su-" + props.size + ") var(--su-" + props.size + ") var(--su-" + props.size + ")"
                    : (props.size
                        ? "var(--su-" + props.size + ")"
                        : "0"
                    )
                )
            )
        )
    };
    height: ${props => props.limitHeight ? "max-content" : "auto"};
    ${props => props.alignItems && `
        align-items: ${props.alignItems};
    `}
    ${props => props.justifyItems && `
        justify-items: ${props.justifyItems};
    `}
    ${props => props.spaceBottom && `
        & > *:last-child {
            margin-bottom: var(--su-${props.size});
        }
    `}
    ${props => props.alignSelf && `
        align-self: ${props.alignSelf}
    `}
    ${props => props.justifySelf && `
        justify-self: ${props.justifySelf}
    `}
`;

// Container (inherited from Spacing.js) sizes: 10, 20, 30, 50, 100
// Container (inherited from Spacing.js) spacing: 10, 20, 30, 50, 100
// Container layout (columns): 2, 3, 4, auto, max-content
// Container utilities: limitHeight, noTopPadding

export default function Container(props) {
    return <StyledDiv className={props.className} spaceBottom={props.spaceBottom} noHorizontalPadding={props.noHorizontalPadding} noBottomPadding={props.noBottomPadding} justifySelf={props.justifySelf} alignSelf={props.alignSelf} justifyItems={props.justifyItems} alignItems={props.alignItems} layout={props.layout} cols={props.cols} spacing={props.spacing} size={props.size} noVerticalPadding={props.noVerticalPadding} noTopPadding={props.noTopPadding} limitHeight={props.limitHeight} height={props.height}>{props.children}</StyledDiv>
}