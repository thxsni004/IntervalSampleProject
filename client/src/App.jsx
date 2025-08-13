import { useSelector } from 'react-redux';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import UserDetails from './pages/UserDetails';
import Form from './pages/Form';
import ProtectedRoute from './components/ProtectedRote';

import WeatherPage from './pages/WeatherPage';
import FileUpload from './components/FileUpload';
import Dynamic from './pages/Dynamic';
import DragDrop from './pages/DragDrop'

import ProductCart from './pages/ProductCart';
import CartPage from './pages/CartPage';
import Purchased from './pages/Purchased';
// import GlobalDialog from './components/GlobalDialog';
import Parent from './components/Parent';

function App() {
  const user = useSelector((state) => state.auth.user);

  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
    <Route path="/dashboard" element={ <ProtectedRoute><Dashboard /></ProtectedRoute>} />
<Route path="/user-details" element={<UserDetails/>} />
<Route path='/form' element={<Form/>}/>
<Route path='/weather' element={<WeatherPage/>}/>

<Route path='/upload' element={<FileUpload/>}/>
<Route path='/slot' element={<Dynamic/>}/>
<Route path='/drag' element={<DragDrop/>} />
<Route path='/product' element={<ProductCart/>}/>
<Route path='/cartpage' element={<CartPage/>}/>
<Route path="/purchased" element={<Purchased />} />
<Route path="/parent" element={<Parent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
