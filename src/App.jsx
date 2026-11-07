
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './components/Home.jsx'
import About from './components/about.jsx'
import Services from './components/sevices.jsx'
import Projects from './components/projects.jsx'
import Contact from './components/contact.jsx'
import Loginselection from './authentications login register/admin or coustomer.jsx'
import Customerlogin from './authentications login register/coustomer-login.jsx'
import Adminlogin from './authentications login register/admin-login.jsx'
import Register from './authentications login register/Register.jsx';
import Coustomer from './coustomer/coustomer.jsx';
import Enquirymain from './coustomer/enquirymain.jsx';
import Enquirysecond from './coustomer/enquiry2.jsx';
import Sucess from './coustomer/sucesspage.jsx';
import Quotation from './coustomer/quotation.jsx';
import Service from './coustomer/service.jsx';
import Adminmain from "./Admin/admin.jsx";
import Dash from './Admin/sidebarcomponents/Dashboard.jsx';
import Enquiries from "./Admin/sidebarcomponents/Enquiries.jsx";
import Registeredcustomers from "./Admin/sidebarcomponents/Registeredcustomers.jsx";
import Servicefromcustomer from"./Admin/sidebarcomponents/servicefromcustomers.jsx";
import Projectservices from "./Admin/sidebarcomponents/Projectprogress.jsx";
import './App.css';
function App() {
  return(
    <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/admin or coustomer" element={<Loginselection/>}/>
            <Route path="/coustomer-login" element={<Customerlogin/>}/>
            <Route path="/admin-login" element={<Adminlogin/>}/>
            <Route path="/Register" element={<Register/>}/>
            <Route path="/coustomer" element={<Coustomer/>}/>
            <Route path="/customer/enquirymain" element={<Enquirymain/>}/>
            <Route path="/enquiry2" element={<Enquirysecond/>}/>
            <Route path="/sucesspage" element={<Sucess/>}/>
            <Route path="customer/quotation" element={<Quotation/>}/>
            <Route path="/servicepagehere" element={<Service/>}/>
            <Route path="/admin" element={<Adminmain />}>
                 <Route index element={<Dash />} />
            </Route>
            <Route path="/admin/enquiries" element={<Enquiries/>}/>
            <Route path="/admin/dashboard" element={<Dash/>}/>
            <Route path="/admin/registered-customers" element={<Registeredcustomers/>}/>
            <Route path="/admin/servicereqfromcustomers" element={<Servicefromcustomer/>}/>
            <Route path="/admin/project-progress" element={<Projectservices/>}/>
         </Routes>
    </BrowserRouter>
  );
}

export default App
