import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 30px;
  width: 100%;
  height: 80px;

  /* border: 1px solid red; */

  flex-direction: column;
  /* align-items: center; */
  justify-content: space-around;
`;
export const Title = styled.Text`
  color: #000;
`;

export const WrapperMesserTo = styled.View`
  margin-bottom: 10px;
`;

export const WrapperMessageMe = styled.View`
  margin-bottom: 20px;
  justify-content: flex-end;
  align-items: flex-end;
`;
export const Main = styled.View`
  width: 100%;
  margin-top: 60px;
`;

export const WrapperButtonSend = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 6px;
`;

export const WrapperContent = styled.View`
  width: 100%;
  flex-direction: column;
  align-items: center;
`;
export const WrapperInputMessage = styled.View`
  width: 100%;

  flex: 1;

  padding: 12px;
`;

export const ButtonIcon = styled.TouchableOpacity`
  margin-bottom: 0px;
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    marginBottom: 50,
    padding: 24,
  },
  showsVerticalScrollIndicator: false,
})``;

export const LineMessageMe = styled.View`
  margin: 10px 0 10px 0;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
`;
export const BoxImage = styled.View``;
export const BoxMessageMe = styled.View`
  background: #95989a;
  padding: 15px;
  width: 60%;
  border-radius: 8px;
  margin-right: 0;
  position: relative;
`;
export const BoxMessageMeText = styled.Text`
  line-height: 20px;
  font-size: 14px;
  color: #ffffff;
`;

export const LineMessageHe = styled.View`
  margin: 10px 0 10px 0;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
export const BoxMessageHe = styled.View`
  background: #dddddd;
  padding: 15px;
  width: 60%;
  border-radius: 8px;
  margin-left: 0px;
`;
export const BoxMessageHeText = styled.Text`
  line-height: 20px;
  font-size: 14px;
  color: #707070;
`;
