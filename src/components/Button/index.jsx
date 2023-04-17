import { Container } from "./styles";

export function Button({ title, loading=false, ...rest }) {
    return (
        <Container 
        type="button"
        disabled={loading} //desabilita o botão se "Loading" for true.
        {...rest}
        >
            { loading ? 'Carregando...' : title}
        </Container>
    )
}