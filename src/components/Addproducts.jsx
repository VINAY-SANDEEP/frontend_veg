import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    category: 'Leafy',
    price: '',
    autalprice: '',
    stock: '',
    description: '',
    isAvailable: true,
  });
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');

  const categories = ['Leafy', 'Root', 'Fruit', 'Organic', 'Seasonal', 'Others'];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }
    if (image) data.append('image', image);

    try {
      const res = await axios.post('http://localhost:3000/Addproduct', data);
      setMessage('✅ Product uploaded successfully!');
       console.log(res)
    } catch (error) {
      console.error(error);
      setMessage('❌ Upload failed');
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center text-green-700">Add New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />

        <select
          name="category"
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        >
          {categories.map(cat => <option key={cat}>{cat}</option>)}
        </select>

        <div className="flex gap-4">
          <input
            type="number"
            name="price"
            placeholder="Price"
            onChange={handleChange}
            required
            className="w-1/2 p-2 border border-gray-300 rounded"
          />
          <input
            type="number"
            name="autalprice"
            placeholder="Actual Price"
            onChange={handleChange}
            required
            className="w-1/2 p-2 border border-gray-300 rounded"
          />
        </div>

        <input
          type="number"
          name="stock"
          placeholder="Stock"
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />

        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        ></textarea>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="isAvailable"
            checked={formData.isAvailable}
            onChange={handleChange}
            className="accent-green-600"
          />
          <label>Available</label>
        </div>

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full"
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
        >
          Upload Product
        </button>
      </form>

      {message && <p className="mt-4 text-center text-sm font-medium text-blue-600">{message}</p>}
    </div>
  );
};

export default ProductForm;
