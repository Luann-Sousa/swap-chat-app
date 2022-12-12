/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Text } from 'react-native';
import {
  Container,
  ContainerMain,
  WrapperSearchInput,
  WrapperCardUsers,
  WrapperCardConversas,
  FlatListCard,
} from './styles';

import ProfileSVG from '../../assets/images/profile.svg';
import { HeaderProfile } from '../../components/HeaderProfile';
import { SearchInput } from '../../components/SearchInput';
import { CardUsers } from '../../components/CardUsers';
import { CardConversas } from '../../components/CardConversas';
import { ScreenStackParamList } from '../../routes/authenticateRoutes';
import { apiURL } from '../../services/api';
import { IMessegerProps } from '../../DTOS/messeger';

type ChatAllScreenStackProps = NativeStackNavigationProp<
  ScreenStackParamList,
  'Messege'
>;

export function ChatAll() {
  const [messege, setMesseger] = useState<IMessegerProps>({} as IMessegerProps);
  // console.log(messege.messegens);
  const conversas = [
    {
      user: 1,
      nome: 'Luann Sousa',
      mensagem: 'Oi, tudo bem ? 17 de ago',
    },
    {
      user: 2,
      nome: 'Maria Aparecida de Je...',
      mensagem: 'Oi, tudo bem ? 17 de ago',
    },
    {
      user: 3,
      nome: 'Carlos Henrrique',
      mensagem: 'eai cara como está ? 31 de out',
    },
    {
      user: 4,
      nome: 'Amelia de Barros',
      mensagem: 'passa aqui depois, tudo bem ? 2 de jan',
    },
    {
      user: 5,
      nome: 'Pedro Rocha Li...',
      mensagem: 'Colé mano, tudo bem ? 12 de jun',
    },
    {
      user: 6,
      nome: 'Pedro Rocha Li...',
      mensagem: 'Colé mano, tudo bem ? 12 de jun',
    },
  ];

  async function Users() {
    await apiURL
      .get('/messegens')
      .then(response => setMesseger(response.data))
      .catch(error => console.log('error'));
  }
  useEffect(() => {
    Users();
  }, []);
  const navigation = useNavigation<ChatAllScreenStackProps>();
  return (
    <>
      <HeaderProfile icon={ProfileSVG} title="Bate Papo" />
      <Container>
        <ContainerMain>
          <WrapperSearchInput>
            <SearchInput />
          </WrapperSearchInput>

          <WrapperCardUsers>
            <CardUsers name="Maria Clara Gomes" />
            <CardUsers name="Fernanda Santos" />
            <CardUsers name="Bernade Da Silva" />
            <CardUsers name="Maria Isabe Kiterino" />
          </WrapperCardUsers>
        </ContainerMain>
        <WrapperCardConversas>
          {messege?.messegens?.map(item => (
            <CardConversas
              onPress={() => navigation.navigate('Messege', { data: messege })}
              key={item.id}
              name={item.user?.name}
              messeger={item.messeger}
              Uri={item?.user?.photo}
            />
          ))}
        </WrapperCardConversas>
      </Container>
    </>
  );
}
