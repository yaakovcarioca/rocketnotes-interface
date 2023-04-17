import { useState } from "react";
import { Container, Form, Textarea } from "./style";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { NoteItem } from "../../components/NoteItem";
import { InputText } from "../../components/InputText";
import { Button } from "../../components/Button";

import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

export function NewNote() {
    
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const [links, setLinks] = useState([]);
    const [newLink, setNewLink] = useState("");

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    const navigate = useNavigate();

    function handleAddLinks() {
        const linkExists = links.filter(link => link === newLink);

        if(linkExists.length > 0) {
            setNewLink("");
            return alert(`O link "${newLink}" já foi cadastrado.`)
        } else {
            setLinks(prevLinks => [...prevLinks, newLink]); //prevLinks === links, que está sendo passado como parâmetro.
            setNewLink("");
        }
    }

    function handleDeleteLink(deleted) {
        setLinks(prevState => prevState.filter(link => link !== deleted))
    }

    function handleAddTags() {
        const TagExists = tags.filter(tag => tag === newTag);

        if(TagExists.length > 0) {
            setNewTag("");
            return alert(`A tag "${newTag}" já foi cadastrada.`)
        } else {
            setTags(prevTags => [...prevTags, newTag]);
            setNewTag("");
        }
    }

    function handleDeleteTag(deleted) {
        setTags(prevState => prevState.filter(tag => tag !== deleted))
    }

    async function handleNewNote() {
        if(!title) {
            return alert("Digite o título da nota.")
        }

        if(newLink) {
            return alert(`Você escreveu o link "${newLink}", mas esqueceu de adicioná-lo à sua lista de links. Clique no botão "+" para adicionar ou limpe o campo de inserção para continuar.`)
        }

        if(newTag) {
            return alert(`Você escreveu a tag "${newTag}", mas esqueceu de adicioná-la à sua lista de tags. Clique no botão "+" para adicionar ou limpe o campo de inserção para continuar.`)
        }

        if(!description) {
            confirm("Você não fez nenhum observação em sua nota. Deseja salvar assim mesmo?")
        }

        await api.post("/notes", {
            title,
            description,
            links,
            tags
        });

        alert("Nota cadastrada com sucesso!");
        navigate(-1)
    }
   

    return (
        <Container>
            <Header />

            <main>
                <Form>

                    <header>
                        <h1>Criar nota</h1>
                        <Link to={-1}>
                            voltar
                        </Link>
                    </header>

                    <InputText 
                    placeholder="Título"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                    />

                    <Textarea 
                    placeholder="Observações"
                    value={description}
                    onChange={event => setDescription(event.target.value)}
                    />

                    <Section title="Links úteis">
                        {
                            links.map((link, index) => (
                                <NoteItem
                                key={String(index)}
                                value={link}
                                onClick={() => handleDeleteLink(link)}
                                />
                            ))
                        }

                        <NoteItem 
                        isNew 
                        placeholder="Novo link"
                        value={newLink}
                        onChange={event => setNewLink(event.target.value)}
                        onClick={handleAddLinks}
                        />
                    </Section>

                    <Section title="Marcadores">
                        <div className="tags">
                            {
                                tags.map((tag, index) => (
                                    <NoteItem 
                                    key={String(index)}
                                    value={tag}
                                    onClick={() => handleDeleteTag(tag)}
                                    />
                                ))
                            }
                            <NoteItem 
                            isNew 
                            placeholder="Nova tag"
                            value={newTag}
                            onChange={event => setNewTag(event.target.value)}
                            onClick={handleAddTags}
                            />
                        </div>
                    </Section>

                    <Button 
                    title="Salvar" 
                    onClick={handleNewNote}
                    />

                </Form>
            </main>
        </Container>
    )
}