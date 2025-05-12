import Aos from "aos";
import "aos/dist/aos.css";
import Content1 from "../../../Containers/Content-1/Content1";
import HotelBooking from "../../../BookingPage/Bookingpage";
import Content2 from "../../../Containers/Content-2/Content2";
import Content3 from "../../../Containers/Content-3/Content3";
import Content4 from "../../../Containers/Content-4/Content4";
import LocationMap from "../../../Containers/Content-5/LocationMap";
import Content6 from "../../../Containers/Content-6/Content6";
import "./home.css";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    Aos.init({
      once: false, // Animation will happen only once
      duration: 1000, // Set the duration of the animation (in ms)
      delay: 100, // Set a delay before the animation starts (in ms)
      easing: "ease-in-out", // Easing function for the animation
    });
  }, []);

  return (
    <>
      <div className="main-box" data-aos="fade-up">
        <Content1 />
      </div>
      <div className="main-box" data-aos="fade-up">
        <HotelBooking />
      </div>
      <div className="main-box" data-aos="fade-up">
        <Content2 />
      </div>
      <div className="main-box" data-aos="fade-up">
        <Content3 />
      </div>
      <div className="main-box" data-aos="fade-up">
        <Content4 />
      </div>
      <div className="main-box" data-aos="fade-up">
        <LocationMap />
      </div>
      <div className="main-box" data-aos="fade-up">
        <Content6 />
      </div>
    </>
  );
}

export default Home;
