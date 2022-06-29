import { Provider } from 'react-redux';
import { store } from '~/setup/app/store';
import { ThemeProvider } from '@mui/material/styles';
import theme from '~/setup/theme/theme';

type ProvidersProps = {
  children: React.ReactNode;
};

function Providers({ children }: ProvidersProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Provider>
  );
}

export default Providers;
