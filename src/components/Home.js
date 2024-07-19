// Home.js
import React, { useEffect, useState } from 'react';
import api from '../services/api';
import './Home.css';

const Home = () => {
  const [foodItems, setFoodItems] = useState([]);

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

  return (
    <div className="container">
      <h2 className="title">Food Items</h2>
      <ul className="food-list">
        {foodItems.map((food) => (
          <li key={food.id} className="food-item">
            <span className="food-name">{food.name}</span>
            <span className="food-description">{food.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
