import React, { useState, useEffect } from 'react';
import { FlatList, Dimensions } from 'react-native';
import { apiURL } from '../../services/api';
import {
  Wrapper,
  Container,
  Title,
  TitleBirth,
  SubTitle,
  WrapperLegend,
  WrapperDateBirth,
  ContainerImageMacth,
  CardMacth,
  ImageMacth,
  ContainerOption,
  Reload,
  ReloadMatch,
} from './styles';
import { Profile } from '../../components/Profile';
import JovenProfileSVG from '../../assets/images/joven1.png';
import ReloadSVG from '../../assets/images/reload.svg';
import CancelSVG from '../../assets/images/cancel.svg';
import MatchlSVG from '../../assets/images/match.svg';
import StarSVG from '../../assets/images/star.svg';
import { ImageSlider } from '../../components/ImageSlider';
import { IUserProps } from '../../DTOS/user';

const { width } = Dimensions.get('window');
export function MatchScreen() {
  const [users, setUsers] = useState<IUserProps>({} as IUserProps);
  // console.log(users);
  async function handleUsers() {
    await apiURL
      .get('/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => console.log('error'));
  }
  useEffect(() => {
    handleUsers();
  }, []);

  return (
    <>
      <Wrapper>
        <Profile title="Dê seu Match" />
        <Container showsVerticalScrollIndicator={false}>
          <ContainerImageMacth>
            <FlatList
              horizontal
              pagingEnabled
              data={users.users}
              keyExtractor={user => user.id}
              renderItem={user => (
                <CardMacth activeOpacity={0.8}>
                  <ImageMacth source={{ uri: user.item.photo }} />
                  <WrapperLegend>
                    <WrapperDateBirth>
                      <Title> {user.item.name},</Title>
                      <TitleBirth>17</TitleBirth>
                    </WrapperDateBirth>

                    <SubTitle>{user.item.profession}</SubTitle>
                  </WrapperLegend>
                </CardMacth>
              )}
            />
          </ContainerImageMacth>

          <ContainerOption>
            <Reload>
              <ReloadSVG width={24} height={24} />
            </Reload>

            <Reload>
              <CancelSVG width={18} height={18} />
            </Reload>

            <ReloadMatch>
              <MatchlSVG width={30} height={30} />
            </ReloadMatch>

            <Reload>
              <StarSVG width={24} height={24} />
            </Reload>

            <Reload>
              <ReloadSVG width={24} height={24} />
            </Reload>
          </ContainerOption>
        </Container>
      </Wrapper>
    </>
  );
}
