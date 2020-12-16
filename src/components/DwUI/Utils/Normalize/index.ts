import { Dimensions, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const wscale: number = SCREEN_WIDTH / 320;
const hscale: number = SCREEN_HEIGHT / 568;

export const ScreenWidth = (): number => SCREEN_WIDTH;
export const ScreenHeight = ():number => SCREEN_HEIGHT;
export const Normalize = (size: number, based: 'width' | 'height' = 'width'): number => {
  const newSize = based === 'height' ? size * hscale : size * wscale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};
