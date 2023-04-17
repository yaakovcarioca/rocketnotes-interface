import { useState } from "react";
import { Background, Container, Form } from "./styles";
import { InputText } from "../../components/InputText";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

import { useAuth } from "../../hooks/auth";

import { FiMail, FiLock } from 'react-icons/fi';
import { Link, useNavigate } from "react-router-dom";

export function SignIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const { signIn } = useAuth();

    function handleSignIn() {
        if(!email || !password) {
            return alert('É necessário informar e-mail e senha para logar.');
        }

        signIn({ email, password })
    }

    return (
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Faça seu login</h2>

                <section>
                    <InputText 
                    type="text" 
                    placeholder="E-mail" 
                    icon={ FiMail }
                    onChange={event => setEmail(event.target.value)}
                    />

                    <InputText 
                    type="password" 
                    placeholder="Senha" 
                    icon={ FiLock } 
                    onChange={event => setPassword(event.target.value)}
                    />
                </section>

                <Button title="Entrar" onClick={handleSignIn} />

                <Link to="/register" className="back">
                    <ButtonText title="Criar conta" isActive />
                </Link>
            </Form>

            <Background />
        </Container>
    )
}