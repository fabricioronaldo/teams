import { Highlight } from "@components/Highlight";
import { Header } from "@components/Header";
import { Container, Title } from "./styles";
import { GroupCard } from "@components/GroupCard";

export function Group() {
  return (
    <Container>
      <Header />
      <Highlight 
        title="Turma"
        subtitle="Jogue com a sua" />
        <GroupCard title="Turma de Araruma" />
        <GroupCard title="Turma de Cabo Frio" />
    </Container>
    
  )
}