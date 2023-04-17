import styled from "styled-components";

export const Container = styled.span`
    padding: 5px 12px;
    width: fit-content;
    margin-right: 6px;

    background: ${({ theme }) => theme.COLORS.HIGHLIGHT_COLOR};
    border-radius: 5px;

    color: ${({ theme }) => theme.COLORS.GRAY_900};
    font-size: ${({ theme }) => theme.FONT_SIZE.XS};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
`;