import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await axios.post('https://backend-veg-1.onrender.com/register', form);
      alert('Registration successful');
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-green-800 text-center">Register</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <input name="name" type="text" placeholder="Name" className="w-full p-3 mb-4 border border-green-300 rounded" value={form.name} onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" className="w-full p-3 mb-4 border border-green-300 rounded" value={form.email} onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" className="w-full p-3 mb-4 border border-green-300 rounded" value={form.password} onChange={handleChange} required />
        <button className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3 rounded">Register</button>
        <p className="mt-4 text-sm text-center">
          Already have an account? <a href="/login" className="text-green-700 underline">Login</a>
        </p>
      </form>
    </div>
  );
}