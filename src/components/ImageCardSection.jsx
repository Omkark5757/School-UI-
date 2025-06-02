import React from "react";

const ImageCardSection = () => {
  const data = [
    { title: "Science Fair", img: "https://th.bing.com/th/id/OIP.__FOn2_BDB4x59E9nkT4AQHaE9?w=297&h=199&c=7&r=0&o=7&cb=iwp1&dpr=1.3&pid=1.7&rm=3", },
    { title: "Annual Day", img: "https://th.bing.com/th/id/OIP.55AhDXGEWBei1sDc8NqY4gHaEh?w=280&h=180&c=7&r=0&o=7&cb=iwp1&dpr=1.3&pid=1.7&rm=3" },
    { title: "Sports Day", img: "https://th.bing.com/th/id/OIP.f7Nf-W-0FpFYCh4PBUvwQAHaE7?w=342&h=186&c=7&r=0&o=7&cb=iwp1&dpr=1.3&pid=1.7&rm=3" },
    { title: "Teacher Day", img:"https://th.bing.com/th/id/OIP.ni6o6DmtmAu3fxUrmVkClQHaEK?w=276&h=180&c=7&r=0&o=7&cb=iwp1&dpr=1.3&pid=1.7&rm=3" },
    
    { title: "Independance Day", img:"https://th.bing.com/th/id/OIP.AD1SSB1V45nv2UhYC0tYGAHaFj?w=229&h=180&c=7&r=0&o=7&cb=iwp1&dpr=1.3&pid=1.7&rm=3" },
  ];

  return (
    <section className="image-card-section">
      <h2 className="cards-heading">Our Day Celebration</h2>
      {data.map((event, i) => (
        <div className="card" key={i}>
          <img src={event.img} alt={event.title} />
          <h4>{event.title}</h4>
        </div>
      ))}
    </section>
  );
};

export default ImageCardSection;
