

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Store from './pages/Store';
import Cart from './pages/Cart';
import OrderHistory from './pages/OrderHistory';
import Help from './pages/Help';
import Login from './pages/Login';
import ProductDetails from './pages/ProductDetails';
import ProtectedRoute from './components/ProtectedRoute';
import Notification from './components/Notification/Notification';
import { Toaster } from 'react-hot-toast';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Toaster position="bottom-right" />
      <Navbar />
      <Notification />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/help" element={<Help />} />
        <Route path="/product/:id" element={<ProtectedRoute><ProductDetails /></ProtectedRoute>} />
        <Route path="/store" element={<ProtectedRoute><Store /></ProtectedRoute>} />
        <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
        <Route path="/orders" element={<ProtectedRoute><OrderHistory /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
