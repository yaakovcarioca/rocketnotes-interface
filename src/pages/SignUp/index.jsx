import { useState } from "react";
import { Background, Container, Form } from "./styles";
import { InputText } from "../../components/InputText";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

import { api } from "../../services/api";

import { FiUser, FiMail, FiLock } from 'react-icons/fi';
import { Link, useNavigate } from "react-router-dom";

export function SignUp() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleSignUp() {
        console.log(name, email, password)

        if(!name || !email || !password) {
            return alert("Preencha todos os campos para fazer seu cadastro.")
        }

        api.post("/users", {name, email, password})
        .then(() => {
            alert("Usuário cadastrado com sucesso!");
            navigate("/");
        })
        .catch(error => error.response ? alert(error.response.data.message) : alert("Não foi possível cadastrar."))

    }

    return (
        <Container>
            <Background />
            
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Crie sua conta</h2>

                <section>
                    <InputText 
                    type="text" 
                    placeholder="Nome" 
                    icon={ FiUser }
                    onChange={event => setName(event.target.value)}
                    />

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

                <Button title="Cadastrar" onClick={handleSignUp} />

                <Link to="/" className="back">
                    <ButtonText title="Voltar para o login" isActive />
                </Link>
            </Form>
        </Container>
    )
}