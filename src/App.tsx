import React from 'react';
import { Home } from './pages';
import { ThemeManager } from '~/theme';
// import { Container } from './styles';
const App: React.FC = () => {
  return (
    <ThemeManager>
      <Home />
    </ThemeManager>
  );
};

export default App;
