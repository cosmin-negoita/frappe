import styled from "styled-components";

const StyledPage = styled.div`
    height: 100vh;
    overflow: hidden;

    .scrollableParent {
        height: auto;
        overflow: hidden;
    }

    .scrollable {
        top: 0;
        height: 100vh;
        overflow: auto;
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
    .scrollable::-webkit-scrollbar {
        display: none;
    }
`;

export default StyledPage