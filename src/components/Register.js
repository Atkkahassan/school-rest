// Register.js
import React, { useState } from 'react';
import api from '../services/api';
import './Register.css'; // Import CSS file

const Register = () => {
  const [studentName, setStudentName] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [studentClass, setStudentClass] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await api.post('/students', {
        name: studentName,
        registrationNumber,
        class: studentClass,
      });
      alert('Student registered successfully!');
      // Optionally, redirect or update state after successful registration
      setStudentName('');
      setRegistrationNumber('');
      setStudentClass('');
    } catch (error) {
      console.error('Error registering student:', error);
      // Handle registration error (e.g., show error message)
    }
  };

  return (
    <div className="register-container">
      <h2>Register Student</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Student Name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Registration Number"
          value={registrationNumber}
          onChange={(e) => setRegistrationNumber(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Class"
          value={studentClass}
          onChange={(e) => setStudentClass(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
