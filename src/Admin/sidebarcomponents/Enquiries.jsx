
import { useState, useEffect } from "react";
import "./Enquiries.css";
function Enquiries() {
    const [enquiries, setenquiries] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/enquiryretriving")
            .then((response) => response.json())
            .then((data) => {
                setenquiries(data.data);
            })
            .catch((error) => {
                console.log("Error fetching enquiries:", error);
            });
    }, []);

    const completeConsultation = async (id) => {
        try {
            const response = await fetch(
                `http://localhost:3000/update-consultation/${id}`,
                {
                    method: "PATCH"
                }
            );
            const result = await response.json();
            if (!response.ok) {
                throw new Error(result.message || "Update failed");
            }

            setenquiries((previous) =>
                previous.map((item) =>
                    item.id === id
                        ? { ...item, status: result.data.status }
                        : item
                )
            );
        } catch (err) {
            console.error("Error updating consultation:", err);
            alert(err.message || "Could not update consultation status.");
        }
    };
    return (
        <div className="enquiries-page">
            <div className="enquiries-header">
                <div>
                    <h2>Customer Enquiries</h2>
                    <p>View and manage customer enquiry details.</p>
                </div>

                <div className="enquiries-count">
                    Total Enquiries: {enquiries.length}
                </div>
            </div>

            <div className="enquiries-table-wrapper">
                <table className="enquiries-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Full Name</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                            <th>Location</th>
                            <th>Selection</th>
                            <th>Message</th>
                            <th>Status</th>
                            <th>Consultation</th>
                        </tr>
                    </thead>

                    <tbody>
                        {enquiries.length > 0 ? (
                            enquiries.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>

                                    <td className="enquiry-name">
                                        {item.fullname}
                                    </td>

                                    <td>{item.phonenumber}</td>

                                    <td className="enquiry-email">
                                        {item.email}
                                    </td>

                                    <td>{item.location}</td>

                                    <td>{item.selection}</td>

                                    <td className="enquiry-message">
                                        {item.message}
                                    </td>

                                    <td>
                                        <span className="enquiry-status">
                                            {item.status}
                                        </span>
                                    </td>
                                    <td>
                                        <button
                                            className="consultation-btn"
                                            onClick={() =>
                                                completeConsultation(item.id)
                                            }
                                            disabled={
                                                item.status === "Consultation Completed"
                                            }
                                        >
                                            {item.status === "Consultation Completed"
                                                ? "Completed"
                                                : "Consultation Done"}
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="9"
                                    className="enquiries-empty"
                                >
                                    No enquiries found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Enquiries;

