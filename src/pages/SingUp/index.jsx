import { useState } from "react";
import { Container, Form, Background } from "./styles";
import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Link } from "react-router-dom";

export function SingUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSingUp(){
        console.log(name, email, password)
    }

    return (
        <Container>

            <Background />

            <Form>

                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Crie sua conta</h2>

                <Input 
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                    onChange={e => setName(e.target.value)}
                />

                <Input 
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)}
                />
                
                <Input 
                    placeholder="Senha"
                    type="text"
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}
                />

                <Button title="Cadastrar" onClick={handleSingUp} />

                <Link to="/">
                    Voltar para login
                </Link>

            </Form>

        </Container>
    );
}