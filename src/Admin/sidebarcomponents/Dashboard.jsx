
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";

function Dash() {
  const [totalcustomers, settotalcustomers] = useState("");
  const [totalenquiries,settoalenquiries]=useState("");
  useEffect(() => {
    fetch("http://localhost:3000/admindashcustomers")
      .then((response) => response.json())
      .then((data) => {
        settotalcustomers(data.noofcustomers);
      })
      .catch((error) => {
        console.log("Error fetching customers:", error);
      });
  }, []);
  useEffect(()=>{
    fetch("http://localhost:3000/admindashenquiries")
    .then((response)=>response.json())
    .then((data)=>{
      settoalenquiries(data.noofenquiries);
    })
    .catch((error)=>{
      console.log("error fetching customers: ",error);
    })
  },[]);
  return (
    <div className="db-page">

      {/* TOP NAVBAR */}
      <header className="db-navbar">

        <Link to="/" className="db-logo">
          <span className="db-solar-logo">☀️</span>
          <span>SRI RAM INFRA</span>
        </Link>

        <nav className="db-nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="db-admin-label">
          Admin
        </div>

      </header>

      {/* DASHBOARD CARDS */}
      <div className="db-cards">

        <div className="db-card db-card-one">
          <h2>Total Customers</h2>
          <p>{totalcustomers}</p>
        </div>

        <div className="db-card db-card-second">
          <h2>New Enquiries</h2>
          <p>{totalenquiries}</p>
        </div>

        <div className="db-card db-card-third">
          <h2>Projects to complete</h2>
          <p>—</p>
        </div>
        <div className="db-card db-card-fourth">
          <h2>Pending service requests</h2>
          <p>—</p>
        </div>
      </div>
    </div>
  );
}

export default Dash;
