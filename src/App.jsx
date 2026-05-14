import { Routes, Route } from 'react-router-dom';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';

function App() {

  return (
    <Routes>
      <Route path="/" element={<>Home</>} />
      <Route path="/about" element={<>About</>} />
      <Route path="/create-account" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="*" element={<>Not Found</>} /> 
    </Routes>
  );
}

export default App
