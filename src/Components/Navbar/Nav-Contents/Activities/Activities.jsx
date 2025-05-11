import React from 'react'
import yoga from "../Activities/Act-images/yoga.jpg"
import spa from "../Activities/Act-images/spa.jpg"
import tours from "../Activities/Act-images/tours.jpg"
import rental from "../Activities/Act-images/rental.jpg"
import music from "../Activities/Act-images/music.jpg"
import funzone from "../Activities/Act-images/funzone.jpg"
import gym from "../Activities/Act-images/gym.jpg"
import bar from "../Activities/Act-images/bar.jpg"
import pool from "../Activities/Act-images/pool.jpg"
import Content6 from '../../../Containers/Content-6/Content6'

import "./activities.css"
function Activities() {

  const activities = [{
    id: 1,
    title: "YOGA CLASSES",
    images: yoga,
    description: "Hotel operators can leverage yoga studios and teachers worldwide to engage guests and improve the in-stay experience. Offering daily yoga or meditation classes can increase revenue, either on a pay-per-class or package basis."
  },
  {
     id: 2,
    title: "SPA SERVICES",
    images: spa,
    description: "Spa services offer a luxurious stay for guests, partnering with local masseurs to offer special rates and discounts. These services can be included as upsells in a hotel's mobile check-in process."
  },
  {
     id: 3,
    title: "LOCAL TOURS",
    images: tours,
    description: "Movie nights provide hoteliers with a dual opportunity to boost their bottom lines by offering premium snacks and beverages, and improve the overall guest experience at the same time."
  },
{
     id: 4,
    title: "BIKE RENTALS",
    images: rental,
    description: "Depending on the environment surrounding the hotel, you may even want to consider offering multiple types of bikes — mountain, beach cruisers, BMX, electric — that will ensure guests have the best experience imaginable"
  },
  {
     id: 5,
    title: "LIVE MUSIC",
    images: music,
    description: "Hoteliers can enhance their lobby atmosphere by inviting musicians to play music, creating a lively atmosphere, and attracting new customers. This not only enhances the hotel's reputation as a unique destination but also attracts non-guests who may spend money on food or beverages."
  },
  {
     id: 6,
    title: "FUN ZONE FOR KIDS ",
    images: funzone,
    description: "Kid-friendly hotels offer activities like game nights, ensuring both parents and kids are entertained. These events can be held in lobby areas, with staff monitoring and upselling opportunities like food and snacks or low-cost game tournaments."
  },
  {
     id: 7,
    title: "GYM ",
    images: gym,
    description: "Our hotel offers a fully equipped, modern gym designed to keep you active and energized during your stay. Whether you're looking to lift weights, run on state-of-the-art treadmills, or enjoy a full-body workout, our fitness center is open daily and tailored for all fitness levels. Stay committed to your health and wellness without leaving the comfort of the hotel"
  },
  {
     id: 8,
    title: "BAR",
    images: bar,
    description: "Our hotel bar offers a refined setting to relax and enjoy a wide selection of beverages, including classic cocktails, premium spirits, and fine wines. Whether you're winding down after a busy day or looking to socialize, the bar provides a comfortable and stylish atmosphere with exceptional service."
  },
  {
     id: 9,
    title: "POOL",
    images: pool,
    description: "Enjoy a refreshing escape at our hotel’s outdoor pool, featuring temperature-controlled water, comfortable loungers, and poolside service—perfect for relaxation or a quick swim."
  },

];

  return (
    <>
      <div className="gallery head">
        {activities.map((allItems) => {
          return (
            <>
              <div className="allContents">
                <h2 key={allItems.id}></h2>
                <h2>{allItems.title}</h2>
                <img src={allItems.images} className='con-image' width={"100%"} />
                <p> {allItems.description}</p>
              </div>
            </>
          )
        })}
      </div>
        <Content6/>
    </>
    
  )
}

export default Activities