import styled from "styled-components";

export const Container = styled.button`
    width: fit-content;
    border: none;
    background: none;
    font-size: ${({ theme }) => theme.FONT_SIZE.MD};
    color: ${({ theme, isActive }) => isActive ? theme.COLORS.HIGHLIGHT_COLOR : theme.COLORS.GRAY_300};
`;