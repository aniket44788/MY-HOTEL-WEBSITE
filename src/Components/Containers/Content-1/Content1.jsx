import React from 'react';
import CustomSlider from "../Content-1/CUSTOM-SLIDER/Customslider";
import "./content1.css";


const images = [
  { imgURL: "images/room.jpg", imgAlt: "Resort View 1" },
  { imgURL: "images/dining.jpg", imgAlt: "Resort View 2" },
  { imgURL: "images/meetingroom.jpg", imgAlt: "Resort View 3" },
  { imgURL: "images/bar.jpg", imgAlt: "Resort View 3" },
];

function Content1() {
  return (
    <div className="content-box">
      <div className="App">
        <CustomSlider>
          {images.map((image, index) => (
            <img key={index} src={image.imgURL} alt={image.imgAlt} />
          ))}
        </CustomSlider>
      </div>
    </div>
  );
}

export default Content1;
