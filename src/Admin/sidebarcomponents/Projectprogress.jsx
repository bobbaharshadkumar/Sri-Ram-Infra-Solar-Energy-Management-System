
import React, { useState } from "react";
import "./Projectprogress.css";

function Projectprogress() {
  const [customer, setCustomer] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <div className="project-progress-page">

      <div className="project-progress-header">
        <div className="progress-icon">☀️</div>
        <div>
          <h2>Project Progress</h2>
          <p>Manage customer project progress</p>
        </div>
      </div>

      <div className="progress-form-card">

        <div className="progress-form-heading">
          <h3>Update Project Progress</h3>
          <p>
            Select a customer and update their current
            project status.
          </p>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="progress-input-group">
            <label htmlFor="customer">
              Select Customer
            </label>

            <select
              id="customer"
              value={customer}
              onChange={(e) => setCustomer(e.target.value)}
              required
            >
              <option value="">
                -- Select Customer --
              </option>
              <option value="customer1">Customer 1</option>
              <option value="customer2">Customer 2</option>
              <option value="customer3">Customer 3</option>
              <option value="customer4">Customer 4</option>
            </select>
          </div>

          <div className="progress-input-group">
            <label htmlFor="status">
              Project Progress Status
            </label>

            <select
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
            >
              <option value="">
                -- Select Project Status --
              </option>
              <option value="Request Received">
                Request Received
              </option>
              <option value="Site Inspection">
                Site Inspection
              </option>
              <option value="Installation in Progress">
                Installation in Progress
              </option>
              <option value="Installation Completed">
                Installation Completed
              </option>
              <option value="Project Completed">
                Project Completed
              </option>
            </select>
          </div>

          <button
            type="submit"
            className="update-progress-btn"
          >
            Update Progress
          </button>

        </form>
      </div>
    </div>
  );
}

export default Projectprogress;
