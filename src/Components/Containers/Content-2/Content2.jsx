
import "./content2.css"
import hlogo from "../Images/hotel-png.png"
function Content2() {

  return (
    <div className="content-data ">
        <div className="content-logo"> <img src={hlogo} alt="" className='img-logo' /> </div>
        <div className="content-des">
            <div className="content-heading-title"> About us</div>
            <div className="content-heading-des">  We probably offer you an option of the largest rooms in Dharmshala . Set on top of a hill with the most amazing view all around, nearly all our rooms look onto the surrounding mountains & valley.</div>
        </div>
    </div>
  )
}

export default Content2