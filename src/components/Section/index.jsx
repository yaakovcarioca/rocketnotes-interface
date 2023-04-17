import { Container } from "./styles";

export function Section({ title, children, ...rest }) {
    return (
        <Container>
            <h2>{title}</h2>
            {children}
        </Container>
    )
}