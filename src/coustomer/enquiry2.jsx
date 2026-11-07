import "./enquiry2.css";
import { useNavigate } from "react-router-dom";
function NewEnquiry(){
    const navigate = useNavigate();
    const handlesubmit=async(e)=>{
        e.preventDefault();
        const form = e.target;
        try{
            const response = await fetch("http://localhost:3000/enquiryform",{
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                fullname:form.fullname.value,
                phonenumber:form.phonenumber.value,
                email:form.email.value,
                locations:form.location.value,
                selection:form.selection.value,
                message:form.message.value
            })    
            })
            const data = await response.json();

            if (response.ok) {
             navigate("/sucesspage")
            }else {
            alert(data.message || "Submission failed");
            }
        }
        catch(err){
          console.error("Error:", err);
          alert("Server connection failed");
        }
    }
    return(
        <div className="new-enquiry-page">

            <header className="enquiry-header">
                <div className="solar-logo">
                    ☀️ <span>Solar Energy</span>
                </div>

                <nav>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/services">Services</a>
                    <a href="/enquiry">Enquiry</a>
                    <a href="/customer">Customer</a>
                </nav>
            </header>

            <main className="enquiry-main">
                <div className="enquiry-card">

                    <div className="form-icon">☀</div>

                    <h1>New Enquiry</h1>
                    <h2>Tell us what you're looking for</h2>

                    <p className="form-description">
                        Fill in the form below and our team will
                        get in touch with you as soon as possible.
                    </p>

                    <form onSubmit={handlesubmit}>

                        <div className="form-grid">

                            <div className="form-group">
                                <label>Full Name *</label>
                                <input
                                    type="text"
                                    placeholder="Enter your full name"
                                    required
                                    name="fullname"
                                />
                            </div>

                            <div className="form-group">
                                <label>Phone Number *</label>
                                <input
                                    type="tel"
                                    placeholder="Enter your phone number"
                                    required
                                    name="phonenumber"
                                />
                            </div>

                            <div className="form-group">
                                <label>Email Address *</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    required
                                    name="email"
                                />
                            </div>

                            <div className="form-group">
                                <label>Location *</label>
                                <input
                                    type="text"
                                    placeholder="Enter your location"
                                    required
                                    name="location"
                                />
                            </div>

                            <div className="form-group full-width">
                                <label>Type of Enquiry *</label>
                                <select name="selection" required defaultValue="">
                                   <option value="" disabled>
                                    Select enquiry type
                                   </option>
                                   <option value="solarpanels">
                                    Solar panels
                                   </option>
                                   <option value="Installation">
                                        Installation
                                    </option>
                                    <option value="Pricing">
                                        Pricing
                                    </option>
                                    <option value="Maintenance">
                                        Maintenance
                                    </option>
                                    <option value="Other">
                                        Other
                                    </option>
                                </select>
                            </div>

                            <div className="form-group full-width">
                                <label>Message / Additional Details</label>
                                <textarea
                                    rows="4"
                                    placeholder="Write your message here..."
                                    name="message"
                                />
                            </div>

                        </div>

                        <button type="submit" className="submit-enquiry" >
                             Submit Enquiry
                        </button>

                    </form>
                </div>
            </main>
        </div>
    );
}
export default NewEnquiry;
