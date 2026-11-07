import "./Home.css";
import { Link } from "react-router-dom";
import solarimg from "../assets/solarheoimg.jpg";
import resedential from "../assets/solar resedential.jpg";
import industrial from "../assets/solar industrial.webp";
import installation from "../assets/solar installation.jpg";
import maintainance from "../assets/solar maintanence.jpeg";
import icon from "../assets/sriraminfraicon.png";

function Home() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">🌤️ Sri Ram Infra</div>
        <div className="nav-links">
          <a href="/">Home</a>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/admin or coustomer">
          <button>Login</button>
          </Link>
          <Link to="/Register">
          <button>Register</button>
          </Link>
          <Link to="/coustomer">navigate</Link>
          <Link to="/admin">Navigate22</Link>
          
        </div>
      </nav>

      <div className="heros">
        <section
          className="hero"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.45) 50%, rgba(0, 0, 0, 0.1) 100%), url(${solarimg})`,
          }}
        >
          <div className="hero-content">
            <h1 className="h1">sustainable energy solutions</h1>
            <h3 className="h3">Power Your Future With Solar Energy</h3>
            <p>☀️Power Your Home With Clean Energy</p>
            <p>🌱 Save Today, Shine Brighter Tomorrow.</p>
            <div className="forbuttons">
              <button className="quote-btn">Get a Free Quote →</button>
              <button className="projects-btn">Explore Projects</button>
            </div>
          </div>
        </section>
      </div>

      <div className="outermaindiv">
        <div className="feature">
          <div className="icon">💰</div>
          <div className="feature-text">
            <h3>Save money</h3>
            <p>Lower your electricity bills and get more value.</p>
          </div>
        </div>

        <div className="feature">
          <div className="icon">⚡</div>
          <div className="feature-text">
            <h3>Reliable Power</h3>
            <p>Consistent and dependable energy for your home or business.</p>
          </div>
        </div>

        <div className="feature">
          <div className="icon">🌍</div>
          <div className="feature-text">
            <h3>Save Today, Shine Tomorrow</h3>
            <p>Invest in Sunshine, Save for Years.</p>
          </div>
        </div>

        <div className="feature">
          <div className="icon">📈</div>
          <div className="feature-text">
            <h3>Long-Term Savings</h3>
            <p>A smart investment for a brighter future.</p>
          </div>
        </div>
      </div>

      <div className="caluculator">
        <div className="leftside">
          <h2 className="cal">🧮 Caluculator for assumption</h2>
          <p>Here is the Caluculator We can Use it to caluculate Your Requirement</p>
          <h3>Your Monthly Electricity bill!!</h3>
          <input type="number" placeholder="Enter your monthly bill" className="input" />
          <button>Caluculate</button>
        </div>

        <div className="Rightside">
          <div className="icon">💡</div>
          <h3>Estimated Result is :</h3>
          <div>The Caluculated Voltage is </div>
        </div>
      </div>

      <div className="services">
        <h3>Our Services</h3>
        <p className="p">Your Energy, Our Responsibility — Solar Solutions You Can Trust.</p>

        <div className="parent">
          <div className="feature">
            <div className="img">
              <img src={resedential} alt="solarresedentialimage" />
              <h3>Resedential Solar</h3>
              <p>Our Technichians are avaliable for the resendials installments.</p>
              <a href="">LearnMore ➡️</a>
            </div>
          </div>

          <div className="feature">
            <div className="img">
              <img src={industrial} alt="solarinsutrialimage" />
              <h3>Industrial Solar</h3>
              <p>We Have Ability To Perform the Industrail Installments.</p>
              <a href="">LearnMore ➡️</a>
            </div>
          </div>

          <div className="feature">
            <div className="img">
              <img src={installation} alt="solarinstallationimage" />
              <h3>Installations</h3>
              <p>All Installation will be Done!!.</p>
              <a href="">LearnMore ➡️</a>
            </div>
          </div>

          <div className="feature">
            <div className="img">
              <img src={maintainance} alt="solarmaintainenceimage" />
              <h3>Solar Maintainance</h3>
              <p>Not Only Selling Your Solar Maintainance also done for you.</p>
              <a href="">LearnMore ➡️</a>
            </div>
          </div>
        </div>
      </div>

      <div className="parent">
        <div className="mainone">
          <img src={icon} alt="sriraminfraicon" />
        </div>

        <div className="matter">
          <h3>Why Choose Us?</h3>
          <h4>We are committed to delevering the best solar solution with the best quality</h4>
          <h5>Expertize and reliable Product</h5>

          <div className="listed">
            <ul>
              <li>High Quality solar panels.</li>
              <li>Professtional installements.</li>
              <li>Experienced and certified Team.</li>
              <li>After-sales Support & Warranty</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mainones">
        <h2>How Our Work flow</h2>
        <h3>Getting solar is easy .Just follow these five Easy steps</h3>

        <div className="features-container">
          <div className="workflow">
            <div className="step">
              <div className="features">
                <p>📞</p>
                <h4>1. Consultation</h4>
              </div>
              <p>Understanding your needs</p>
            </div>

            <div className="step">
              <div className="features">
                <p>📍</p>
                <h4>2. Site Survey</h4>
              </div>
              <p>Check Your Location</p>
            </div>

            <div className="step">
              <div className="features">
                <p>🏠☀️</p>
                <h4>3. Design</h4>
              </div>
              <p>Customer solution</p>
            </div>

            <div className="step">
              <div className="features">
                <p>🛠️</p>
                <h4>4. Installation</h4>
              </div>
              <p>Professional Setup</p>
            </div>

            <div className="step">
              <div className="features">
                <p>🖥️</p>
                <h4>5. Monitoring</h4>
              </div>
              <p>Track Your Performance</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="footerclass">
            <div className="1stone">
                <div><h3> ☀️Solar Energy</h3></div>
                <div><h5>Clean energy for the Bright Tomorrow</h5></div>
            </div>
            <div className="2ndone">
                <h3>Quick Links</h3>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="3rdone">
                <h3>Contact Us</h3>
                <ul>
                    <li>📞 +918096858531</li>
                    <li>💌 bobbaharshadkumar877@gmail.con</li>
                    <li>📍 Tanuku,Eastgodavari Ap.</li>
                </ul>
            </div>
        </div>
      </div>
      <div className="lastone">
           <h4>@ 2026  All Solar Rights are Reserved </h4>
      </div>
    </div>
  );
}

export default Home;
