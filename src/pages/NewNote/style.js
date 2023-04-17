import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 100%;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas:
    "header"
    "content";

    > main {
        grid-area: content;
        overflow-y: auto;

        ::-webkit-scrollbar {
        width: 12px;
        }

        ::-webkit-scrollbar-thumb {
            background: ${({ theme }) => theme.COLORS.HIGHLIGHT_COLOR};
            border-radius: 10px;
        }

        ::-webkit-scrollbar-track {
            background: ${({ theme }) => theme.COLORS.GRAY_800};
            border-radius: 10px;
        }
    }

    .tags {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
`;

export const Form = styled.form`
    max-width: 550px;
    margin: 38px auto;

    > header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;

        margin-bottom: 36px;

        > a {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }

    > section {
        margin-top: 48px;
    }

    > a {
        margin: 34px 0 48px 0;
    }
`;

export const Textarea = styled.textarea`
        height: 150px;
        width: 100%;
        background-color: ${({ theme }) => theme.COLORS.GRAY_900};
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        padding: 20px;
        margin-top: 16px;
        text-align: justify;

        border: none;
        border-radius: 10px;

        overflow-y: auto;
        resize: none;

        ::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_700};
        }

        ::-webkit-scrollbar {
        width: 8px;
        }

        ::-webkit-scrollbar-thumb {
            background: ${({ theme }) => theme.COLORS.GRAY_800};
            border-radius: 10px;
        }

        ::-webkit-scrollbar-track {
            background: ${({ theme }) => theme.COLORS.GRAY_900};
            border-radius: 10px;
        }
`;