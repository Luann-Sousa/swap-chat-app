import React from 'react';
import { TextInputProps } from 'react-native';
import { FontAwesome, Entypo } from '@expo/vector-icons';

import { Container, Search } from './styles';

interface InputProps extends TextInputProps {
  name?: string;
}
export function MessegerInput({ name, ...rest }: InputProps) {
  return (
    <Container>
      {/* <Title>Olá, programador Luann</Title> */}
      <Search {...rest} />
      <FontAwesome
        name="camera"
        size={18}
        color="#2FA8FF"
        style={{ position: 'absolute', marginTop: 10, marginLeft: 300 }}
      />
      <Entypo
        name="attachment"
        size={18}
        color="#2FA8FF"
        style={{ position: 'absolute', marginTop: 10, marginLeft: 270 }}
      />
    </Container>
  );
}
