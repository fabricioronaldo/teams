import {Container, ListEmptyIcon, Message} from './styles';

type Props = {
  message:string;
}

export function ListEmpty({message}: Props){

  return(
    <Container>
      <ListEmptyIcon />
      <Message>
        {message}
      </Message>
    </Container>

  );

}



