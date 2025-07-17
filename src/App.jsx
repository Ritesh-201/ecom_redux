

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Store from './pages/Store';
import Cart from './pages/Cart';
import OrderHistory from './pages/OrderHistory';
import Help from './pages/Help';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<OrderHistory />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </Router>
  );
}

export default App;
