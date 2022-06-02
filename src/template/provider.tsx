import { Provider } from 'react-redux';
import { store } from '~/app/store';
import { ThemeProvider } from '@mui/material/styles';
import theme from '~/theme/theme';
import { BrowserRouter } from 'react-router-dom';

type ProvidersProps = {
  children: React.ReactNode;
};

function Providers({ children }: ProvidersProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>{children}</BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default Providers;
