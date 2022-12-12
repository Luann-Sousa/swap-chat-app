/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { BoxButton } from '../../components/BoxButton';
import { CardConversas } from '../../components/CardConversas';
import { Profile } from '../../components/Profile';
import { apiURL } from '../../services/api';
import {
  Container,
  ContainerMain,
  Title,
  WrapperButtons,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  WrapperCardFriends,
} from './styles';

export function FriendsScreen() {
  const [amigos, setAmigo] = useState([]);
  // console.log('amigos', amigos?.friends.length);

  async function handleFriends() {
    await apiURL
      .get('/friends/4a9c1ef6-cca6-4804-9396-590bbeb25738')
      .then(response => setAmigo(response.data))
      .catch(error => console.log('error', error));
  }
  useEffect(() => {
    handleFriends();
  }, []);
  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      <ContainerMain>
        <Profile title="Amigos(a)" />

        <WrapperButtons>
          <BoxButton title="OLINE(65)" />
          <BoxButton title="OFILINE(263)" />
        </WrapperButtons>
      </ContainerMain>

      <WrapperCardFriends>
        {amigos.friends?.map(item => (
          <CardConversas
            key={item.id}
            name={item?.user?.name}
            Uri={item?.user?.photo}
          />
        ))}
      </WrapperCardFriends>

      {/* <Title>Welcome is Screen Friends !</Title> */}
    </Container>
  );
}
