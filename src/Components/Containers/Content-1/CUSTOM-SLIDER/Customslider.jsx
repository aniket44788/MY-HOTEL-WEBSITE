import { useEffect, useState } from "react";
import first from "../CUSTOM-SLIDER/custom Images/room.jpg";
import second from "../CUSTOM-SLIDER/custom Images/dining.jpg";
import third from "../CUSTOM-SLIDER/custom Images/room.jpg";
import fourth from "../CUSTOM-SLIDER/custom Images/bar.jpg";
import "./customslider.css";

const customslider = () => {
  const images = [first, second, third, fourth];
  const [state, setState] = useState(0);

  // Autoplay every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setState((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const next = () => {
    setState((state + 1) % images.length);
  };

  const prev = () => {
    setState((state - 1 + images.length) % images.length);
  };

  return (
    <div className="slider-container">
      <div
        className="slider-track"
        style={{ transform: `translateX(-${state * 100}%)` }}
      >
        {images.map((img, idx) => (
          <div className="slide" key={idx}>
            <img src={img} alt={`slide-${idx}`} />
          </div>
        ))}
      </div>
      <button className="slider-button left" onClick={prev}>
        {"<"}
      </button>
      <button className="slider-button right" onClick={next}>
        {">"}
      </button>
    </div>
  );
};

export default customslider;
