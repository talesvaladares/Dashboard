import React from 'react';

import {ThemeProvider} from 'styled-components';
import AuthenticatedRoutes from './routes/index';
import GlobalStyles from './styles/globalStyles';

import {useTheme} from './hooks/theme';


function App() {
  const {theme} = useTheme();
  
  return (
    <ThemeProvider theme={theme} >
      <GlobalStyles/>
        <AuthenticatedRoutes/>
    </ThemeProvider>
  );
}

export default App;
