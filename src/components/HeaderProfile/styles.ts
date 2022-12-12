import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 30px;
  width: 100%;
  height: 80px;

  /* border: 1px solid red; */

  flex-direction: row;
  /* align-items: center; */
  justify-content: space-around;
`;

export const WrapperHeader = styled.View`
  margin-top: 10px;
  width: 250px;
  height: 60px;

  flex-direction: row;
  align-items: center;

  margin-right: 10px;
  position: relative;
`;

export const WrapperHeaderIcon = styled.View`
  margin-top: 10px;
  width: 100px;
  height: 60px;

  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
export const Title = styled.Text`
  font-family: 'Roboto';

  font-weight: 900;
  font-size: 24px;
  color: #403d3d;
  margin-left: 20px;
`;

export const ButtonIconPhoto = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
`;

export const ButtonIconPencil = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
`;

export const ButtonOnline = styled.TouchableOpacity`
  width: 15px;
  height: 15px;

  border-radius: 7px;

  background-color: #7df420;
  position: absolute;
  margin-left: 42px;
  margin-top: 52px;
`;
