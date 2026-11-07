
import { Link } from "react-router-dom";
import "./admin or coustomer.css";
function LoginSelection() {
    return (
        <div className="login-selection">

            <div className="login-content">

                <h1>Welcome to Sri Ram Infra</h1>

                <p>
                    We are happy to have you here. Please select your
                    account type to continue. Whether you are a customer
                    looking to manage your solar journey or an administrator
                    managing the business, choose the appropriate login option
                    below.
                </p>

                <div className="login-options">

                    <div className="login-card">
                        <div className="login-icon">☀️</div>

                        <h2>Customer Login</h2>

                        <p>
                            Access your enquiries, quotations, project
                            progress and service requests.
                        </p>

                        <Link to="/coustomer-login">
                            <button>Customer Login</button>
                        </Link>
                    </div>

                    <div className="login-card">
                        <div className="login-icon">👨‍💼</div>

                        <h2>Admin Login</h2>

                        <p>
                            Manage customer enquiries, projects,
                            quotations and service requests.
                        </p>

                        <Link to="/admin-login">
                            <button>Admin Login</button>
                        </Link>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default LoginSelection;