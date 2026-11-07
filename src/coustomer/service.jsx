
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./service.css";
function ServiceRequest() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullname: "",
    location: "",
    address: "",
    phonenumber: "",
    solarcategory: "",
    solartype: "",
    requirement: "",
  });

  const [loading, setLoading] = useState(false);

  // Input values ni update chestundi
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Form submit chesinappudu execute avuthundi
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    try {
      const response = await fetch("http://localhost:3000/service", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Enterd details are stored in our logs thankyou sriram infra")
        navigate("/sucesspage");
      } else {
        alert(data.message || "Submission failed");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Server connection failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="service-page">

      {/* Header */}
      <header className="service-header">
        <div className="brand">
          <div>☀️</div>

          <div>
            <h2>Sriram Infra</h2>
            <p>Solar Energy Solutions</p>
          </div>
        </div>

        <span className="header-label">Customer Service</span>
      </header>

      {/* Hero Section */}
      <section className="service-hero">
        <div>
          <p className="eyebrow">SOLAR SERVICE REQUEST</p>

          <h1>
            Need Support with
            <br />
            Your <span>Solar System?</span>
          </h1>

          <p className="hero-description">
            Tell us what you need. Our team is here to help
            you at every step of your solar journey.
          </p>
        </div>
      </section>

      {/* Service Request Form */}
      <main className="form-container">
        <div className="form-heading">
          <div>
            <h2>Service Request Form</h2>
            <p>
              Share your details and our team will get in touch.
            </p>
          </div>

          <div className="form-icon">☷</div>
        </div>

        <form onSubmit={handleSubmit}>

          {/* Customer Name and Location */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="fullname">
                Customer Name *
              </label>

              <input
                id="fullname"
                type="text"
                name="fullname"
                placeholder="Enter your full name"
                value={formData.fullname}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="location">Location *</label>

              <input
                id="location"
                type="text"
                name="location"
                placeholder="Enter your city or village"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Full Address */}
          <div className="form-group">
            <label htmlFor="address">Full Address *</label>

            <textarea
              id="address"
              name="address"
              placeholder="House number, street, area and pincode"
              value={formData.address}
              onChange={handleChange}
              rows="3"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="form-group">
            <label htmlFor="phonenumber">
              Phone Number *
            </label>

            <input
              id="phonenumber"
              type="tel"
              name="phonenumber"
              placeholder="Enter your 10-digit mobile number"
              value={formData.phonenumber}
              onChange={handleChange}
              pattern="[6-9][0-9]{9}"
              maxLength="10"
              title="Enter a valid 10-digit Indian mobile number"
              required
            />
          </div>

          {/* Solar Category */}
          <div className="form-group">
            <label>Type of Solar *</label>

            <div className="solar-options">
              {[
                "Residential",
                "Commercial",
                "Industrial",
                "Agricultural",
              ].map((type) => (
                <label
                  className={`solar-option ${
                    formData.solarcategory === type
                      ? "selected"
                      : ""
                  }`}
                  key={type}
                >
                  <input
                    type="radio"
                    name="solarcategory"
                    value={type}
                    checked={formData.solarcategory === type}
                    onChange={handleChange}
                    required
                  />

                  <span className="solar-symbol">
                    {type === "Residential" && "⌂"}
                    {type === "Commercial" && "▦"}
                    {type === "Industrial" && "⚙"}
                    {type === "Agricultural" && "♧"}
                  </span>

                  <strong>{type}</strong>

                  <small>
                    {type === "Residential" && "For homes"}
                    {type === "Commercial" && "For businesses"}
                    {type === "Industrial" && "For industries"}
                    {type === "Agricultural" && "For farming"}
                  </small>
                </label>
              ))}
            </div>
          </div>

          {/* Solar System Type */}
          <div className="form-group">
            <label htmlFor="solartype">
              Solar System Type *
            </label>

            <select
              id="solartype"
              name="solartype"
              value={formData.solartype}
              onChange={handleChange}
              required
            >
              <option value="">
                Select solar system type
              </option>

              <option value="On-Grid">On-Grid Solar</option>
              <option value="Off-Grid">Off-Grid Solar</option>
              <option value="Hybrid">Hybrid Solar</option>
              <option value="Not Sure">
                Not Sure - Need Guidance
              </option>
            </select>
          </div>

          {/* Customer Requirement */}
          <div className="form-group">
            <label htmlFor="requirement">
              Your Requirement *
            </label>

            <textarea
              id="requirement"
              name="requirement"
              placeholder="Describe the solar system or service you need..."
              value={formData.requirement}
              onChange={handleChange}
              rows="4"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            className="submit-button"
            type="submit"
            disabled={loading}
          >
            {loading
              ? "Submitting..."
              : "Submit Service Request →"}
          </button>

          <p className="privacy-note">
            Your trust matters to us. Our team is here to help.
          </p>

        </form>
      </main>

      {/* Footer */}
      <footer className="service-footer">
        <h3>Sriram Infra</h3>

        <p>
          We stand with you beyond installation.
          <br />
          Together for a Brighter Future.
        </p>
      </footer>

    </div>
  );
}
export default ServiceRequest;
