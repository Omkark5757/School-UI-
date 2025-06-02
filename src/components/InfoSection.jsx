import React from "react";
import SchoolVideo from "../assets/SchoolVideo.mp4";

const InfoSection = () => (
  <section className="info-section">
   
    <h1 className="section-heading">About Our School</h1>

   
    <div className="content-container">
      <div className="video-container">
        <video
          src={SchoolVideo}
          autoPlay
          muted
          loop
          controls
          width="600"
          height="400"
        />
      </div>

      <div className="info-text">
        <p>
        <strong>Dr. Shankarrao Kolate Vidyalaya & Junior College Pisarve</strong> is in cluster PISARVE, situated in Maharashtra. It is Co-educational and spans from class 5 to class 12.
        It is a Government-Aided Private school located in a rural area.
        </p>
        <p>
          <strong>Facilities:</strong><br />
          1. Drinking Water: Yes<br />
        2. Handwash: Yes<br />
        3. Functional Generator: 2<br />
        4. Library: Yes<br />
        5. Reading Corner: Yes<br />
        6. Book Bank: Yes<br />
        7. Functional Tablet: 0<br />
        8. Functional Desktop: 0<br />
        9. Functional Laptop: 7<br />
        10. Functional Scanner: 1<br />
        11. Functional Printer: 2<br />
        12. Functional LED: 6<br />
        13. Functional Digiboard: 0<br />
        14. Internet: Yes<br />
        15. DTH: No<br />
        16. Functional Webcam: 1
          
        </p>
        <p>We provide quality education with a focus on student development.</p>
      </div>
    </div>
  </section>
);

export default InfoSection;
