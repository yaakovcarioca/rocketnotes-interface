import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
    width: 100%;
    height: 56px;
    background-color: ${({ theme }) => theme.COLORS.HIGHLIGHT_COLOR};
    color: ${({ theme }) => theme.COLORS.GRAY_800};
    
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0 16px;
    margin-top: 32px;
    border-radius: 10px;
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.MEDIUM};

    &:disabled {
        opacity: 0.5;
    }
`;  