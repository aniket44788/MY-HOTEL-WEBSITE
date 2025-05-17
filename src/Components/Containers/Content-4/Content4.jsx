import React from 'react'
import { Link } from "react-router-dom"
import "./content4.css";

const exploreItems = [
  { image: "room.jpg", label: "Rooms", link: "/Room" },
  { image: "dining.jpg", label: "Dining" },
  { image: "gym.jpg", label: "Fitness Centre" },
  { image: "meetingroom.jpg", label: "Meeting Events" },
  { image: "pool.jpg", label: "Pool" },
  { image: "spa.jpg", label: "Spa" },
  { image: "bar.jpg", label: "Bar" },
  { image: "gallery.jpg", label: "Gallery" },
  { image: "attraction.jpg", label: "Attractions" },
  { image: "parking.jpg", label: "Free Parking" },
];

function Content4() {
  return (
    <div className="content4-head" data-aos = "fade-up">
      <div className="explore-section">
        <h2 className="explore-title">Explore More</h2>
        <div className="explore-grid">
          {exploreItems.map((item, index) => {
            const cardContent = (
              <div key={index} className="e-explore-card">
                <img src={`/images/${item.image}`} alt={item.label} />
                <p>{item.label}</p>
              </div>
            );
            return item.link ? (
              <Link key={index} to={item.link} className="explore-link">
                {cardContent}
              </Link>
            ) : (
              cardContent
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Content4;
