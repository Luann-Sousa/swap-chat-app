/* eslint-disable prettier/prettier */
import React from 'react';
import { Container, Title, ContainerMessege } from './styles';
import ProfileSVG from '../../assets/images/jovem2.svg';

interface ICarMesseger {
  messeger: string;
}

export function CarMessegeMe({ messeger }: ICarMesseger) {
  return (
    <Container>
      <ContainerMessege>
        <Title>{messeger}</Title>
      </ContainerMessege>
      <ProfileSVG width={34} height={34} />
    </Container>
  );
}
