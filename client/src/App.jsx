import { useSelector } from 'react-redux';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import UserDetails from './pages/UserDetails';
import Form from './pages/Form';

function App() {
  const user = useSelector((state) => state.auth.user);

  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
    <Route path="/dashboard" element={<Dashboard />} />
<Route path="/user-details" element={<UserDetails/>} />
<Route path='/form' element={<Form/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
