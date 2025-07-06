const Orders = () => {
  const orders = [
    {
      id: '#ORD001',
      customer: 'Ravi Kumar',
      date: '2025-07-01',
      amount: '₹1,200',
      status: 'Delivered',
      payment: 'Paid',
    },
    {
      id: '#ORD002',
      customer: 'Priya Mehta',
      date: '2025-07-03',
      amount: '₹850',
      status: 'Pending',
      payment: 'Unpaid',
    },
    {
      id: '#ORD003',
      customer: 'Arun Das',
      date: '2025-07-04',
      amount: '₹990',
      status: 'Cancelled',
      payment: 'Refunded',
    },
    {
      id: '#ORD004',
      customer: 'Meena Singh',
      date: '2025-07-05',
      amount: '₹1,450',
      status: 'Delivered',
      payment: 'Paid',
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Orders</h1>

      <div className="bg-white p-6 rounded-xl shadow-md overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="text-left text-gray-600 border-b">
              <th className="py-2">Order ID</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="py-2">{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.date}</td>
                <td>{order.amount}</td>
                <td>
                  <span
                    className={`px-2 py-1 rounded text-sm font-medium ${
                      order.status === 'Delivered'
                        ? 'bg-green-100 text-green-600'
                        : order.status === 'Pending'
                        ? 'bg-yellow-100 text-yellow-600'
                        : 'bg-red-100 text-red-600'
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td>
                  <span
                    className={`px-2 py-1 rounded text-sm font-medium ${
                      order.payment === 'Paid'
                        ? 'bg-green-100 text-green-600'
                        : order.payment === 'Unpaid'
                        ? 'bg-yellow-100 text-yellow-600'
                        : 'bg-blue-100 text-blue-600'
                    }`}
                  >
                    {order.payment}
                  </span>
                </td>
                <td>
                  <button className="text-sm text-red-600 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
