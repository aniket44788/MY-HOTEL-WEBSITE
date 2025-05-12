import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./bookingpage.css";


 function HotelBooking() {
  const [hotel, setHotel] = useState("Hotel White Mountain");
  const [phone, setPhone] = useState("");
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());

  const changeContact = (e) => {
    const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
    setPhone(digits);
  };

  const handleBooking = () => {
    const templateParams = {
      name: "Aniket",
      hotel: hotel,
      check_in: checkIn.toLocaleDateString(),
      check_out: checkOut.toLocaleDateString(),
      phone: phone,
      email: "darkpanda44788@gmail.com",
    };

    emailjs
      .send(
        "service_iekgv4q",
        "template_6ilm3ch",
        templateParams,
        "9g50RYDBCE4t3AIKj"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast.success("Booking Confirmed & Email Sent!");
        },
        (err) => {
          console.log("FAILED...", err);
          toast.error("Booking Confirmed but Email Failed.");
        }
      );
  };

  return (
    <div className="booking-container">
      <h2 className="booking-title">Book Your Stay</h2>

      <div className="form-row">
        <div className="form-group">
          <label>Hotel</label>
          <select value={hotel} onChange={(e) => setHotel(e.target.value)}>
            <option value="Atman, Dharamshala">Hotel White Mountain</option>
          </select>
        </div>

        <div className="form-group">
          <label>Contact no.</label>
          <input
            type="tel"
            placeholder="Enter your contact here"
            value={phone}
            onChange={changeContact}
          />
        </div>

        <div className="form-group">
          <label>Check In</label>
          <DatePicker
            selected={checkIn}
            onChange={(date) => setCheckIn(date)}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}  // 👈 This prevents past dates
          />
        </div>

        <div className="form-group">
          <label>Check Out</label>
          <DatePicker
            selected={checkOut}
            onChange={(date) => setCheckOut(date)}
            dateFormat="dd/MM/yyyy"
              minDate={checkIn} 
          />
        </div>

        <div className="form-group">
          <button onClick={handleBooking} className="book-btn">
            Book Now
          </button>
        </div>
      </div>

      <ToastContainer position="bottom-center" />
    </div>
  );
}
export default HotelBooking