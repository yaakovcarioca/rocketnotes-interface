import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.GRAY_900};
    border-radius: 10px;
    outline: 2px ${({ theme }) => theme.COLORS.GRAY_300};

    > input {
        border: none;
        height: 56px;
        width: 100%;
        padding: 16px;

        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-size: ${({ theme }) => theme.FONT_SIZE.MD};
        line-height: 24px;
        background-color: transparent;
        outline: none;

        ::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_700};
        }
    }

    > svg {
        margin-left: 16px;
        color: ${({ theme }) => theme.COLORS.GRAY_700};
    }
`;