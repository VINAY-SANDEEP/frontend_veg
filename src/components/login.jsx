import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../data/api';
export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await axios.post(`${API_URL}/login`, form);
      localStorage.setItem('token', res.data.token);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-green-800 text-center">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <input name="email" type="email" placeholder="Email" className="w-full p-3 mb-4 border border-green-300 rounded" value={form.email} onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" className="w-full p-3 mb-4 border border-green-300 rounded" value={form.password} onChange={handleChange} required />
        <button className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3 rounded">Login</button>
        <p className="mt-4 text-sm text-center">
          Don't have an account? <a href="/register" className="text-green-700 underline">Register</a>
        </p>
      </form>
    </div>
  );
}
