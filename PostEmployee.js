import './pos.css';
import  { useEffect, useState } from 'react';
import {  useNavigate } from 'react-router-dom';
const PostEmployee = () => {
  const [employees, setEmployees] = useState([]);
const navigate = useNavigate
  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/employees");
        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        console.error("Error fetching employees:", error.message);
      }
    };
    fetchEmployee();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/api/employee/${id}`, {
        method: "DELETE",
      });
  
      if (response.ok) {
        // Remove the deleted employee from the state
        setEmployees(employees.filter((employee) => employee.id !== id));
        console.log(`Employee with id: ${id} deleted successfully.`);
      } else {
        console.error("Failed to delete the employee.");
      }
    } catch (error) {
      console.error("Error deleting employee:", error.message);
    }
  };

  const handleUpdate = (id) => {
    navigate("/employee/${id}");
  };
 
  return (
    <div>
      <h2>Employee List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>
                <button onClick={() => handleUpdate(employee.id)}>Update</button>
                <button onClick={() => handleDelete(employee.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostEmployee;
