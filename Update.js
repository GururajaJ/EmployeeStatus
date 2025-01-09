
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './Upd.css';

const Update = () => {
  const { id } = useParams(); // Extract the employee ID from the URL.
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({ name: "", email: "" });

  useEffect(() => {
    // Fetch employee details when the component loads.
    const fetchEmployee = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/employee/${id}`);
        const data = await response.json();
        setEmployee(data);
      } catch (error) {
        console.error("Error fetching employee:", error.message);
      }
    };

    fetchEmployee();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/api/employee/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(employee),
      });

      if (response.ok) {
        console.log(`Employee with id: ${id} updated successfully.`);
        navigate("/employees"); // Redirect to the employee list page.
      } else {
        console.error("Failed to update employee.");
      }
    } catch (error) {
      console.error("Error updating employee:", error.message);
    }
  };

  return (
    <div className="form-container">
      <h2>Update Employee</h2>
      <form onSubmit={handleUpdate}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={employee.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={employee.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="save-button">Save</button>
      </form>
    </div>
  );
};

export default Update;
