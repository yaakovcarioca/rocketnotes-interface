import { useState } from "react";
import { Container, Header, Form, Avatar } from "./styles";
import { InputText } from "../../components/InputText"; 
import { Button } from "../../components/Button";
import { api } from "../../services/api";
import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from "react-icons/fi";
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

export function Profile() {

    const { user, updateProfile } = useAuth();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const avatarURL = user.avatar ? `${api.defaults.baseURL}files/${user.avatar}` : avatarPlaceholder;

    const [avatar, setAvatar] = useState(avatarURL);
    const [avatarFile, setAvatarFile] = useState(null);

    async function handleUpdateProfile() {
        const updated = {
            name,
            email,
            password: newPassword,
            old_password: oldPassword
        }

        const userUpdated = Object.assign(user, updated);
        await updateProfile({ user: userUpdated, avatarFile });
    }

    function handleChangeAvatar(event) {
        const file = event.target.files[0];
        setAvatarFile(file)

        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview);

        console.log(file, imagePreview)
    }

    return (
        <Container>
            <Header>
                <Link to={-1}>
                    <FiArrowLeft />
                </Link>
            </Header>

            <Avatar>
                <img 
                src={avatar} 
                alt={user.name} 
                />

                <label htmlFor="avatar">
                    <FiCamera size={20} />

                    <input 
                    id="avatar" 
                    type="file"
                    onChange={handleChangeAvatar}
                    />
                    
                </label>
            </Avatar>

            <Form>
                <InputText 
                type="text" 
                value={name}
                onChange={event => setName(event.target.value)}
                icon={ FiUser } />

                <InputText 
                type="text" 
                value={email} 
                onChange={event => setEmail(event.target.value)}
                icon={ FiMail } />

                <InputText 
                type="password" 
                id="currentPassword" 
                placeholder="Senha atual"
                onChange={event => setOldPassword(event.target.value)}
                icon={ FiLock }/>

                <InputText 
                type="password" 
                id="newPassword" 
                placeholder="Nova senha" 
                onChange={event => setNewPassword(event.target.value)}
                icon={ FiLock } />
            
                <Button title="Salvar" onClick={handleUpdateProfile} />
            </Form>
            
        </Container>
    )
}