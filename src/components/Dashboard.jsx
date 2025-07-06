import { FaBox, FaShoppingCart, FaUsers, FaRupeeSign } from 'react-icons/fa';

const Dashboard = () => {
  const summaryData = [
    { title: 'Total Products', value: '120', icon: <FaBox className="text-green-600 text-2xl" /> },
    { title: 'Total Orders', value: '245', icon: <FaShoppingCart className="text-green-600 text-2xl" /> },
    { title: 'Revenue', value: '₹58,000', icon: <FaRupeeSign className="text-green-600 text-2xl" /> },
    { title: 'Customers', value: '89', icon: <FaUsers className="text-green-600 text-2xl" /> },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {summaryData.map((card, index) => (
          <div key={index} className="bg-white p-5 rounded-xl shadow-md flex items-center gap-4">
            {card.icon}
            <div>
              <p className="text-gray-500 text-sm">{card.title}</p>
              <h2 className="text-xl font-bold">{card.value}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Graph Section */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-lg font-semibold mb-4">Monthly Revenue Overview</h2>
        {/* Mock Graph UI */}
        <div className="w-full h-64 bg-gradient-to-r from-green-100 to-green-50 rounded-lg flex items-end gap-3 px-4 pb-4">
          {[20, 50, 30, 70, 90, 40, 60, 30, 80, 65, 75, 95].map((val, index) => (
            <div
              key={index}
              className="w-6 bg-green-500 rounded-t-md"
              style={{ height: `${val}%` }}
              title={`Month ${index + 1}: ₹${val * 1000}`}
            ></div>
          ))}
        </div>
        <div className="flex justify-between text-sm text-gray-500 mt-2 px-4">
          {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((m, i) => (
            <span key={i}>{m}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
