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
import ReactWindow from './pages/ReactWindow';
import MultiStepForm from './pages/MultiStepForm';
import CountryDropdown from './pages/CountryDropdown';
import Layout from "./components/Layout";


function App() {
  const user = useSelector((state) => state.auth.user);

  
  return (
 
    <BrowserRouter>
   
      <Routes>
        

        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
    <Route path="/dashboard" element={ <ProtectedRoute><Layout> <Dashboard /></Layout></ProtectedRoute>} />
<Route path="/user-details" element={<Layout><UserDetails/></Layout>} />
<Route path='/form' element={<Layout><Form/></Layout>}/>
<Route path='/weather' element={<Layout><WeatherPage/></Layout>}/>

<Route path='/upload' element={<Layout><FileUpload/></Layout>}/>
<Route path='/slot' element={<Layout><Dynamic/></Layout>}/>
<Route path='/drag' element={<Layout><DragDrop/></Layout>} />
<Route path='/product' element={<Layout><ProductCart/></Layout>}/>
<Route path='/cartpage' element={<Layout><CartPage/></Layout>}/>
<Route path="/purchased" element={<Layout><Purchased /></Layout>} />
<Route path="/parent" element={<Layout><Parent /></Layout>} />
<Route path="/react" element={<Layout><ReactWindow /></Layout>} />
<Route path='multi' element={<Layout><MultiStepForm/></Layout>}/>
<Route path='/country' element={<Layout><CountryDropdown /></Layout>}  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
