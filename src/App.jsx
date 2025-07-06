import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Products from './components/Products';
import Orders from './components/Orders';
import Customers from './components/Customers';
import Layout from './components/Layout';
import Addproducts from './components/Addproducts';

export default function App() {
  const isLoggedIn = !!localStorage.getItem('token');
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={isLoggedIn ? <Layout><Dashboard /></Layout> : <Navigate to="/login" />} />
        <Route path="/products" element={<Layout><Products /></Layout>} />
        <Route path="/Addproducts" element={<Layout><Addproducts /></Layout>} />
        <Route path="/orders" element={<Layout><Orders /></Layout>} />
        <Route path="/customers" element={<Layout><Customers /></Layout>} />
      </Routes>
    </Router>
  );
}