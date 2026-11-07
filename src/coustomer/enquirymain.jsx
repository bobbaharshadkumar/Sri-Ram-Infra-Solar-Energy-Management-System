import { Link } from "react-router-dom";
import "./enquirymain.css"
function Enquiry(){
    return(
        <div className="here">
            <h1>Welcome to Solar Energy</h1>

            <h2>Have Questions? We're Here to Help!</h2>

              
            <p>
                Do you have any doubts about solar panels,
                installation, pricing, or our services?
            </p>

         <p>
            Here, you can post your enquiry and our team
            will contact you to clarify your doubts.
         </p>

         <button>
            <Link to="/enquiry2"> +Post a new enquiry</Link>
         </button>
        </div>
    );
}
export default Enquiry;
