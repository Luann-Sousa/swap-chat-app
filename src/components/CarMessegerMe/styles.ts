import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 30px;
  width: 100%;
  height: 80px;

  /* border: 1px solid red; */

  flex-direction: row;
  /* align-items: center; */
  justify-content: space-around;
  padding: 12px;
`;

export const ContainerMessege = styled.ScrollView`
  margin-top: 30px;
  width: 100%;
  height: 60px;

  border-radius: 8px;
  /* border: 1px solid red; */

  background-color: ${({ theme }) => theme.colors.card_messeger};
  padding: 8px;
`;
export const Title = styled.Text``;
