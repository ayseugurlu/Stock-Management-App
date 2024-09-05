import { useState } from 'react'
import AppRouters from './routers/AppRouters'
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import ErrorBoundary from './components/ErrorBoundary';
import store from './app/store';

function App() {
  
  const theme = createTheme({
    palette: {
      primary: {
        main: "#3E3D77",
        second: "#A1C7E0"
      },
      secondary: {
        main: "#6A1D99",
        second: "#E2BDE7",
        contrastText: "#FF5F5D"
      },
      },
      
     
  });
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <AppRouters/>
        </Provider>
        <ToastContainer />
      </ThemeProvider>
    </ErrorBoundary>
  );

}

export default App
