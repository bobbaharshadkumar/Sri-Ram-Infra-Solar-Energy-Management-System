import { useNavigate } from "react-router-dom";
import "./coustomer-login.css";
import { useState } from "react"; 
function Login() {
    const[email,updateemail]=useState("");
    const[password,updatepassword]=useState("");
    const navigate = useNavigate();
    const handlelogin = async () => {
    console.log("Login button clicked");

    try {
        const response = await fetch("http://localhost:3000/login", {
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

        console.log("Backend response:", data);

        if (data.success === true) {
            navigate("/coustomer");
        } else {
            alert(data.message || "Invalid email or password");
        }
    } catch (err) {
        console.log("Login error:", err);
        alert("Backend connection failed");
    }
};
    return (
        <div className="login-page">

            <div className="login-box">
                <h1>Login</h1>
                <p>Welcome to Sri Ram Infra</p>
                <label>Email</label>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e)=>updateemail(e.target.value)}
                />

                <label>Password</label>
                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(pa)=>updatepassword(pa.target.value)}
                />

                <button onClick={handlelogin}>
                    Login
                </button>

            </div>

        </div>
    );
}
export default Login;

