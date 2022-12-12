import React from 'react';
import { Image } from 'react-native';
import { Container, WrapperHeader, ButtonOnline, Box } from './styles';
import ProfileSVG from '../../assets/images/profile.svg';

export function Avatar() {
  return (
    <Container>
      <Box>
        <WrapperHeader>
          <ProfileSVG width={54} height={54} />
          {/* <Image
            style={{ width: 54, height: 54, borderRadius: 30 }}
            source={{
              uri: 'https://i.em.com.br/oxf03xwU0cGucfhNA1fHQ9rS_Yg=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2021/07/15/1286930/20210715124025292640e.jp',
            }}
          /> */}
        </WrapperHeader>
      </Box>
      <ButtonOnline />
    </Container>
  );
}
