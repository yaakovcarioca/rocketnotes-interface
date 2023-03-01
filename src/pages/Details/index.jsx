import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Button } from "../../components/button";

export function Details(){

  return(
    <Container>
      <Header />
      <Button title="Voltar" />
    </Container>
  )
}