import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const EditPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(location.state.formData);

  // Handle form field updates
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Data updated successfully!");
    navigate("/registration-details", { state: { formData } }); // Navigate to RegistrationDetailsPage
  };

  return (
    <div style={{ backgroundColor: "skyblue", padding: "20px", minHeight: "100vh" }}>
      <div className="container my-4" style={{ backgroundColor: "white", borderRadius: "8px", padding: "20px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
        <h1 className="mb-4 text-center">Edit Page</h1>
        <form onSubmit={handleSubmit}>
          {Object.entries(formData).map(([key, value]) => (
            <div className="mb-3" key={key}>
              <label className="form-label">{key.replace(/([A-Z])/g, " $1")}</label>
              {key === "address" ? (
                <textarea
                  className="form-control"
                  name={key}
                  value={value}
                  onChange={handleChange}
                />
              ) : key === "role" || key === "status" ? (
                <select
                  className="form-select"
                  name={key}
                  value={value}
                  onChange={handleChange}
                >
                  {key === "role" && (
                    <>
                      <option value="Admin">Admin</option>
                      <option value="Reviewer">Reviewer</option>
                      <option value="Coder">Coder</option>
                    </>
                  )}
                  {key === "status" && (
                    <>
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </>
                  )}
                </select>
              ) : key === "gender" ? (
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name={key}
                      value="Male"
                      checked={value === "Male"}
                      onChange={handleChange}
                    />
                    <label className="form-check-label">Male</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name={key}
                      value="Female"
                      checked={value === "Female"}
                      onChange={handleChange}
                    />
                    <label className="form-check-label">Female</label>
                  </div>
                </div>
              ) : (
                <input
                  className="form-control"
                  type={key === "dateOfJoining" ? "date" : "text"}
                  name={key}
                  value={value}
                  onChange={handleChange}
                />
              )}
            </div>
          ))}
          <button type="submit" className="btn btn-primary w-100">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditPage;
