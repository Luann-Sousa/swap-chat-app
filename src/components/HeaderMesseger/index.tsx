import React from 'react';
import { SvgProps } from 'react-native-svg';
import {
  Container,
  Wrapper,
  Title,
  SubTitle,
  WrapperHeader,
  WrapperHeaderIcon,
  ButtonIconPhoto,
  ButtonIconPencil,
  ButtonOnline,
} from './styles';
import ProfileSVG from '../../assets/images/profile.svg';
import PhotoColorSVG from '../../assets/icon/photo-color.svg';
import PhoneSVG from '../../assets/icon/phone.svg';

interface Props {
  title: string;
  subtitle: string;
  icon: React.FC<SvgProps>;
}
export function HeaderMesseger({ title, subtitle, icon: Icon }: Props) {
  return (
    <Container>
      <WrapperHeader>
        <Icon width={50} height={50} />
        <Wrapper>
          <Title>{title}</Title>
          <SubTitle>{subtitle}</SubTitle>
        </Wrapper>
      </WrapperHeader>
      <ButtonOnline />

      <WrapperHeaderIcon>
        <ButtonIconPhoto>
          <PhoneSVG width={24} height={24} />
        </ButtonIconPhoto>

        <ButtonIconPencil>
          <PhotoColorSVG width={24} height={24} />
        </ButtonIconPencil>
      </WrapperHeaderIcon>
    </Container>
  );
}
