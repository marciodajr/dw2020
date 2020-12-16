import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  CardsActions,
  CardsGroup,
  CardsList,
  CardsListHour,
  CardsListInfo,
  CardsListPlay,
  CardsListTitle,
  CardsListItem,
  Colors,
  ImageProfile,
  ProfileGroup,
  ProfileInfo,
  ProfileName,
  ProfilePicute,
  ProfileTitle
} from '../../components/DwUI';

import { data } from './data';

export const Profile: React.FC = () => {
  return (
    <CardsGroup>
      <ProfileGroup>
        <ProfilePicute>
          <ImageProfile uri="https://avatars0.githubusercontent.com/u/68153224" />
        </ProfilePicute>
        <ProfileInfo>
          <ProfileName>Marcio dos A. Junior</ProfileName>
          <ProfileTitle>Desenvolvedor JavaScript</ProfileTitle>
        </ProfileInfo>
      </ProfileGroup>
      <CardsActions>
        <Icon name="ios-rocket" size={35} color={Colors.yellow} />
        <Icon name="chatbubbles" size={35} color={Colors.gray} />
        <Icon name="people" size={35} color={Colors.gray} />
        <Icon name="ios-ellipsis-vertical" size={35} color={Colors.gray} />
      </CardsActions>
      <CardsList>
        {data.map((v, k) => (
          <CardsListItem key={k}>
            <CardsListInfo>
              <CardsListHour>{v.hours}</CardsListHour>
              <CardsListTitle>{v.title}</CardsListTitle>
            </CardsListInfo>
            <CardsListPlay>
              <Icon name="ios-checkbox-sharp" size={36} color={Colors.green} />
            </CardsListPlay>
          </CardsListItem>
        ))}
      </CardsList>
    </CardsGroup>
  );
};


