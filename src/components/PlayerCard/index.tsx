import { Container, Icon, Name } from './styles';
import { ButtonIcon } from '@components/ButtonIcon';

type Props = {
  name: string;
  onRemove: () => void;
}

export function PalyerCard({name, onRemove}: Props){
  return(
    <Container>
      <Icon />
      <Name>
        {name}
      </Name>
      <ButtonIcon 
        icon="close"
        type="SECUNDARY"
        onPress={onRemove}
      />
    </Container>
  );
}