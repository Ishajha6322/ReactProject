import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  // Initialize React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Handle form submission
  const onSubmit = (data) => {
    navigate("/edit", { state: { formData: data } });
  };

  return (
    <div style={{ backgroundColor: "skyblue", padding: "20px", minHeight: "100vh" }}>
      <div className="container mt-5" style={{ backgroundColor: "white", borderRadius: "8px", padding: "20px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
        <h1 className="text-center mb-4">Home Page</h1>
        <form onSubmit={handleSubmit(onSubmit)} style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "8px" }}>
          <div className="row">
            {/* First Name */}
            <div className="col-md-6 mb-3">
              <label>First Name</label>
              <input
                type="text"
                className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
                {...register("firstName", { required: "First Name is required" })}
              />
              {errors.firstName && (
                <div className="invalid-feedback">{errors.firstName.message}</div>
              )}
            </div>

            {/* Last Name */}
            <div className="col-md-6 mb-3">
              <label>Last Name</label>
              <input
                type="text"
                className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
                {...register("lastName", { required: "Last Name is required" })}
              />
              {errors.lastName && (
                <div className="invalid-feedback">{errors.lastName.message}</div>
              )}
            </div>
          </div>

          <div className="row">
            {/* Email */}
            <div className="col-md-6 mb-3">
              <label>Email</label>
              <input
                type="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" },
                })}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email.message}</div>
              )}
            </div>

            {/* Phone Number */}
            <div className="col-md-6 mb-3">
              <label>Phone Number</label>
              <input
                type="text"
                className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                {...register("phone", {
                  required: "Phone is required",
                  pattern: { value: /^\d{10}$/, message: "Phone must be 10 digits" },
                })}
              />
              {errors.phone && (
                <div className="invalid-feedback">{errors.phone.message}</div>
              )}
            </div>
          </div>

          {/* Gender */}
          <div className="mb-3">
            <label>Gender</label>
            <div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="form-check-input"
                  value="Male"
                  {...register("gender", { required: "Gender is required" })}
                />
                <label className="form-check-label">Male</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="form-check-input"
                  value="Female"
                  {...register("gender", { required: "Gender is required" })}
                />
                <label className="form-check-label">Female</label>
              </div>
            </div>
            {errors.gender && <div className="text-danger">{errors.gender.message}</div>}
          </div>

          {/* Date of Joining */}
          <div className="mb-3">
            <label>Date of Joining</label>
            <input
              type="date"
              className={`form-control ${errors.dateOfJoining ? "is-invalid" : ""}`}
              {...register("dateOfJoining", { required: "Date of Joining is required" })}
            />
            {errors.dateOfJoining && (
              <div className="invalid-feedback">{errors.dateOfJoining.message}</div>
            )}
          </div>

          {/* Role */}
          <div className="mb-3">
            <label>Role</label>
            <select
              className={`form-select ${errors.role ? "is-invalid" : ""}`}
              {...register("role", { required: "Role is required" })}
            >
              <option value="">Select</option>
              <option value="Admin">Admin</option>
              <option value="Reviewer">Reviewer</option>
              <option value="Coder">Coder</option>
            </select>
            {errors.role && <div className="invalid-feedback">{errors.role.message}</div>}
          </div>

          {/* Status */}
          <div className="mb-3">
            <label>Status</label>
            <select
              className={`form-select ${errors.status ? "is-invalid" : ""}`}
              {...register("status", { required: "Status is required" })}
            >
              <option value="">Select</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
            {errors.status && <div className="invalid-feedback">{errors.status.message}</div>}
          </div>

          {/* Address */}
          <div className="mb-3">
            <label>Address</label>
            <textarea
              className={`form-control ${errors.address ? "is-invalid" : ""}`}
              {...register("address", { required: "Address is required" })}
            ></textarea>
            {errors.address && <div className="invalid-feedback">{errors.address.message}</div>}
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
