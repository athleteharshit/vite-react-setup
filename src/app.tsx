import { Route, Routes } from 'react-router-dom';
import Hello from '@components/Hello';
import ROUTE_NAME from '@utils/route-name';

function App() {
  return (
    <Routes>
      <Route path={ROUTE_NAME.HOME} element={<Hello />}></Route>
    </Routes>
  );
}

export default App;
