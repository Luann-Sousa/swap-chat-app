import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.ScrollView`
  width: 100%;
  flex: 1;
  /* padding: 14px; */
`;

export const ContainerMain = styled.View`
  width: 100%;
  flex: 1;
  padding: 14px;
`;

export const Title = styled.Text``;

export const WrapperSearchInput = styled.View`
  margin-top: 15px;
`;

export const WrapperCardUsers = styled.View`
  margin-top: 15px;
  width: 100%;

  flex-direction: row;
`;

export const WrapperCardConversas = styled.View``;

export const FlatListCard = styled(FlatList)``;
