import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles";
import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

export function Header() {
    const { user, signOut } = useAuth();

    const avatarURL = user.avatar ? `${api.defaults.baseURL}files/${user.avatar}` : avatarPlaceholder;

    function handleSignOut() {
        const confirmSignOut = confirm('Tem certeza que deseja sair?');

        return confirmSignOut ? signOut() : null;
    }

    return (
        <Container>
            <Profile to="/profile">
                <img 
                src={avatarURL} 
                alt={user.name}
                />

                <div>
                    <span>Bem-vindo(a)!</span>
                    <strong>{user.name}</strong>
                </div>
            </Profile>

            <Logout onClick={handleSignOut}>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}