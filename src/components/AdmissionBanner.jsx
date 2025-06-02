import React, { useState } from "react";

const AdmissionBanner = () => {
  const [showForm, setShowForm] = useState(false);

  const feeStructure = [
    { grade: "5th", fee: "₹15,000/year" },
    { grade: "6th", fee: "₹16,000/year" },
    { grade: "7th", fee: "₹17,000/year" },
    { grade: "8th", fee: "₹18,000/year" },
    { grade: "9th", fee: "₹19,000/year" },
    { grade: "10th", fee: "₹20,000/year" },
  ];

  const handleEnrollClick = () => {
    setShowForm(true);
  };

  return (
    <section className="admission-banner" id="admissions">
      <h2>Admissions Open for 2025-26</h2>
      <p>We are now accepting applications for the upcoming academic year.</p>

      <h3>Fee Structure</h3>
      <table className="fee-table">
        <thead>
          <tr>
            <th>Grade</th>
            <th>Fee</th>
          </tr>
        </thead>
        <tbody>
          {feeStructure.map((item, index) => (
            <tr key={index}>
              <td>{item.grade}</td>
              <td>{item.fee}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="enroll-btn" onClick={handleEnrollClick}>
        Enroll Now
      </button>

      {showForm && (
        <form className="registration-form">
          <h3>Registration Form</h3>
          <label>
            Student Name:
            <input type="text" name="studentName" required />
          </label>
          <label>
            Grade Applying For:
            <select name="grade" required>
              {feeStructure.map((item, index) => (
                <option key={index} value={item.grade}>
                  {item.grade}
                </option>
              ))}
            </select>
          </label>
          <label>
            Parent's Contact Number:
            <input type="tel" name="contact" required />
          </label>
          <label>
            Email Address:
            <input type="email" name="email" required />
          </label>
          <button type="submit">Submit Application</button>
        </form>
      )}
    </section>
  );
};

export default AdmissionBanner;
