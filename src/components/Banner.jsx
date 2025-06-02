import React from "react";
import schoolImg from "../assets/school.jpg";
import SchoolVideo from "../assets/SchoolVideo.mp4";


const Banner = () => (
  <section className="banner">
    <h1>Welcome to Our School</h1>
    {/* <img src={schoolImg} alt="School Banner" /> */}
    <video src={SchoolVideo} alt="School Banner" autoPlay muted loop controls width="1600" height={800} ></video>
    
  </section>
);

export default Banner;
