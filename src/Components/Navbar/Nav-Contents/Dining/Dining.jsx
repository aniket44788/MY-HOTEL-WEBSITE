import React from 'react'
import "./dining.css"
import pot from "../Dining/Dining images/pot.jpg"
import dining from "../Dining/Dining images/dining.jpg"
import pasta from "../Dining/Dining images/pasta.jpg"
import LocationMap from '../../../Containers/Content-5/LocationMap'
import Contact from '../Contact/Contact'
import Content6 from '../../../Containers/Content-6/Content6'
function imp() {
  return (
    <>
      <div className="dining">  DINING </div>
      <div className="dining-1">
        <div className="dining-data1">
          <div className="dining-img">
          <img className='dining-image'  src={dining} alt="" />
          </div>
        </div>
        <div className="dining-data2">
          <h3>REFLECTION-THE RESTAURANT</h3>
          <p>Reflection is an all-day dining restaurant offering both indoor and outdoor seating with 120 covers. This multi-cuisine restaurant is designed with a warm and contemporary feel. It is an ideal setting for family dining through a combination of interactive breakfast buffets and thoughtfully curated à la carte menus for lunch and dinner. The restaurant offers a delectable range of cuisines like the Indian, Chinese, Continental and authentic Himachali dishes by our expert chefs. <br /> <br />

            Terrace garden being an extension of the resort’s exquisite restaurant, it overlooks the beautiful natural landscapes of Kangra valley and Pong dam lake. The picturesque view ensures a unique culinary experience. Relax and bring delight to your palate with our gourmet delicacies to serve diverse tastes and preferences.
            <br /> <br />
            Hours - 7:00 AM to 11:00 PM Everyday</p>
        </div>
      </div>

      <div className="dining-1">
         <div className="dining-data1">
          <div className="dining-img">
          <img className='dining-image'  src={pasta} alt="" />
          </div>
        </div>
         <div className="dining-data2">
          <h3>REFLECTION-THE RESTAURANT</h3>
          <p>Reflection is an all-day dining restaurant offering both indoor and outdoor seating with 120 covers. This multi-cuisine restaurant is designed with a warm and contemporary feel. It is an ideal setting for family dining through a combination of interactive breakfast buffets and thoughtfully curated à la carte menus for lunch and dinner. The restaurant offers a delectable range of cuisines like the Indian, Chinese, Continental and authentic Himachali dishes by our expert chefs. <br /> <br />

            Terrace garden being an extension of the resort’s exquisite restaurant, it overlooks the beautiful natural landscapes of Kangra valley and Pong dam lake. The picturesque view ensures a unique culinary experience. Relax and bring delight to your palate with our gourmet delicacies to serve diverse tastes and preferences.
            <br /> <br />
            Hours - 7:00 AM to 11:00 PM Everyday</p>
        </div>
       
       
      </div>


   
      <LocationMap/>
      <Content6/>
    </>
  )
}

export default imp