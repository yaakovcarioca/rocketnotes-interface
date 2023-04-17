import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
    grid-area: header;
    height: 105px;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_700};

    display: flex;
    justify-content: space-between;

    padding: 0 80px;
`;

export const Profile = styled(Link)`
    display: flex;
    align-items: center;
    gap: 16px;

    > img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        object-fit: cover;
    }

    > div {
        display: flex;
        flex-direction: column;
        line-height: 24px;

        span {
            font-size: 14px;
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }

        strong {
            font-size: 18px;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }
    }
`;

export const Logout = styled.button`
    margin: auto 0;
    border: none;
    background: none;

    > svg {
        font-size: 36px;
        color: ${({ theme }) => theme. COLORS.GRAY_300};
        transition: color .3s;
    }

    > svg:hover {
        color: ${({ theme }) => theme. COLORS.GRAY_100};
    }
`