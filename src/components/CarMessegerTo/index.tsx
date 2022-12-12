/* eslint-disable prettier/prettier */
import React from 'react';
import { Container, Title, ContainerMessege } from './styles';
import ProfileSVG from '../../assets/images/profile.svg';

interface ICarMesseger {
  messeger: string;
}

export function CarMessegeTo({ messeger }: ICarMesseger) {
  return (
    <Container>
      <ProfileSVG width={34} height={34} />
      <ContainerMessege>
        <Title>{messeger}</Title>
      </ContainerMessege>
    </Container>
  );
}
