import React, { useState } from 'react';
import './Emp.css';
import {useNavigate} from "react-router-dom"
const Employee = () => {
  // Initialize state variables for the form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [department, setDepartment] = useState('');
   
  // Handle form field changes dynamically
  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === 'name') {
      setName(value);
    } else if (id === 'email') {
      setEmail(value);
    } else if (id === 'phone') {
      setPhone(value);
    } else if (id === 'department') {
      setDepartment(value);
    }
  };
  const navigate = useNavigate();
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object to send in the POST request
    const formData = {
      name,
      email,
      phone,
      department,
    };

    // Log or process the form data
    console.log('Form Data:', formData);

    try {
      const response = await fetch('http://localhost:8080/api/employee', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log('Employee:', data);
      navigate("/post-employee")
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Employee Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleChange} // Dynamically handle state change
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleChange} // Dynamically handle state change
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={handleChange} // Dynamically handle state change
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="department">Department:</label>
          <input
            type="text"
            id="department"
            value={department}
            onChange={handleChange} // Dynamically handle state change
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Employee;
