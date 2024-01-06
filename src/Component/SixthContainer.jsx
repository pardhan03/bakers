import React from 'react'
import pic1 from '../Images/logo1.jpg'
import pic2 from '../Images/logo2.jpg'
import pic3 from '../Images/logo3.jpg'
import pic4 from '../Images/logo4.jpg'
import pic5 from '../Images/logo5.jpg'
import pic6 from '../Images/logo6.jpg'

const SixthContainer = () => {
  return (
    <div className='sixth_container'>
        <div id='sixth_img'>
            <img src={pic1}/>
        </div>
        <div id='sixth_img'>
            <img src={pic2}/>
        </div>
        <div id='sixth_img'> 
            <img src={pic3}/>
        </div>
        <div id='sixth_img'>
            <img src={pic4}/>
        </div>
        <div id='sixth_img'>
            <img src={pic5}/>
        </div>
    </div>
  )
}

export default SixthContainer