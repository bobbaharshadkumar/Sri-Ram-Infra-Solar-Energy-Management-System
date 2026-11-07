import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./admin-login.css";
function AdminLogin() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleAdminLogin = async () => {
        try{
            const response = await fetch("http://localhost:3000/logins", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                email: email,
                password: password
            })
        });

        const data = await response.json();
        console.log("backend data is : " +data);
        if(data.success==true){
             navigate("/admin");
        }
        else{
             alert(data.message || "Invalid email or password");
        }
        }
        catch(err){
            console.log("Login error:", err);
            alert("Backend connection failed");
        }
    };

    return (
        <div className="admin-login-page">

            <div className="admin-login-box">

                <h1>Admin Login</h1>

                <p>Welcome to Sri Ram Infra Admin Portal</p>


                <label>Email</label>

                <input
                    type="email"
                    placeholder="Enter admin email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />


                <label>Password</label>

                <input
                    type="password"
                    placeholder="Enter admin password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />


                <button onClick={handleAdminLogin}>
                    Admin Login
                </button>

            </div>

        </div>
    );
}

export default AdminLogin;