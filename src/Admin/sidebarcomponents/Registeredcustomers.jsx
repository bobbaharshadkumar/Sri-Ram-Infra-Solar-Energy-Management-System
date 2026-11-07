import {useState,useEffect} from "react";
import "./Registeredcustomers.css";
function Registeredcustomers() {
  const[Registeredcustomers,setRegisteredcustomers]=useState("");
  useEffect(()=>{
    fetch("http://localhost:3000/registeredcustomersretriving")
    .then((response)=>response.json())
    .then((data)=>{
      setRegisteredcustomers(data.data)
    })
    .catch((err)=>{
      console.log("Error fetching enquiries:", err);
    })
  },[]);
  return(
    <div className="registered-customers-page">
      <h2>Registered Customers</h2>

  <p>Total Registered Users: {Registeredcustomers.length}</p>

  <table>
    <thead>
      <tr>
        <th>S.No</th>
        <th>Name</th>
        <th>Type of Person</th>
        <th>Email</th>
      </tr>
    </thead>

    <tbody>
      {Registeredcustomers.length > 0 ? (
        Registeredcustomers.map((item) => (
          <tr key={item.sno}>
            <td>{item.sno}</td>
            <td>{item.name}</td>
            <td>{item.typeofperson}</td>
            <td>{item.email}</td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="4">No registered customers found.</td>
        </tr>
      )}
    </tbody>
  </table>
    </div>
  );
}

export default Registeredcustomers;