import React from 'react';
import {
  Container,
  Title,
  WrapperHeader,
  WrapperHeaderIcon,
  ButtonIconPencil,
  ButtonOnline,
} from './styles';
import ProfileSVG from '../../assets/images/profile.svg';
import LogautSVG from '../../assets/icon/logaut.svg';

interface PropsProfile {
  title: string;
}
export function Profile({ title }: PropsProfile) {
  return (
    <Container>
      <WrapperHeader>
        <ProfileSVG width={50} height={50} />
        <Title>{title}</Title>
      </WrapperHeader>
      <ButtonOnline />

      <WrapperHeaderIcon>
        <ButtonIconPencil>
          <LogautSVG width={28} height={28} />
        </ButtonIconPencil>
      </WrapperHeaderIcon>
    </Container>
  );
}
