/* eslint-disable global-require */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Buttonn } from '../../components/Button/index';
import LogoSVG from '../../assets/images/logo.svg';
import {
  Container,
  Title,
  ImageHeader,
  Main,
  WrapperMain,
  WrapperLogo,
  WrapperInput,
  Input,
  WrapperFotterButton,
  WrapperFotterForgetPassword,
  TextForgerPassowrd,
  WrapperFooter,
  ImageFooter,
} from './styles';

export function SiginInScreen() {
  return (
    <Container>
      <ImageHeader source={require('../../assets/images/header.png')} />

      <Main>
        <WrapperMain>
          <Title>Conecte-se com seus{'\n'} Com seus amigos(a)</Title>
        </WrapperMain>

        <WrapperLogo>
          <LogoSVG width={150} height={150} />
        </WrapperLogo>

        <WrapperInput>
          <Input placeholder="username ou e-mail" />
          <Input placeholder="senha" />
        </WrapperInput>

        <WrapperFotterButton>
          <Buttonn title="ENTRAR" />
        </WrapperFotterButton>

        <WrapperFotterForgetPassword>
          <TextForgerPassowrd>ESQUECEU A SENHA?</TextForgerPassowrd>
        </WrapperFotterForgetPassword>
      </Main>
      <WrapperFooter>
        <ImageFooter source={require('../../assets/images/footer.png')} />
      </WrapperFooter>
    </Container>
  );
}
