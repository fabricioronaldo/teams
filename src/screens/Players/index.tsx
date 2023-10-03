import { Header } from '@components/Header';
import { Container, Form } from './styles';
import { Highlight } from '@components/Highlight';
import { ButtonIcon } from '@components/ButtonIcon';
import { Input } from '@components/Input';
import { Filter } from '@components/Fliter';


export function Players() {
  return (

    <Container>
      <Header showBackButton />
      <Highlight
        title="Nome da Turma"
        subtitle="adicione a galera e separe os times"
      />
      <Form>
        <Input
          placeholder="Nome da pessoa"
          autoCorrect={false}
        />
        <ButtonIcon
          icon="add"
        />
      </Form>
      <Filter
        title="Turma A"
         

      />
    </Container>

  );
}