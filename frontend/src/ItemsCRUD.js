import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ItemsCRUD() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await axios.get('/api/items');
    setItems(response.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await axios.put(`/api/items/${editingId}`, { name, description });
    } else {
      await axios.post('/api/items', { name, description });
    }
    setName('');
    setDescription('');
    setEditingId(null);
    fetchItems();
  };

  const handleEdit = (item) => {
    setName(item.name);
    setDescription(item.description);
    setEditingId(item.id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`/api/items/${id}`);
    fetchItems();
  };

  return (
    <div>
      <h2>Items CRUD</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
        />
        <button type="submit">{editingId ? 'Update' : 'Create'}</button>
      </form>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.description}
            <button onClick={() => handleEdit(item)}>Edit</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemsCRUD;
