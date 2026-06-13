import { useState } from "react";

export default function DynamicForm() {
  // Single state object for all form fields
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    role: "Developer",
  });

  // Universal change handler for all inputs
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData, // Copy previous state
      [name]: value, // Update only the changed field
    }));
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "20px auto",
        fontFamily: "sans-serif",
      }}
    >
      <h2>Registration Form</h2>

      {/* Form Fields */}
      <form style={{ display: "flex", flexDirection: "col", gap: "15px" }}>
        <div>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Username:
          </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div>
          <label
            style={{
              display: "block",
              marginBottom: "5px",
              marginLeft: "60px",
            }}
          >
            Role:
          </label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          >
            <option value="Developer">Developer</option>
            <option value="Designer">Designer</option>
            <option value="Manager">Manager</option>
          </select>
        </div>
      </form>

      {/* Real-time Display */}
      <div
        style={{
          marginTop: "30px",
          padding: "15px",
          background: "#f5f5f5",
          borderRadius: "5px",
        }}
      >
        <h3>Real-Time Live Preview</h3>
        <p>
          <strong>Username:</strong> {formData.username || "<em>Empty</em>"}
        </p>
        <p>
          <strong>Email:</strong> {formData.email || "<em>Empty</em>"}
        </p>
        <p>
          <strong>Role:</strong> {formData.role}
        </p>

        <h4>Raw JSON State:</h4>
        <pre
          style={{
            background: "#e0e0e0",
            padding: "10px",
            borderRadius: "3px",
          }}
        >
          {JSON.stringify(formData, null, 2)}
        </pre>
      </div>
    </div>
  );
}
