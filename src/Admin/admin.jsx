
import { Outlet, useNavigate } from "react-router-dom";
import "./admin.css";

function Adminmain() {
    const navigate = useNavigate();

    return (
        <div className="ad-shell">
            <aside className="ad-side">
                <h2>SRI RAM INFRA</h2>
                <h3>Shine with us</h3>

                <nav className="ad-nav">
                    <button onClick={() => navigate("/admin/dashboard")}>
                        Dashboard
                    </button>

                    <button onClick={() => navigate("/admin/enquiries")}>
                        Enquiries from customers
                    </button>

                    <button onClick={() => navigate("/admin/servicereqfromcustomers")}>
                        service requests from customers
                    </button>

                    <button onClick={() => navigate("/admin/customer-progress")}>
                        Customer Progress
                    </button>

                    <button onClick={() => navigate("/admin/project-progress")}>
                        Project Progress
                    </button>

                    <button onClick={() => navigate("/admin/registered-customers")}>
                        Registered Customers
                    </button>
                </nav>
            </aside>

            <main className="ad-main">
                <Outlet />
            </main>
        </div>
    );
}

export default Adminmain;