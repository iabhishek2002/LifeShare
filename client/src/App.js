import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './components/Routes/ProtectedRoute';
import PublicRoute from './components/Routes/PublicRoute';
import Donar from './pages/Dashboard/Donar';
import Hospitals from './pages/Dashboard/Hospitals';
import OrganisationPage from './pages/Dashboard/OrganisationPage';

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route
          path='/orgnaisation'
          element={
            <ProtectedRoute>
              <OrganisationPage />
            </ProtectedRoute>
          }
        />
        <Route
          path='/hospital'
          element={
            <ProtectedRoute>
              <Hospitals />
            </ProtectedRoute>
          }
        />
        <Route
          path='/donar'
          element={
            <ProtectedRoute>
              <Donar />
            </ProtectedRoute>
          }
        />
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <Homepage />
            </ProtectedRoute>
          }
        />
        <Route
          path='/register'
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path='/login'
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
