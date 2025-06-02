import React from "react";

const MapContact = () => (
  <section className="contact">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3786.433177122944!2d74.18976747495927!3d18.373126082692018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2e2f56dbe9281%3A0xdbde3700b7fb4267!2sDr.%20Shankarrao%20Kolte%20Vidyalay%20%26%20Jr.%20College!5e0!3m2!1sen!2sin!4v1746705593138!5m2!1sen!2sin"
      width="100%"
      height="300"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="school-location"
    ></iframe>
    <div className="contact-details">
      <p>Email: dsk@school.com</p>
      <p>Phone: +020 456 7890</p>
    </div>
  </section>
);

export default MapContact;
