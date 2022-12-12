/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  Container,
  ImageIndexs,
  ImageIndex,
  CardImageWrapper,
  CarImage,
  Text,
} from './styles';

interface Props {
  imageUrl: string[];
}
export function ImageSlider({ imageUrl }: Props) {
  return (
    <Container>
      <ImageIndexs>
        <ImageIndex active />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
      </ImageIndexs>
      <CardImageWrapper>
        <CarImage source={{ uri: imageUrl[0] }} resizeMode="contain" />
      </CardImageWrapper>
    </Container>
  );
}
