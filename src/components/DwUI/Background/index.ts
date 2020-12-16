import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../Colors';

export const Background = styled(LinearGradient).attrs({
  colors: [Colors.yellow, Colors.pink],
  start: { x: 0, y:2 },
  end: { x: 4, y: 0 }
})`
    flex: 1;
`;
