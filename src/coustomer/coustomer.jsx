import "./coustomer.css"
import { Link } from "react-router-dom";
import Greeting from "../assets/coustomergreetingsoalr.jpg";
import Progress from "../assets/solarworkimage.jpg";
import React, { useEffect, useState } from "react";
function Coustomer(){
    const[enquiriescount,setenquiriescount]=useState(0);
    useEffect(()=>{
        fetch("http://localhost:3000/enquirycount")
        .then((response)=>{
            if(!response.ok){
                throw new Error("Failed to fetch enquiry count");
            }
            return response.json();
        })
        .then((data)=>{
            setenquiriescount(data.total_enquiries)
        })
        .catch((error) => {
          console.error("Error fetching enquiry count:", error);
        });
    },[])
    return (
       <div className="mainone">
            <nav className="navbarsection">
                  <div className="logo">🌤️ Sri Ram Infra</div>

                  <div className="nav-links">

                      <Link to="/Home">Home</Link>

                      <Link to="/about">About</Link>

                      <Link to="/services">Services</Link>

                      <Link to="/projects">Projects</Link>

                      <Link to="/contact">Contact</Link>

                 </div>

            </nav>
            <div className="coustomerportal">
            <aside className="sidebar">
                    <h2>Sri Ram Infra</h2>
                    <Link to="/coustomer">Dashboard</Link>
                    <Link to="/customer/enquirymain">My Enquiry</Link>
                    <Link to="/customer/quotation">Quotation(Estimation help?)</Link>
                    <Link to="/customer/project">Project Tracking</Link>
                    <Link to="/servicepagehere">Service Request</Link>
                    <Link to="/customer/profile">Profile</Link>
            </aside>
            <main>
                <div className="part1">
                     <div>
                           <h3>Welcome Harshad greeting from Sriraminfra</h3>
                           <p>Thank you for choosing Sri Ram Infra.
                               Together we build a cleaner, greener tomorrow.</p>
                     </div>
                     <div className="part1img">
                        <img src={Greeting} alt="imageforgreeting"/>
                     </div>
                </div>
                <div className="part2">
                    <div className="box">
                        <div className="inner">
                            <h2>My Enquiry</h2>
                            <p>{enquiriescount}</p>
                            <Link>Veiw details ➤</Link>
                        </div>
                    </div>
                    <div className="box">
                        <div className="inner">
                            <h2>Quotation</h2>
                            <p>we are allowing the loved customer to clarify enquiry doubts and contact to team!!</p>
                            <Link>Veiw details ➤</Link>
                        </div>
                    </div>
                    <div className="box">
                        <div className="inner">
                            <h2>Project Status</h2>
                            <h3>1</h3>
                            <Link>Veiw details ➤</Link>
                        </div>
                    </div>
                    <div className="box">
                        <div className="inner">
                            <h2>Service requests</h2>
                            <h3>0</h3>
                            <Link>Veiw details ➤</Link>
                        </div>
                    </div>
                </div>
                <div className="progress">
                    <div className="image"><img src={Progress} alt="last image" /></div>
                    <div>Your Progress is not updated wait</div>
                </div>
            </main>
        </div>
       </div>
    );
}
export default Coustomer;