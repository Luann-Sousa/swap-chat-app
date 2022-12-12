import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const ImageHeader = styled.Image`
  width: 420px;
  height: 179px;
`;

export const Main = styled.View`
  width: 100%;

  padding: 24px;
`;

export const WrapperMain = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_robot_bold};
  color: ${({ theme }) => theme.colors.title};
  font-size: 24px;

  margin-bottom: 32px;
  margin-top: -40px;
  text-align: center;
`;

export const WrapperLogo = styled.View`
  width: 100%;

  align-items: center;
  justify-content: center;

  margin-bottom: 62px;
`;

export const WrapperInput = styled.View`
  width: 100%;
`;
export const Input = styled.TextInput`
  width: 100%;
  height: 50px;

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;

  padding: 0px 0px 0px 16px;
  margin-bottom: 20px;
`;

export const WrapperFotterButton = styled.View`
  margin-bottom: 10px;
`;
export const WrapperFotterForgetPassword = styled.TouchableOpacity`
  width: 100%;

  align-items: center;
  justify-content: center;
`;

export const TextForgerPassowrd = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_robot_bold};
  color: ${({ theme }) => theme.colors.title};

  font-size: 14px;
`;

export const WrapperFooter = styled.View`
  width: 100%;
`;

export const ImageFooter = styled.Image`
  width: 420px;
  height: 179px;
`;
