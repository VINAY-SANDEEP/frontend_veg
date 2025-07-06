import { useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export default function Navbar3({ toggleSidebar }) {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };
  const handleRegister = () => {
    localStorage.removeItem('token');
    navigate('/register');
  };
  return (
    <header className="w-full h-16 bg-gradient-to-r from-green-700 via-green-600 to-green-700 text-white shadow-md flex items-center justify-between px-4 lg:px-8">
      {/* Left - Brand & Menu */}
      <div className="flex items-center gap-4">
        <button className="lg:hidden p-2 rounded hover:bg-green-800 transition" onClick={toggleSidebar}>
          <FaBars className="text-2xl" />
        </button>
        <h1 className="text-2xl font-extrabold tracking-wide">🌿 Veggie Admin</h1>
      </div>

      {/* Right - Avatar + Logout */}
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-sm font-semibold">
            VA
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 transition px-4 py-1.5 rounded-lg text-sm font-medium shadow-sm"
        >
          login
        </button>
        <button
          onClick={handleRegister}
          className="bg-red-600 hover:bg-red-700 transition px-4 py-1.5 rounded-lg text-sm font-medium shadow-sm"
        >
          Register
        </button>
      </div>
    </header>
  );
}
