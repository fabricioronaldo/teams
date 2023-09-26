import { UserList } from 'phosphor-react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Message = styled.Text`
  color: ${({theme}) => theme.COLORS.GRAY_300};
  font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
`;

export const ListEmptyIcon = styled(UserList).attrs(({theme})=>({
  size: 80,
  color: theme.COLORS.GRAY_300
}))``;