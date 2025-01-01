import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const RegistrationDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData } = location.state || {};

  if (!formData) {
    return (
      <div className="container my-4">
        <h2 className="text-center">No Details Available</h2>
        <button
          className="btn btn-secondary w-100 mt-4"
          onClick={() => navigate("/")}
        >
          Go Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Registration Details</h2>
      <div className="card">
        <div className="card-body">
          <ul className="list-group">
            {Object.entries(formData).map(([key, value]) => (
              <li key={key} className="list-group-item d-flex justify-content-between">
                <strong>{key.replace(/([A-Z])/g, " $1")}</strong>
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button
        className="btn btn-primary w-100 mt-4"
        onClick={() => navigate("/")}
      >
        Back to Home
      </button>
    </div>
  );
};

export default RegistrationDetailsPage;
