import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';


export type ButtonTypeStyleProps = 'PRIMARY' | 'SECUNDERY';

type Props = {
  type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity)<Props>`
flex: 1;

min-height: 56px;
max-height: 56px;

background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};

border-radius: 6px;

align-items: center;
justify-content: center;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.COLORS.WHITE};
  font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
  font-weight: ${({theme}) => theme.FONT_FAMILY.BOLD};

`;