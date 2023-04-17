import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    margin-bottom: 24px;

    > h2 {
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_700};
        margin-bottom: 28px;
        padding-bottom: 16px;

        font-size: ${({ theme }) => theme.FONT_SIZE.XL};
        font-weight: ${({ theme }) => theme.FONT_WEIGHT.REGULAR};
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
`;