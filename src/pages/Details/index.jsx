import { Container, Links, Content } from "./styles";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";

export function Details(){

  return(
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title="Excluir Nota" />

          <h1>
            Introdução ao React
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis porro adipisci omnis 
            reprehenderit maiores non quo atque, corporis odit tenetur? Quis soluta explicabo autem 
            numquam sint itaque cum voluptatum expedita.
          </p>

          <Section title="Links úteis">
            <Links>
              <li><a href="#">https://rocketseat.com.br</a></li>
              <li><a href="#">https://rocketseat.com.br</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="Express"/>
            <Tag title="Node" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  )
}