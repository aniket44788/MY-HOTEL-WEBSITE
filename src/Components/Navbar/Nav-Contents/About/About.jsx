import React from 'react';
import './about.css';
import Content6 from "../../../Containers/Content-6/Content6"
import resortImg from "../About/attraction.jpg"
function AboutResort() {
  const stats = [
    { id: 1, value: "20+", label: "Unique Attractions Nearby", icon: "🗺️" },
    { id: 2, value: "5", label: "Transport options — Taxi, Rail, Car, Bus & Air", icon: "🚖" },
    { id: 3, value: "40,000+", label: "Bookings made", icon: "🌐" },
    { id: 4, value: "35", label: "Rooms with valley view", icon: "🏨" },
  ];

  return (<>
  
    <section className="about-section">
      <h4 className="sub-title">Who We Are</h4>
      <h1 className="main-title">About Hotel Mountain View , DHARAMSHALA </h1>
      <div className="cards-container">
        {stats.map(stat => (
          <div key={stat.id} className="info-card">
            <div className="icon">{stat.icon}</div>
            <h2>{stat.value}</h2>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
     <section className="vacation-plan">
      <div className="vacation-text">
        <h2>Let’s plan your next vacation</h2>
        <p>
          Enjoy breath-taking views around a scenic location at the Indraprastha Resort & Spa, McLeod Ganj — Dharamshala. 
          Our property is well connected by all means of transport and in close proximity of major attractions for sightseeing.
        </p>
        <ul>
          <li>45 mins (24 km) from Gaggal Airport</li>
          <li>6 hrs (270 km) from Chandigarh, 11 hrs (510 km) from New Delhi</li>
          <li>5 km from Mcleodganj Main Square & 14 km from Dharamshala Cricket Stadium</li>
          <li>5 km from the Dalai Lama Temple Complex</li>
          <li>Trekking, mountaineering, and paragliding nearby</li>
          <li>Shopping for Tibetan handicrafts in local bazaars</li>
          <li>14 km from War Memorial, Kangra Art Museum</li>
          <li>110 km from Pathankot Railway Station</li>
        </ul>
      </div>
      <div className="vacation-image">
        <img src={resortImg} alt="Indraprastha Resort" />
      </div>
    </section>
<Content6/>
    </>

  );
}

export default AboutResort;
