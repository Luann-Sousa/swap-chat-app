/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable global-require */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Main, Box, ImageUser, Title } from './styles';
import UserSVG from '../../assets/images/jovem2.png';

interface PropsName {
  name: string;
}
export function CardUsers({ name }: PropsName) {
  return (
    <Main>
      <Box>
        <ImageUser
          source={{
            uri: 'https://i.pinimg.com/736x/4b/f6/ff/4bf6ffed82549a841e24c69d816e15da.jpg',
          }}
        />
      </Box>
      <Title>{name}</Title>
    </Main>
  );
}
