import styled from "styled-components";

const StyledPage = styled.div`
    height: 100vh;
    overflow: hidden;

    .scrollableParent {
        height: auto;
        overflow: hidden;
    }

    .scrollable {
        height: 100vh;
        overflow: auto;
    }
`;
export default StyledPage