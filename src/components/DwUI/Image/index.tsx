import React from 'react';
import styled from 'styled-components/native';
import { Colors } from '../Colors';
import { IImage } from './IIMages';
import { Normalize } from '../Utils';

const SIZE = Normalize(150);
const SIZE_ONLINE = Normalize(24);

const Wrap = styled.View``;

const Online = styled.View`
    border-radius: ${SIZE_ONLINE / 2}px;
    background-color: ${Colors.green};
    border-color:${Colors.white};
    border-width: ${Normalize(2)}px;
    height:${SIZE_ONLINE}px;
    width:${SIZE_ONLINE}px;
    position: absolute;
    bottom: ${Normalize(12)}px;
    left: ${Normalize(12)}px;
`;

const ImageStyle = styled.Image`
  border-radius: ${SIZE / 2}px; 
  border-width: ${Normalize(3)}px;
  border-color: ${Colors.white};
`;

export const ImageProfile: React.FC<IImage> = (props:IImage) => {
  const { uri } = props;
  return (
    <Wrap>
      <ImageStyle source={{ uri, height: SIZE, width: SIZE }} />
      <Online />
    </Wrap>
  );
}
;
