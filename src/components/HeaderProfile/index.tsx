import React from 'react';
import { SvgProps } from 'react-native-svg';
import {
  Container,
  Title,
  WrapperHeader,
  WrapperHeaderIcon,
  ButtonIconPhoto,
  ButtonIconPencil,
  ButtonOnline,
} from './styles';
import ProfileSVG from '../../assets/images/profile.svg';
import PhotoSVG from '../../assets/icon/photo.svg';
import PencilSVG from '../../assets/icon/pencil.svg';

interface Props {
  title: string;
  icon: React.FC<SvgProps>;
}
export function HeaderProfile({ title, icon: Icon }: Props) {
  return (
    <Container>
      <WrapperHeader>
        <Icon width={50} height={50} />
        <Title>{title}</Title>
      </WrapperHeader>
      <ButtonOnline />

      <WrapperHeaderIcon>
        <ButtonIconPhoto>
          <PhotoSVG width={24} height={24} />
        </ButtonIconPhoto>

        <ButtonIconPencil>
          <PencilSVG width={24} height={24} />
        </ButtonIconPencil>
      </WrapperHeaderIcon>
    </Container>
  );
}
