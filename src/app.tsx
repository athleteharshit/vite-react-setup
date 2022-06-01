import { Box } from '@mui/material';
import { Counter } from '~/features/counter/Counter';
import Hello from '@components/Hello';

function App() {
  return (
    <Box>
      <Counter />
      <Hello />
    </Box>
  );
}

export default App;
