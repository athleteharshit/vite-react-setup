import { Box } from '@mui/material';
import { Counter } from '~/features/counter/Counter';
import Home from '~/pages/home';

function App() {
  return (
    <Box>
      <Counter />
      <Home />
    </Box>
  );
}

export default App;
