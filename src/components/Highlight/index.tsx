import { Container, Title, Subititle } from "./styles"

type Props = {
  title: string;
  subtitle: string;
}

export function Highlight({ title, subtitle }: Props) {
  return (
    <Container>
      <Title>
        {title}
      </Title>
      <Subititle>
        {subtitle}
      </Subititle>
    </Container>
  )
}