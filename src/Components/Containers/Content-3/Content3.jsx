import React from "react";
import {
  FaParking,
  FaUtensils,
  FaUsers,
  FaSpa,
  FaConciergeBell,
  FaWifi,
  FaBriefcase,
  FaHotel,
  FaTshirt,
  FaSwimmer
} from "react-icons/fa";
import "./content3.css";
function Content3() {
  const facilities = [
    { icon: <FaParking />, label: "Free Parking" },
    { icon: <FaUtensils />, label: "Restaurant" },
    { icon: <FaUsers />, label: "Meeting Facilities" },
    { icon: <FaSpa />, label: "Spa" },
    { icon: <FaSwimmer />, label: "Heated Pool" },
    { icon: <FaConciergeBell />, label: "Concierge" },
    { icon: <FaWifi />, label: "Internet Access" },
    { icon: <FaBriefcase />, label: "Business Services" },
    { icon: <FaHotel />, label: "Resort Property" },
    { icon: <FaTshirt />, label: "Laundry" },
  ];
  return (
    <div className="content3-headbox" data-aos = "fade-up">
      <h2 className="section-title">Hotel Facilities</h2>
      <div className="facilities-grid">
        {facilities.map((item, index) => (
          <div key={index} className="facility-box">
            <div className="icon">{item.icon}</div>
            <span className="label">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  
  );
}

export default Content3;
