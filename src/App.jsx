import { Routes, Route } from 'react-router-dom';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import ResetEmail from './pages/pass-reset/ResetEmail';
import ResetPass from './pages/pass-reset/ResetPass';

function App() {

  return (
    <Routes>
      <Route path="/" element={<>Home</>} />
      <Route path="/about" element={<>About</>} />
      <Route path="/create-account" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/e/reset-password" element={<ResetEmail/>} />
      <Route path="/p/reset-password" element={<ResetPass/>} />
      <Route path="*" element={<>Not Found</>} /> 
    </Routes>
  );
}

export default App
