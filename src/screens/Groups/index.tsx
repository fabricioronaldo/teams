import { Highlight } from "@components/Highlight";
import { Header } from "@components/Header";
import { Container, Title } from "./styles";

export function Group() {
  return (
    <Container>
      <Header />
      <Highlight 
        title="Turma"
        subtitle="Jogue com a sua" />
    </Container>
    
  )
}