import React, { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../data/api';
const EditProductModal = ({ product, onClose, onUpdate }) => {
  const [formData, setFormData] = useState({ ...product });
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }
    if (image) data.append('image', image);

    try {
      await axios.put(`${API_URL}/${product._id}`, data);
      onUpdate();
      onClose();
    } catch (error) {
      console.error('Update error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md"
      >
        <h3 className="text-xl font-bold mb-4 text-center">Edit Product</h3>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Product Name"
          className="w-full p-2 border mb-2 rounded"
          required
        />

        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
          className="w-full p-2 border mb-2 rounded"
          required
        />

        <input
          type="number"
          name="autalprice"
          value={formData.autalprice}
          onChange={handleChange}
          placeholder="Actual Price"
          className="w-full p-2 border mb-2 rounded"
        />

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full p-2 border mb-2 rounded"
        />

        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="w-full mb-2"
        />

        <div className="flex justify-between mt-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            {loading ? 'Updating...' : 'Update'}
          </button>
        </div>
      </form>
    </div>
  );
};
export default EditProductModal;
