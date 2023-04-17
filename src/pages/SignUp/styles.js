import styled from "styled-components";
import backgroundImg from '../../assets/picture_sign_in.png';

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
    opacity: 0.3;
`;

export const Form = styled.form`
    padding: 0 136px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;

    > h1 {
        font-size: 48px;
        line-height: 63px;
        color: ${({ theme }) => theme.COLORS.HIGHLIGHT_COLOR};
    }

    > p {
        font-size: ${({ theme }) => theme.FONT_SIZE.SM};
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    > h2 {
        font-size: ${({ theme }) => theme.FONT_SIZE.XXL};
        margin-top: 48px;
        margin-bottom: 48px;
    }

    > section {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-bottom: 16px;
    }

    .back {
        margin-top: 80px;
    }
`;