import { Route, Routes } from 'react-router-dom';
import Hello from '@components/Hello';
import ROUTE_NAME from '@utils/route-name';
import PublicRoute from './template/public.route';

function App() {
  return (
    <Routes>
      <Route
        path={ROUTE_NAME.HOME}
        element={
          <PublicRoute>
            <Hello />
          </PublicRoute>
        }
      ></Route>
    </Routes>
  );
}

export default App;
