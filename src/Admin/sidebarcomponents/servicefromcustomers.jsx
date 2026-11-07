
import { useState, useEffect } from "react";
import "./servicefromcustomers.css";
function Service() {
  const [services, setservices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/servicerequestfromcustomer")
      .then((response) => response.json())
      .then((data) => {
        setservices(data.data);
      })
      .catch((err) => {
        console.log("error have occured", err);
      });
  }, []);
  
const completeconsultation = async (id) => {
  try {
    const response = await fetch(
      `http://localhost:3000/consulationofservice/${id}`,
      {
        method: "PATCH"
      }
    );

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Update failed");
    }

    setservices((previous) => {
      return previous.map((service) =>
        service.id === id
          ? { ...service, status: result.data.status }
          : service
      );
    });

    alert("Consultation completed successfully!");

  } catch (err) {
    console.error("Error updating consultation:", err);
    alert(err.message || "Could not update consultation status.");
  }
};
  return (
    <div className="sr-service-container">

      {/* Heading section */}
      <div className="sr-service-header">
        <div>
          <h2 className="sr-service-title">
            Customer Service Requests
          </h2>

          <p className="sr-service-subtitle">
            View and manage customer service request details.
          </p>
        </div>

        <div className="sr-service-count">
          Total Requests: {services.length}
        </div>
      </div>

      {/* Service requests table */}
      <div className="sr-service-table-wrapper">
        <table className="sr-service-table">

          <thead className="sr-service-thead">
            <tr>
              <th>ID</th>
              <th>Full Name</th>
              <th>Location</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Solar Category</th>
              <th>Status</th>
              <th>Conformation</th>
            </tr>
          </thead>

          <tbody>
            {services.map((service) => (
              <tr key={service.id}>
                <td>{service.id}</td>
                <td className="sr-service-name">
                  {service.fullname}
                </td>
                <td>{service.location}</td>
                <td>{service.address}</td>
                <td>{service.phonenumber}</td>
                <td>{service.solarcategory}</td>
                <td>
                  <span className="sr-service-status">
                    {service.status}
                  </span>
                </td>
                <td>
                       <button
    className="consulatationbutton"
    onClick={() => completeconsultation(service.id)}
    disabled={service.status === "Consultation Completed"}
  >
    {service.status === "Consultation Completed"
      ? "Completed"
      : "Complete Consultation"}
  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
}

export default Service;

