/* eslint-disable prettier/prettier */
import React from 'react';
import { TouchableOpacityProps, Image } from 'react-native';
import {
  Container,
  WrapperAvatar,
  WrapperConversa,
  Name,
  Messeger,
  ButtonOnline,
} from './styles';
import ProfileSVG from '../../assets/images/profile.svg';
import LogautSVG from '../../assets/icon/logaut.svg';
import { Avatar } from '../Avatar';

interface PropsConersas extends TouchableOpacityProps {
  name: string;
  messeger?: string;
  Uri?: string;
}

export function CardConversas({ name, messeger, Uri, ...res }: PropsConersas) {
  return (
    <Container
      {...res}
      style={{ borderBottomWidth: 1, borderBottomColor: '#cdcdcd' }}
    >
      <WrapperAvatar>
        <Image
          style={{ width: 54, height: 54, borderRadius: 30 }}
          source={{
            uri: Uri,
          }}
        />
        <ButtonOnline />
      </WrapperAvatar>

      <WrapperConversa>
        <Name>{name}</Name>
        <Messeger>{messeger}</Messeger>
      </WrapperConversa>
    </Container>
  );
}
