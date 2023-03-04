import { RiShutDownLine } from 'react-icons/ri';
import { Container, Profile, Logout } from "./styles";

export function Header() {
    return(
        <Container>
            <Profile>
                <img src="https://github.com/dougdbp.png"
                alt="Foto do Usuário" 
                />
                <div>
                    <span>Bem Vindo(a),</span>
                    <strong>Douglas BP</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}