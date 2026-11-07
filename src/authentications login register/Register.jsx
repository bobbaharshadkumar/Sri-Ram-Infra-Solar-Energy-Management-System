import "./Register.css";
import {useState} from "react";
function Register() {
    const[email,setemail]=useState("");
    const[name,setname]=useState("");
    const[password,setpassword]=useState("");
    const[typeofperson,settypeofperson]=useState("");
    const handleregister = async(e)=>{
         e.preventDefault();
        const response = await fetch("http://localhost:3000/register",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({
                email:email,
                password:password,
                name:name,
                typeofperson:typeofperson
            })
        })
        const data = await response.json();
        if (response.ok) {
        alert("Details Submitted Successfully");
        } else {
        alert(data.message || "Registration Failed");
    }
    }
    return (
        <div className="register-page">

            <div className="register-box">

                <h1>Create</h1>
                <h1>Account</h1>
                <p>Register for Sri Ram Infra</p>

                <form onSubmit={handleregister}>

                    <label>Name</label>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(name)=>{setname(name.target.value)}}
                    />

                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(email)=>{setemail(email.target.value)}}
                    />

                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(password)=>{setpassword(password.target.value)}}
                    />

                    <label>Register As</label>

                    <select
                    value={typeofperson}
                    onChange={(type)=>{settypeofperson(type.target.value)}}
                    >
                        <option value="customer">Customer</option>
                        <option value="admin">Admin</option>
                    </select>
                          <button type="submit">
                                   Register
                          </button>
                </form>

            </div>

        </div>
    );
}

export default Register;