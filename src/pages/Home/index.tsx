import React from 'react';
import { View } from 'react-native';
import { Block, Typography } from '~/components';

// import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Block background="rgba(240, 237, 228, 1)" height="100%" align="center" justify="center">
      <Typography>ClubBungalow</Typography>
    </Block>
  );
};

export default Home;
