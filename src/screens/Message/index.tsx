import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import {
  Text,
  View,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  SectionList,
} from 'react-native';
import {
  Container,
  Title,
  WrapperMesserTo,
  WrapperMessageMe,
  WrapperInputMessage,
  WrapperButtonSend,
  ButtonIcon,
  Content,
  WrapperContent,
  Main,
  LineMessageMe,
  BoxMessageMeText,
  BoxMessageMe,
  BoxImage,
  LineMessageHe,
  BoxMessageHe,
  BoxMessageHeText,
} from './styles';
import ProfileSVG from '../../assets/images/profile.svg';
import { HeaderMesseger } from '../../components/HeaderMesseger';

import { MessegerInput } from '../../components/MessegerInput';
import { apiURL } from '../../services/api';
import { Ionicons } from '@expo/vector-icons';

interface PropsProfile {
  title: string;
}

export function Message() {
  const [message_to, setMessegerTo] = useState(false);
  const [message_digit, setMessegerDigit] = useState('');
  const [resultMessage, setResultMessage] = useState('');

  const [message, setMessage] = useState<any>([]);

  function handleEnviaMesseger() {
    const resultMessage = message_digit;
    setResultMessage(resultMessage);
    setMessegerTo(true);
    console.log('enviar mensagen', message);
  }

  async function handleMessegens() {
    await apiURL
      .get(
        '/messegens/one/dfd81ab9-729f-42b7-b4d9-552830d9455a/4a9c1ef6-cca6-4804-9396-590bbeb25738',
      )
      .then((response: any) => setMessage(response.data))
      .catch((error: any) => console.log('error', error));
  }
  useEffect(() => {
    handleMessegens();
  }, []);

  return (
    <>
      <Container>
        <HeaderMesseger
          icon={ProfileSVG}
          title="Pedro Sousa"
          subtitle="online agora"
        />
      </Container>
      <View
        style={{ borderTopWidth: 1, borderColor: '#cdcdcd', marginTop: 20 }}
      />

      <Content>
        <FlatList
          data={message?.messengens_me}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <>
              <WrapperMesserTo>
                <BoxMessageMe>
                  <Text>{item?.messeger}</Text>
                </BoxMessageMe>
              </WrapperMesserTo>

              <WrapperMessageMe>
                <BoxMessageHe>
                  <BoxMessageMeText>{item?.messeger}</BoxMessageMeText>
                </BoxMessageHe>
              </WrapperMessageMe>
            </>
          )}
        />
      </Content>

      <KeyboardAvoidingView enabled={Platform.OS === 'ios'}>
        <WrapperButtonSend>
          <WrapperInputMessage>
            <MessegerInput
              placeholder="Mensagem"
              onChangeText={text => setMessegerDigit(text)}
            />
          </WrapperInputMessage>

          <ButtonIcon onPress={() => handleEnviaMesseger()}>
            <Ionicons name="arrow-forward-sharp" size={28} color="#2FA8FF" />
          </ButtonIcon>
        </WrapperButtonSend>
      </KeyboardAvoidingView>
    </>
  );
}
