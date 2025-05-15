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
  },
  {
    id: 2,
    title: "SPA SERVICES",
    images: spa,
  },
  {
    id: 3,
    title: "LOCAL TOURS",
    images: tours,
  },
  {
    id: 4,
    title: "BIKE RENTALS",
    images: rental,
  },
  {
    id: 5,
    title: "LIVE MUSIC",
    images: music,
  },
  {
    id: 6,
    title: "FUN ZONE FOR KIDS ",
    images: funzone,
  },
  {
    id: 7,
    title: "GYM ",
    images: gym
  },
  {
    id: 8,
    title: "BAR",
    images: bar,
  },
  {
    id: 9,
    title: "POOL",
    images: pool,
  },
  ];
  return (
    <>
      <div className="content4-head" data-aos="fade-up">
        <div className="explore-section">
          <h2 className="explore-title">Our Services</h2>
          <div className="explore-grid">
            {activities.map((item, index) => {
              return (
                <div key={index} className="explore-card">
                  <img src={item.images} alt={item.label} />
                  <p>{item.title}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <Content6 />
    </>

  )
}

export default Activities