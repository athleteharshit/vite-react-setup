import Box from '@mui/material/Box';
import Header from '@components/header/header';
import Footer from '@components/footer/footer';

type PublicRouteProps = {
  children: React.ReactNode;
};

function PublicRoute({ children }: PublicRouteProps) {
  return (
    <Box>
      <Header />
      {children}
      <Footer />
    </Box>
  );
}

export default PublicRoute;
