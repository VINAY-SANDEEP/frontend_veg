const Customers = () => {
  const customers = [
    {
      id: '#C001',
      name: 'Ravi Kumar',
      email: 'ravi.kumar@gmail.com',
      phone: '9876543210',
      joined: '2024-10-12',
      orders: 5,
    },
    {
      id: '#C002',
      name: 'Priya Mehta',
      email: 'priya.mehta@yahoo.com',
      phone: '9898989898',
      joined: '2024-11-01',
      orders: 8,
    },
    {
      id: '#C003',
      name: 'Arun Das',
      email: 'arun.das@outlook.com',
      phone: '9123456789',
      joined: '2025-01-15',
      orders: 2,
    },
    {
      id: '#C004',
      name: 'Meena Singh',
      email: 'meena.singh@gmail.com',
      phone: '9000000000',
      joined: '2025-03-05',
      orders: 10,
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Deilvery Boys</h1>

      <div className="bg-white p-6 rounded-xl shadow-md overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="text-left text-gray-600 border-b">
              <th className="py-2">Deilvery Boys</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Joined Date</th>
              <th>Total Orders</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((cust, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="py-2">{cust.id}</td>
                <td>{cust.name}</td>
                <td>{cust.email}</td>
                <td>{cust.phone}</td>
                <td>{cust.joined}</td>
                <td>{cust.orders}</td>
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

export default Customers;
