import { useState, useEffect } from "react";
import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';
import { InputText } from "../../components/InputText";
import { Card } from "../../components/Card";
import { FiPlus, FiSearch } from 'react-icons/fi';

import { api } from "../../services/api";

export function Home() {

    const [search, setSearch] = useState("");
    const [notes, setNotes] = useState([])
    const [tags, setTags] = useState([]);
    const [tagSelected, setTagSelected] = useState([]);

    function handleTagSelected(tagName) {
        if (tagName === "all") {
            return setTagSelected([]);
        }
        const alreadySelected = tagSelected.includes(tagName);

        if(alreadySelected) {
            const filteredTags = tagSelected.filter(tag => tag !== tagName);
            setTagSelected(filteredTags);

        } else {
            setTagSelected(prevState => [...prevState, tagName]);
        }
    }

    useEffect(() => { // o useEffect não aceita async/await. Por isso é necessário criar uma outra função.
        async function fetchTags() {
            const response = await api.get("/tags");
            setTags(response.data);
        }

        fetchTags()
    }, [])

    useEffect(() => {
        async function fetchNotes() {
            const response = await api.get(`/notes?title=${search}&tags=${tagSelected}`);
            setNotes(response.data);
        }

        fetchNotes();
    }, [tagSelected, search])


    return (
        <Container>
            <Brand>
            <h1>Rocketnotes</h1>
            </Brand>

            <Header />

            <Menu>
                <li>
                    <ButtonText 
                    title="Todas" 
                    onClick={() => handleTagSelected("all")}
                    isActive={tagSelected.length === 0}
                    />
                </li>
                {
                    tags && tags.map(tag => (
                        <li key={String(tag.id)}>
                            <ButtonText 
                            title={tag.name}
                            onClick={() => handleTagSelected(tag.name)}
                            isActive={tagSelected.includes(tag.name)}
                            />
                        </li>
                    ))
                }
            </Menu>

            <Search>
                <InputText 
                placeholder="Pesquisar por título" 
                icon={FiSearch}
                onChange={e => setSearch(e.target.value)}
                />
            </Search>

            <Content>
                <Section title="Minhas notas"></Section>

                {
                    notes.map(note => (
                        <Card 
                        key={note.id}
                        to={`/details/${note.id}`}
                        data={note}
                        />
                    ))
                }

            </Content>

            <NewNote to="/new-note">
                <FiPlus />
                <p>Criar nota</p>
            </NewNote>

        </Container>
    )
}