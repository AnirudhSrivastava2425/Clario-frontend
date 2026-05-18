import { Routes, Route } from 'react-router-dom';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import ResetEmail from './pages/pass-reset/ResetEmail';
import ResetPass from './pages/pass-reset/ResetPass';
import ProtectedRoute from './utils/ProtectedRoute';
import PublicRoute from './utils/PublicRoutes';
import Home from './pages/home/Home';

function App() {

  return (
    <Routes>
      <Route path="/create-account" element={
        <PublicRoute>
          <Signup/>
        </PublicRoute>
      } />
      <Route path="/login" element={
        <PublicRoute>
          <Login/>
        </PublicRoute>
      } />
      <Route path="/e/reset-password" element={
        <PublicRoute>
          <ResetEmail/>
        </PublicRoute>
      } />
      <Route path="/p/reset-password" element={
        <PublicRoute>
          <ResetPass/>
        </PublicRoute>
      } />

      <Route path="/" element={
        <ProtectedRoute>
          <Home/>
        </ProtectedRoute>
      } />
      <Route path="/about" element={
        <ProtectedRoute>
          <p>About</p>
        </ProtectedRoute>
      } />
      <Route path="*" element={
        <ProtectedRoute>
          <p>Not Found</p>
        </ProtectedRoute>
      } /> 
    </Routes>
  );
}

export default App
