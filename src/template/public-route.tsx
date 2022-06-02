import Box from '@mui/material/Box';

type PublicRouteProps = {
  children: React.ReactNode;
};

function PublicRoute({ children }: PublicRouteProps) {
  return <Box>{children}</Box>;
}

export default PublicRoute;
