// AdminDashboard.js
import React, { useState, useEffect } from 'react';
import api from '../services/api';
import './AdminDashboard.css'; // Import CSS file

const AdminDashboard = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [newFoodName, setNewFoodName] = useState('');
  const [newFoodDescription, setNewFoodDescription] = useState('');

  useEffect(() => {
    // Fetch food items from API
    const fetchFoodItems = async () => {
      try {
        const response = await api.get('/foods');
        setFoodItems(response.data);
      } catch (error) {
        console.error('Error fetching food items:', error);
      }
    };

    fetchFoodItems();
  }, []);

  const handleAddFood = async () => {
    try {
      const response = await api.post('/foods', {
        name: newFoodName,
        description: newFoodDescription,
      });
      setFoodItems([...foodItems, response.data]);
      setNewFoodName('');
      setNewFoodDescription('');
    } catch (error) {
      console.error('Error adding food:', error);
    }
  };

  const handleDeleteFood = async (foodId) => {
    try {
      await api.delete(`/foods/${foodId}`);
      setFoodItems(foodItems.filter((food) => food.id !== foodId));
    } catch (error) {
      console.error('Error deleting food:', error);
    }
  };

  return (
    <div className="admin-container">
      <h2>Admin Dashboard</h2>
      <div className="add-food">
        <h3>Add Food Item</h3>
        <input
          type="text"
          placeholder="Food Name"
          value={newFoodName}
          onChange={(e) => setNewFoodName(e.target.value)}
          required
        />
        <textarea
          placeholder="Food Description"
          value={newFoodDescription}
          onChange={(e) => setNewFoodDescription(e.target.value)}
          required
        />
        <button onClick={handleAddFood}>Add Food</button>
      </div>
      <div className="food-list">
        <h3>Current Food Items</h3>
        <ul>
          {foodItems.map((food) => (
            <li key={food.id} className="food-item">
              <span className="food-name">{food.name}</span>
              <span className="food-description">{food.description}</span>
              <button onClick={() => handleDeleteFood(food.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
