import "./services.css";

function Services() {
    return (
        <div className="services-page">

            <section className="services-hero">
                <h1>Our Solar Services</h1>
                <p>
                    Reliable solar solutions designed for homes and businesses.
                </p>
            </section>


            <section className="services-section">

                <h2>What We Offer</h2>

                <p className="services-intro">
                    From planning to installation and support, we take care of
                    your solar journey with quality and attention to detail.
                </p>


                <div className="services-container">

                    <div className="service-card">
                        <div className="service-icon">☀️</div>
                        <h3>Residential Solar</h3>
                        <p>
                            Smart and efficient solar solutions for homes,
                            helping you reduce electricity costs and use clean energy.
                        </p>
                    </div>


                    <div className="service-card">
                        <div className="service-icon">🏭</div>
                        <h3>Commercial & Industrial Solar</h3>
                        <p>
                            Reliable solar systems designed to support
                            businesses with efficient and sustainable power.
                        </p>
                    </div>


                    <div className="service-card">
                        <div className="service-icon">🔧</div>
                        <h3>Professional Installation</h3>
                        <p>
                            Careful installation with proper planning,
                            safe setup, and attention to system performance.
                        </p>
                    </div>


                    <div className="service-card">
                        <div className="service-icon">🛠️</div>
                        <h3>Maintenance & Support</h3>
                        <p>
                            Ongoing support to help keep your solar system
                            performing efficiently for years.
                        </p>
                    </div>

                </div>

            </section>


            <section className="service-bottom">

                <h2>Power Your Future With Solar</h2>

                <p>
                    Quality solutions. Professional service. Long-term value.
                </p>

                <button>Get a Free Quote →</button>

            </section>

        </div>
    );
}

export default Services;