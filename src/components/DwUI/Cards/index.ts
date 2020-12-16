import styled from 'styled-components/native';
import { Colors } from '../Colors';
import {  Normalize } from '../Utils';

export const CardsGroup = styled.View`
    padding: ${Normalize(24)}px;
`;

export const CardsActions = styled.View`
    margin-left: ${Normalize(16)}px;
    margin-right: ${Normalize(16)}px;
    background-color: ${Colors.black};
    height: ${72}px;
    border-top-left-radius: ${Normalize(24)}px;
    border-top-right-radius: ${Normalize(24)}px;
    padding: ${Normalize(12)}px;
    flex-direction: row;
    justify-content:space-between;
    align-items:center;
`;

export const CardsList = styled.View`
    background-color: ${Colors.white};
    border-radius: ${Normalize(24)}px;
`;

export const CardsListItem = styled.View`
    flex-direction: row;
    margin: ${Normalize(12)}px ${Normalize(12)}px 0;
    padding-bottom: ${Normalize(12)}px; 
    border-bottom-width: 0.5px;
`;

export const CardsListInfo = styled.View`
flex: 1;
`;

export const CardsListTitle = styled.Text`
 font-size: ${Normalize(16)}px;
line-height: ${Normalize(22)}px;
font-weight: bold;
color: ${Colors.black};
margin-bottom: ${Normalize(3)}px; 
margin-right: ${Normalize(12)}px; 
`;

export const CardsListHour = styled.Text`
 font-size: ${Normalize(12)}px;
line-height: ${Normalize(20)}px;
color: ${Colors.pink};
font-weight: bold; 
`;

export const CardsListPlay = styled.View`
    align-self: center;
`;
