//import "../../global.js";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Links, Content } from "./styles.js";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText/index.jsx";
import { api } from "../../services/api";

export function Details() {

  const [data, setData] = useState(null);

  const params = useParams();

  const navigate = useNavigate();

  async function handleDeleteNote() {
    const confirmDelete = window.confirm("Tem certeza que deseja deletar essa nota?");

    if (confirmDelete) {
      await api.delete(`/notes/${params.id}`);
      navigate(-1);
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }
    fetchNote();
  }, [])

  return (
    <Container>
      <Header />
      { data &&
        <main>
          <Content>

            <ButtonText 
            title="Excluir nota"
            onClick={handleDeleteNote}
            />

            <h1>{data.title}</h1>

            <p>{data.description}</p>

            {data.links && 
              <Section title="Links úteis">
                <Links>
                  {
                    data.links.map((link) => (
                      <li key={link.id}>
                        <a 
                        href={link.url} 
                        target="_blank">
                          {link.url}
                        </a>
                      </li>
                    ))
                  }
                </Links>
              </Section>
            }

            { data.tags && 
              <Section title="Marcadores">
                {
                  data.tags.map((tag) => (
                    <Tag 
                    key={String(tag.id)}
                    title={tag.name} 
                    />
                  ))
                }
              </Section>
            }

            <Button title="Voltar" to={-1} />

          </Content>
        </main>
      }
    </Container>
  )
}
