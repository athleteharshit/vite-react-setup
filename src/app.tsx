import { Route, Routes } from 'react-router-dom';
import ROUTE_NAME from '@utils/route-name';
import PublicRoute from './template/public.route';
import Home from '@pages/home/home';

function App() {
  return (
    <Routes>
      <Route
        path={ROUTE_NAME.HOME}
        element={
          <PublicRoute>
            <Home />
          </PublicRoute>
        }
      ></Route>
    </Routes>
  );
}

export default App;
