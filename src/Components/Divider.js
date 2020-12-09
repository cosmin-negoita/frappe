import styled from "styled-components";

const Divider = styled.div.attrs(props => ({
    height: props.height || "1px"
}))`
    background-color: var(--gray-2);
    width: 100%;
    height: ${props => props.height};
`;

export default Divider