import React, { useState } from 'react'
import "./room.css"
import roomimg from "../Room/room.jpg"
import gallery from "../Room/gallery.jpg"
import spa from "../Room/spa.jpg"
import dining from "../Room/dining.jpg"
import LocationMap from '../../../Containers/Content-5/LocationMap'
import Content6 from '../../../Containers/Content-6/Content6'

function Room() {
  const [expandedRooms, setExpandedRooms] = useState({});

  const toggleRoomExpansion = (id) => {
    setExpandedRooms(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const roomDetails = {
    checkInOut: [
      "Check in 13:00 PM",
      "Check out 11:00 AM"
    ],
    amenities: [
      "Mini Fridge",
      "Non-Smoking Rooms",
      "Pillow Top Mattress",
      "Free Wi-Fi",
      "Smart TV",
      "Tea Coffee Maker",
      "Weighing Scale",
      "Electronic Safe Locker"
    ],
    otherServices: [
      "Business Centre",
      "Cribs Available",
      "In House Laundry Service",
      "Luggage Hold",
      "Gymnasium/Yoga Room",
      "Airport Transfers",
      "Travel Assistance",
      "Express Check-In",
      "Express Check-Out",
      "Kids Zone",
      "Valet Parking",
      "Wheel Chair"
    ]
  };

  const { checkInOut, amenities, otherServices } = roomDetails;

  const renderList = (title, items) => (
    <div className="section">
      <h3 className="section-title">{title}</h3>
      <ul className="section-list">
        {items.map((item, index) => (
          <li key={index} className="list-item"> ✔ {item}</li>
        ))}
      </ul>
    </div>
  );

  const roomData = [
    {
      id: 1,
      image: roomimg,
      title: "Superior Room",
      intro: "The Deluxe Rooms with private balcony are tastefully decorated amidst the beautiful view of the Pine forest. Enjoy our bright & airy deluxe room with unobstructed view of valley & mountains.",
      amenities: [
        "One king bed",
        "49” LCD Smart TV",
        "Complimentary morning yoga and meditation session and morning nature walk",
        "Bathroom with walk-in shower and wardrobe",
        "Premium bath amenities",
        "Large, openable windows",
        "In-room safe",
        "Complimentary Soulfilling Tea Tales experience",
        "Complimentary high-speed Wi-Fi across the resort",
        "24-hour in-room dining",
        "Access to resort services and amenities: fitness centre, spa, temperature-controlled indoor pool, meditation room, sedar deck, steam sauna, concierge, and all complimentary activities organized at or outside the resort"
      ]
    }


    ,
    {
      id: 2,
      image: gallery,
      title: "Deluxe Room",
      intro: "The Superior rooms offer king-size beds to provide our guests, a comfortable good night's sleep in the panoramic view of the spectacular Kangra Valley & Dhauladhar Mountains ",
      amenities: [
        "One king bed",
        "49” LCD Smart TV",
        "Complimentary morning yoga and meditation session and morning nature walk",
        "Bathroom with walk-in shower and wardrobe",
        "Premium bath amenities",
        "Large, openable windows",
        "In-room safe",
        "Complimentary Soulfilling Tea Tales experience",
        "Complimentary high-speed Wi-Fi across the resort",
        "24-hour in-room dining",
        "Access to resort services and amenities: fitness centre, spa, temperature-controlled indoor pool, meditation room, sedar deck, steam sauna, concierge, and all complimentary activities organized at or outside the resort"
      ]
    
    
    },
    {
      id: 3,
      image: dining,
      title: "Executive Room",
      intro: "Experience the elegance of our Executive Rooms featuring modern amenities and a private balcony with stunning views of the Dhauladhar Mountains and pine forest.",
      amenities: [
        "One king bed",
        "49” LCD Smart TV",
        "Complimentary morning yoga and meditation session and morning nature walk",
        "Bathroom with walk-in shower and wardrobe",
        "Premium bath amenities",
        "Large, openable windows",
        "In-room safe",
        "Complimentary Soulfilling Tea Tales experience",
        "Complimentary high-speed Wi-Fi across the resort",
        "24-hour in-room dining",
        "Access to resort services and amenities: fitness centre, spa, temperature-controlled indoor pool, meditation room, sedar deck, steam sauna, concierge, and all complimentary activities organized at or outside the resort"
      ]
    },
    {
      id: 4,
      image: spa,
      title: "Jr. Suite",
      intro: "Experience the elegance of our Executive Rooms featuring modern amenities and a private balcony with stunning views of the Dhauladhar Mountains and pine forest.",
      amenities: [
        "One king bed",
        "49” LCD Smart TV",
        "Complimentary morning yoga and meditation session and morning nature walk",
        "Bathroom with walk-in shower and wardrobe",
        "Premium bath amenities",
        "Large, openable windows",
        "In-room safe",
        "Complimentary Soulfilling Tea Tales experience",
        "Complimentary high-speed Wi-Fi across the resort",
        "24-hour in-room dining",
        "Access to resort services and amenities: fitness centre, spa, temperature-controlled indoor pool, meditation room, sedar deck, steam sauna, concierge, and all complimentary activities organized at or outside the resort"
      ]
    }
  ];

  return (
    <>
      <div className="main-room-div">
        <div className="room-head">
          {roomData.map((item) => (
            <div key={item.id} className="room-div">
              <div className="room-img">
                <img src={item.image} className='roomimg' alt={item.title} />
              </div>
              <div className="room-des">
                <h5 className='room-title'>{item.title}</h5>
                <div className={`room-intro ${expandedRooms[item.id] ? 'expanded' : ''}`}>
                  {item.intro}

                  {expandedRooms[item.id] && item.amenities && (
                    <ul className="amenities-list">
                      {item.amenities.map((amenity, index) => (
                        <li key={index} className="amenity-item">✔ {amenity}</li>
                      ))}
                    </ul>
                  )}
                </div>


                <button
                  className="read-more-button"
                  onClick={() => toggleRoomExpansion(item.id)}
                >
                  <p className="button-text">
                    {expandedRooms[item.id] ? 'Read Less' : 'Read More'}
                  </p>
                  <p className="iconer">
                    <svg
                      height="24"
                      width="24"
                      viewBox="0 0 24 24"
                      style={{ transform: expandedRooms[item.id] ? 'rotate(90deg)' : 'rotate(0deg)' }}
                    >
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path>
                    </svg>
                  </p>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="room-right-head">
          <div className="room-details-container">
            {renderList("Check In / Check Out", checkInOut)}
            {renderList("Guest Room Amenities", amenities)}
            {renderList("Other Services", otherServices)}
          </div>
        </div>
      </div>

      <LocationMap />
      <Content6 />
    </>
  )
}

export default Room