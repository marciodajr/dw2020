import styled from 'styled-components/native';
import { Colors } from '../Colors';
import { Normalize } from '../Utils';

export const ProfileGroup = styled.View`
    margin: ${Normalize(48)}px 0 ${Normalize(24)}px; 
    align-items:center;
`;

export const ProfilePicute = styled.View``;

export const ProfileInfo = styled.View`
    flex: 1;
    align-items:center;
    padding-top: ${Normalize(24)}px;
`;

export const ProfileName = styled.Text`
font-size: ${Normalize(22)}px;
line-height: ${Normalize(30)}px;
font-weight: bold;
color: ${Colors.white};
margin-bottom: ${Normalize(3)}px;
`;

export const ProfileTitle = styled.Text`
font-size: ${Normalize(14)}px;
line-height: ${Normalize(22)}px;
color: ${Colors.white};
`;
