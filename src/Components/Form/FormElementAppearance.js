import styled, {css} from "styled-components";

const StyledFormField = styled.div`
    display: grid;
    grid-gap: var(--su-5);
`;

const FormElementAppearance = css`
    ${props => props.size === "large" && `
        padding: 13px;
        font-size: var(--scale2);
    `}
    ${props => props.size === "small" && `
        padding: 6px;
        font-size: var(--scale-1);
    `}
    ${props => props.size === "normal" && `
        padding: 11px;
        font-size: var(--scale1);
    `}
    line-height: 16px;
    color: var(--gray-5);
    background-color: var(--gray-0);
    border: 1px solid var(--gray-3);
    outline: 0;
    border-radius: var(--radius-inner);
    transition: all 0.2s ease-in;

    &:hover {
        border-color: var(--brand);
    }
    &:focus {
        border-color: var(--brand);
        box-shadow: 0 0 0 4px var(--brand-light);
    }
    &:disabled {
        color: var(--gray-4);
        background-color: var(--gray-1);
        border-color: var(--gray-2);
        cursor: not-allowed;
    }
    &::placeholder {
        color: var(--gray-4);
    }
    ${props => props.isValid === false && `
        background-color: var(--error-bg);
        border-color: var(--error);

        &:hover, &:focus {
            background-color: var(--gray-0);
            border-color: var(--error);
        }
        &:focus {
            box-shadow: 0 0 0 4px var(--error-bg);
        }
    `}
`;
export {StyledFormField, FormElementAppearance};