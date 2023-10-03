import styled from 'styled-components/native';
import {UsersThree} from 'phosphor-react-native';

export const Container = styled.View`
  width: 100%;
  height: 56px;

  flex-direction: row;
  align-items: center;

  background-color: ${({theme}) => theme.COLORS.GRAY_500};
  
  border-radius: 6px;
  margin-bottom: 16px;
`;

export const Name = styled.Text`
  flex: 1;

  color: ${({theme}) => theme.COLORS.GRAY_200};
  font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
  font-weight: ${({theme}) => theme.FONT_FAMILY.REGULAR};
`;

export const Icon = styled(UsersThree).attrs(({ theme })=>({
  color: theme.COLORS.GRAY_200,
  size: 24,
}))`
  margin-left: 16px;
  margin-right: 10px;
`;