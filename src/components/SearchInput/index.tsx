import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Container, Search } from './styles';

export function SearchInput() {
  return (
    <Container>
      {/* <Title>Olá, programador Luann</Title> */}
      <Search placeholder="Pesqueisar" />
      <FontAwesome
        name="search"
        size={18}
        color="#a2a2a2"
        style={{ position: 'absolute', marginTop: 10, marginLeft: 16 }}
      />
    </Container>
  );
}
