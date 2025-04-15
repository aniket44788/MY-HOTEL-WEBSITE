import React from 'react'
import Content1 from "../../../Containers/Content-1/Content1"
import HotelBooking from '../../../BookingPage/Bookingpage'
import Content2 from "../../../Containers/Content-2/Content2"
import Content3 from "../../../Containers/Content-3/Content3"
import Content4 from "../../../Containers/Content-4/Content4"
import LocationMap from "../../../Containers/Content-5/LocationMap"
import Content6 from "../../../Containers/Content-6/Content6"
function Home() {
  return (
    <>
    <Content1/>
      <HotelBooking />
      <Content2 />
      <Content3 />
      <Content4 />
      <LocationMap />
      <Content6 />
      </>
  )
}

export default Home