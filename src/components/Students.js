// Students.js
import React, { useEffect, useState } from 'react';
import api from '../services/api';
import './Students.css'; // Import CSS file

const Students = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch students from API
    const fetchStudents = async () => {
      try {
        const response = await api.get('/students');
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div className="students-container">
      <h2>Registered Students</h2>
      <ul className="students-list">
        {students.map((student) => (
          <li key={student.id} className="student-item">
            <span className="student-name">{student.name}</span>
            <span className="student-reg-number">
              Registration Number: {student.registrationNumber}
            </span>
            <span className="student-class">Class: {student.class}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Students;
