import { Link } from 'react-router-dom';
import { FaHome, FaLeaf, FaShoppingCart, FaUsers, FaTimes, FaPlus} from 'react-icons/fa';

export default function Sidebar({ open, setOpen }) {
  return (
    <>
      {/* Overlay for small screens */}
      {open && (
        <div className="fixed inset-0 z-30 bg-black opacity-50 lg:hidden" onClick={() => setOpen(false)}></div>
      )}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-green-800 text-white z-40 transform transition-transform duration-300 lg:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        } lg:static lg:translate-x-0`}
      >
        <div className="flex justify-between items-center px-4 py-4 lg:hidden">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={() => setOpen(false)}><FaTimes className="text-xl" /></button>
        </div>
        <h2 className="text-2xl font-bold px-4 mb-8 hidden lg:block">Admin Panel</h2>
        <nav className="flex flex-col gap-4 text-lg px-4">
          <Link to="/" className="hover:bg-green-600 p-2 rounded flex items-center gap-3">
            <FaHome /> Dashboard
          </Link>
          <Link to="/Addproducts" className="hover:bg-green-600 p-2 rounded flex items-center gap-3">
            < FaPlus /> Add Products
          </Link>
          <Link to="/products" className="hover:bg-green-600 p-2 rounded flex items-center gap-3">
            <FaLeaf /> Get Products
          </Link>
          <Link to="/orders" className="hover:bg-green-600 p-2 rounded flex items-center gap-3">
            <FaShoppingCart /> Orders
          </Link>
          <Link to="/customers" className="hover:bg-green-600 p-2 rounded flex items-center gap-3">
            <FaUsers /> Deilvery Boys
          </Link>
        </nav>
      </div>
    </>
  );
}