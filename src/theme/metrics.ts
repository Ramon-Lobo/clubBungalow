import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const Metrics = {
  screen: {
    width: width < height ? width : height,
    height: width < height ? height : width,
  },
  base: {
    margin: 20,
    padding: 20,
    radius: 5,
    borderRadius: 12,
  },
  heading: {
    h1: 48,
    h2: 36,
    h3: 28,
    h4: 24,
    h5: 22,
    h6: 20,
  },
  paragraph: {
    p1: 20,
    p2: 16,
    p3: 14,
    p4: 12,
    p5: 10,
    p6: 8,
  },
  lineHeight: {
    body: 20,
  },
};
