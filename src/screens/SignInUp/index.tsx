/* eslint-disable prettier/prettier */
/* eslint-disable global-require */
import React from 'react';
import { View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { ScreenStackParamList } from '../../routes/authenticateRoutes';
import { Buttonn } from '../../components/Button/index';
import UploadSVG from '../../assets/icon/upload.svg';
import {
  Container,
  Title,
  ImageHeader,
  Main,
  WrapperBorder,
  WrapperMain,
  WrapperInput,
  Label,
  Input,
  ButtonUpload,
  WrapperFotterButton,
  WrapperFooter,
  ImageFooter,
} from './styles';

type SignIUpScreenStackProps = NativeStackNavigationProp<
  ScreenStackParamList,
  'HomeAuth'
>;
export function SignInUpScreen() {
  const navigation = useNavigation<SignIUpScreenStackProps>();
  return (
    <Container>
      <ImageHeader source={require('../../assets/images/header.png')} />

      <Main>
        <WrapperMain>
          <Title>Cadastre-se</Title>
        </WrapperMain>
        <WrapperBorder>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: '#cdcdcd',
              marginTop: -20,
              marginBottom: 30,
              width: 200,
            }}
          />
        </WrapperBorder>
        <WrapperInput>
          <Label>Seu nome:</Label>
          <Input placeholder="Luan" />

          <Label>Seu nome de usuário:</Label>
          <Input placeholder="senha" />

          <Label>E-mail:</Label>
          <Input placeholder="@exemple.com" />

          <Label>Senha:</Label>
          <Input placeholder="*********" />

          <Label>Sua foto:</Label>
          <Input placeholder="selecione uma imagem" />
          <ButtonUpload>
            <UploadSVG width={23} height={24} />
          </ButtonUpload>

          <Label>Sobre min:</Label>
          <Input
            multiline
            placeholder="sou uma pessoa animada, gosto de sair as vezes ...."
          />

          <Label>Telefone(celular):</Label>
          <Input placeholder="(31) 9 8763-4462" />
        </WrapperInput>

        <WrapperFotterButton>
          <Buttonn
            title="CADASTRAR"
            onPress={() => navigation.navigate('HomeAuth')}
          />
        </WrapperFotterButton>
      </Main>
      <WrapperFooter>
        <ImageFooter source={require('../../assets/images/footer.png')} />
      </WrapperFooter>
    </Container>
  );
}
