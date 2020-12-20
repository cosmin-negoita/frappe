import styled from "styled-components";
import {CSSTransition} from "react-transition-group";

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
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
    .scrollable::-webkit-scrollbar {
        display: none;
    }
`;

export default StyledPage