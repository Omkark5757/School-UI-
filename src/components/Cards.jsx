import React, { useState } from "react";

const Cards = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const data = [
    {
      title: "Library",
      info: "The library houses over 10,000 books, magazines, and digital resources. Marathi Langauge Book=3000, Hindi Langauge Book=1000, English=6000" ,
      img: "https://tse4.mm.bing.net/th?id=OIP.K7tQ0BZknUwTrtXOOakSlwHaE7&cb=iwp1&rs=1&pid=ImgDetMain"
    },
    {
      title: "Labs",
      info: "We have fully equipped science and computer labs with modern equipment.LCD Desktop=150,  Projector=10",
      img: "https://tse2.mm.bing.net/th?id=OIP.f_00q5-OuP9RmnHxDr6ulQHaEo&cb=iwp1&rs=1&pid=ImgDetMain"
    },
    {
      title: "Sports",
      info: "Our sports facilities include a football ground, basketball court, and indoor games.",
      img: "https://tse2.mm.bing.net/th?id=OIP.GZ2pvMJVlwsVblKkY5sjugHaE8&cb=iwp1&rs=1&pid=ImgDetMain"
    },
    {
      title: "Clubs",
      info: "Various clubs like science, debate, drama, and environment are available for students.",
      img: "https://tse4.mm.bing.net/th?id=OIP.ym4mrZbYWZZjMvevEw8ZfQHaE7&cb=iwp1&rs=1&pid=ImgDetMain"
    }
  ];

  const toggleInfo = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="cards">
      <h2 className="cards-heading">Our School Facility</h2>
      {data.map((item, index) => (
        <div
          className="card"
          key={index}
          onClick={() => toggleInfo(index)}
          style={{ cursor: "pointer" }}
        >
          <img src={item.img} alt={item.title} style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "8px" }} />
          <h3>{item.title}</h3>
          <p>Click to see more info</p>
          {activeIndex === index && <p>{item.info}</p>}
        </div>
      ))}
    </section>
  );
};

export default Cards;
