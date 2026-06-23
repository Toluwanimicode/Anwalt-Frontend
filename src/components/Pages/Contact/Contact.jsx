import React, { useState } from "react";
import Footer from "../../Footer/Footer";
import NavigationBar from "../../Navbar/Navbar";
import "./Contact.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    // Backend/API logic goes here

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      telephone: "",
      message: "",
    });
  };

  return (
    <div>
      <NavigationBar />

      {/* Styled Map Container */}
      <div className="contact-map-holder">
        <iframe
          title="Contact Location Map"
          src="https://maps.google.com/maps?q=Webster%20Ave%2020&t=&z=14&ie=UTF8&iwloc=&output=embed"
          className="contact-map-iframe"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="contact-container">
        <h2 className="form-text-a">Need some help?</h2>

        <p className="form-text-b">
          In case you need law assistance or legal help, our team will gladly
          help.
        </p>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="grid-row">
            <div className="grid-col">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid-col">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="grid-row">
            <div className="grid-col">
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid-col">
              <input
                type="tel"
                name="telephone"
                placeholder="Telephone"
                value={formData.telephone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="grid-row">
            <textarea
              name="message"
              placeholder="Message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <div className="button-container">
            <button type="submit">Contact Us</button>
          </div>
        </form>
      </div>

      <div className="office-container">
        <div className="office-card">
          <h3>London Office</h3>
          <span>9 Clapham Road, London SW9</span>
          <span>Phone: +88 (0) 101 0000 001</span>
          <span>Fax: +88 (0) 101 0000 001</span>
          <span>Email: info@example.com</span>
        </div>

        <div className="office-card">
          <h3>New York</h3>
          <span>1170 Broadway, New York, NY</span>
          <span>Phone: +88 (0) 101 0000 001</span>
          <span>Fax: +88 (0) 101 0000 001</span>
          <span>Email: info@example.com</span>
        </div>

        <div className="office-card">
          <h3>Oslo Office</h3>
          <span>Sonja Henies plass 2,0185</span>
          <span>Phone: +88 (0) 101 0000 001</span>
          <span>Fax: +88 (0) 101 0000 001</span>
          <span>Email: info@example.com</span>
        </div>

        <div className="office-card">
          <h3>Zurich Office</h3>
          <span>Bahnhofpl. 15, 8021</span>
          <span>Phone: +88 (0) 101 0000 001</span>
          <span>Fax: +88 (0) 101 0000 001</span>
          <span>Email: info@example.com</span>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;