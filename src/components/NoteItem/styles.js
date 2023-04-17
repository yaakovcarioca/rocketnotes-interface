import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 0 16px;
    margin-bottom: 8px;
    border-radius: 10px;

    background-color: 
    ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.GRAY_700};

    border: ${({ theme, isNew }) => isNew ? `3px solid ${theme.COLORS.GRAY_500}` : "none"};

    border-style: ${({ theme, isNew }) => isNew ? `dashed` : "none"};

    > input {
        height: 56px;
        width: 100%;
        padding: 10px;
        background: transparent;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        border: none;

        ::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_500};
        }
    }

    > button {
        background: transparent;
        border: none;
        
        > svg {
            color: ${({ theme, isNew }) => isNew ? theme.COLORS.HIGHLIGHT_COLOR : "red"};
        }
    }
`;