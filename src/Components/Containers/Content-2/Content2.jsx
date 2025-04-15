import React, { useState } from 'react'
import "./content2.css"
import hlogo from "../Images/hotel-png.png"
function Content2() {
 const [showFullText, setShowFullText] = useState(false)

  return (
    <div className="content-data">
        <div className="content-logo"> <img src={hlogo} alt="" className='img-logo' /> </div>
        <div className="content-des">
            <div className="content-heading-title"> About us</div>
            <div className="content-heading-des"> Space is always a premium in the mountains. We probably offer you an option of the largest rooms in Dharmshala . Set on top of a hill with the most amazing view all around, nearly all our rooms look onto the surrounding mountains & valley. Natural light, bright floral tapestry, comfortable king size beds with generous seating, tea/coffee maker, smart LED television and centralized heat and air conditioning systems all of this the Hotel White Mountain srvices .</div>
        </div>
    </div>
  )
}

export default Content2