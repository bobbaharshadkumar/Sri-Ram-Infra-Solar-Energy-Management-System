import React from "react";
import "./quotation.css";
function SolarCategories() {
  return (
    <div className="solar-page">
      
{/* Website Header */}
<div className="site-header">
  <div className="site-logo">
    <h2>☀️ SRIRAM INFRA</h2>
    <p>Solar Energy Solutions</p>
  </div>

  <nav className="site-nav">
    <a href="/">Home</a>
    <a href="/coustomer">Customer</a>
    <a href="/customer/enquirymain">Enquiry</a>
  </nav>
</div>

      <div className="solar-header">
        <h2>SRIRAM INFRA</h2>
        <p>Solar Energy Solutions</p>
      </div>

      <div className="solar-heading">
        <h1>Our Solar Installation Services</h1>
        <p>
          Clean Energy for a Brighter Future
        </p>
        <p>
          Explore our solar capacities and estimated installation costs.
        </p>
      </div>

      <div className="solar-container">

        {/* Household Solar */}
        <div className="solar-card household">
          <h2>Household Solar</h2>
          <p>Homes, Villas & Apartments</p>
          <h3>1 kW - 10 kW</h3>

          <div className="price-table">
            <div className="price-row price-header">
              <span>Capacity</span>
              <span>Estimated Cost</span>
            </div>

            <div className="price-row"><span>1 kW</span><span>₹60,000 - ₹75,000</span></div>
            <div className="price-row"><span>2 kW</span><span>₹1.15L - ₹1.40L</span></div>
            <div className="price-row"><span>3 kW</span><span>₹1.65L - ₹2.10L</span></div>
            <div className="price-row"><span>4 kW</span><span>₹2.10L - ₹2.50L</span></div>
            <div className="price-row"><span>5 kW</span><span>₹2.55L - ₹3.20L</span></div>
            <div className="price-row"><span>6 kW</span><span>₹3.00L - ₹3.70L</span></div>
            <div className="price-row"><span>7 kW</span><span>₹3.45L - ₹4.20L</span></div>
            <div className="price-row"><span>8 kW</span><span>₹3.90L - ₹4.70L</span></div>
            <div className="price-row"><span>9 kW</span><span>₹4.35L - ₹5.30L</span></div>
            <div className="price-row"><span>10 kW</span><span>₹4.80L - ₹5.90L</span></div>
          </div>

          <p className="note">
            Actual cost depends on equipment, installation
            and applicable taxes.
          </p>

          <button onClick={() => window.location.href = "/enquiry"}>
            Get a Customized Quote
          </button>
        </div>

        {/* Industrial Solar */}
        <div className="solar-card industrial">
          <h2>Industrial Solar</h2>
          <p>Factories, Manufacturing Units & Warehouses</p>
          <h3>10 kW - 500 kW</h3>

          <div className="price-table">
            <div className="price-row price-header">
              <span>Capacity</span>
              <span>Estimated Cost</span>
            </div>

            <div className="price-row"><span>10 - 25 kW</span><span>₹5L - ₹16L</span></div>
            <div className="price-row"><span>25 - 50 kW</span><span>₹11L - ₹32L</span></div>
            <div className="price-row"><span>50 - 100 kW</span><span>₹20L - ₹65L</span></div>
            <div className="price-row"><span>100 - 250 kW</span><span>₹38L - ₹1.5Cr</span></div>
            <div className="price-row"><span>250 - 500 kW</span><span>₹95L - ₹3Cr</span></div>
          </div>

          <p className="note">
            Final pricing depends on project size,
            equipment and site requirements.
          </p>

          <button onClick={() => window.location.href = "/enquiry"}>
            Get a Customized Quote
          </button>
        </div>

        {/* Large-Scale Solar */}
        <div className="solar-card large-scale">
          <h2>Large-Scale Solar Plants</h2>
          <p>Solar Farms & High-Capacity Projects</p>
          <h3>500 kW - 10 MW+</h3>

          <div className="price-table">
            <div className="price-row price-header">
              <span>Capacity</span>
              <span>Estimated Cost</span>
            </div>

            <div className="price-row"><span>500 kW</span><span>₹1.9 - ₹3 Cr</span></div>
            <div className="price-row"><span>1 MW</span><span>₹3.5 - ₹5.5 Cr</span></div>
            <div className="price-row"><span>2 MW</span><span>₹7 - ₹11 Cr</span></div>
            <div className="price-row"><span>5 MW</span><span>₹17.5 - ₹27.5 Cr</span></div>
            <div className="price-row"><span>10 MW+</span><span>Custom Estimate</span></div>
          </div>

          <p className="note">
            Large projects require detailed technical
            planning and a customized quotation.
          </p>

          <button onClick={() => window.location.href = "/enquiry"}>
            Get a Customized Quote
          </button>
        </div>

      </div>

      <div className="solar-footer">
        <h2>Need More Information?</h2>
        <p>
          For more information, please connect with us
          through our Enquiry Page in your portal 🙏.
        </p>
        <p>Thank you for choosing Sriram Infra!😊</p>
      </div>

    </div>
  );
}

export default SolarCategories;